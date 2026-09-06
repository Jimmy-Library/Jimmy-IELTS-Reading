'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const root = path.resolve(__dirname, '..');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const types = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  fs.readFile(file, (error, body) => {
    if (error) { res.writeHead(404); res.end(); return; }
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    res.end(body);
  });
});

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const errors = [];
  try {
    const context = await browser.newContext();
    await context.route('https://api.dictionaryapi.dev/**', route => {
      const word = decodeURIComponent(route.request().url().split('/').pop()).toLowerCase();
      const meanings = word === 'image'
        ? [
          { partOfSpeech: 'noun', definitions: [{ definition: 'a visual representation of something', example: 'The image appeared on the screen.' }] },
          { partOfSpeech: 'verb', definitions: [{ definition: 'to make a representation of something' }] }
        ]
        : [{ partOfSpeech: 'adjective', synonyms: ['viable'], antonyms: ['unsustainable'], definitions: [{ definition: 'able to continue over time', example: 'We need a sustainable approach.' }] }];
      route.fulfill({ contentType: 'application/json', body: JSON.stringify([{ word, phonetic: '/test/',
        phonetics: [{ text: '/british/', audio: 'https://audio.test/' + word + '-uk.mp3' }, { text: '/american/', audio: 'https://audio.test/' + word + '-us.mp3' }], meanings }]) });
    });
    await context.route('https://api.datamuse.com/**', route => {
      const url = route.request().url();
      const words = url.includes('rel_ant') ? ['temporary'] : url.includes('rel_syn') ? ['durable'] : ['development'];
      route.fulfill({ contentType: 'application/json', body: JSON.stringify(words.map(word => ({ word }))) });
    });
    await context.route('https://api.mymemory.translated.net/**', route => route.fulfill({
      contentType: 'application/json', body: JSON.stringify({ responseData: { translatedText: '可持续的' } })
    }));
    await context.route('https://api.tatoeba.org/**', route => route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify({ data: Array.from({ length: 10 }, (_, index) => ({
        id: 1000 + index, text: 'This is a useful open example sentence number ' + (index + 1) + '.', lang: 'eng',
        license: 'CC BY 2.0 FR', owner: 'tester', is_unapproved: false
      })) })
    }));
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(() => {
      localStorage.setItem('onboardingCompleted_v2', 'true');
      localStorage.setItem('jimmy_browser_notice_dismissed_v1', 'true');
      if (!localStorage.getItem('jimmy_vocabulary_notebook_v1')) {
        localStorage.setItem('jimmy_vocabulary_notebook_v1', '[]');
      }
    });
    await page.goto(origin + '/Jimmy%E9%98%85%E8%AF%BB%E6%9C%BA%E8%80%83.html?view=vocab', { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => window.VocabularyNotebook && document.querySelector('[data-wordbook-list]'));
    await page.locator('#boot-overlay').waitFor({ state: 'hidden', timeout: 20000 }).catch(() => {});
    assert.equal(await page.locator('.main-nav [data-view="vocab"]').count(), 1);
    assert.equal(await page.locator('.wordbook-empty').count(), 1);

    const result = await page.evaluate(() => window.VocabularyNotebook.openSelection({
      text: 'sustainable', mode: 'lookup', autoSave: true,
      context: { title: 'Vocabulary test', sentence: 'We need a sustainable approach.' }
    }).then(value => ({ term: value.term, chinese: value.chinese, synonyms: value.synonyms, collocations: value.collocations })));
    assert.equal(result.term.toLowerCase(), 'sustainable');
    assert.ok(result.chinese);
    assert.ok(result.synonyms.includes('durable') || result.synonyms.includes('viable'));
    assert.ok(result.collocations.length);
    const rich = await page.evaluate(() => window.VocabularyNotebook.openSelection({
      text: 'image', mode: 'lookup', context: { title: 'Rich dictionary test' }
    }).then(value => ({
      chineseRows: value.chineseByPos.length,
      senseCount: value.senses.length,
      examplesComplete: value.senses.every(sense => Boolean(sense.example)),
      collocationsComplete: value.collocationDetails.every(item => Boolean(item.meaning) && Boolean(item.example)),
      ukAudio: value.pronunciations.uk.audio,
      usAudio: value.pronunciations.us.audio
    })));
    assert.ok(rich.chineseRows >= 2);
    assert.ok(rich.senseCount >= 2);
    assert.equal(rich.examplesComplete, true);
    assert.equal(rich.collocationsComplete, true);
    assert.ok(rich.ukAudio);
    assert.ok(rich.usAudio);
    assert.ok(await page.locator('.lookup-chinese-row').count() >= 2);
    assert.equal(await page.locator('.lookup-sense-card').count(), rich.senseCount);
    assert.ok(await page.locator('[data-lookup-action="speak-uk"]').count() > 1);
    assert.ok(await page.locator('[data-lookup-action="speak-us"]').count() > 1);
    assert.equal(await page.locator('.lookup-reference-links a').count() >= 2, true);
    assert.equal(await page.locator('.wordbook-card').count(), 1);
    assert.match(await page.locator('.wordbook-card').innerText(), /sustainable/i);

    const dailyLater = page.locator('[data-daily-action="later"]');
    await page.waitForTimeout(1200);
    if (await dailyLater.count() && await dailyLater.first().isVisible()) await dailyLater.first().click({ force: true });
    await page.evaluate(() => document.getElementById('daily-suite-recommendation-modal')?.remove());
    await page.locator('[data-lookup-close]').click();
    await page.locator('[data-card-action="edit"]').click();
    await page.locator('[name="synonyms"]').fill('viable, durable, maintainable');
    await page.locator('[name="antonyms"]').fill('temporary, unsustainable');
    await page.locator('[name="note"]').fill('作文替换词');
    await page.locator('[data-wordbook-form] button[type="submit"]').click();
    const saved = await page.evaluate(() => window.VocabularyNotebook.readEntries()[0]);
    assert.ok(saved.synonyms.includes('maintainable'));
    assert.ok(saved.antonyms.includes('unsustainable'));
    assert.equal(saved.note, '作文替换词');

    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => window.VocabularyNotebook && document.querySelector('.wordbook-card'));
    assert.equal(await page.evaluate(() => window.VocabularyNotebook.readEntries().length), 1);
    await context.setOffline(true);
    const offline = await page.evaluate(() => window.VocabularyNotebook.lookup('sustainable', {}).then(value => ({ chinese: value.chinese, definitions: value.definitions.length })));
    assert.ok(offline.chinese);
    assert.ok(offline.definitions > 0);
    await context.setOffline(false);

    const popupPromise = page.waitForEvent('popup');
    await page.locator('[data-wordbook-action="export"]').click();
    const popup = await popupPromise;
    await popup.waitForLoadState('domcontentloaded');
    assert.match(await popup.title(), /单词本/);
    assert.equal(errors.length, 0, errors.join('\n'));
    console.log('Vocabulary notebook test passed.');
  } finally {
    await browser.close();
    server.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
