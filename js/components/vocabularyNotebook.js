(function initVocabularyNotebook(global) {
  'use strict';
  const scriptNode = document.currentScript;
  const rootUrl = new URL('../../', scriptNode && scriptNode.src ? scriptNode.src : document.baseURI);
  const WORDS_KEY = 'jimmy_vocabulary_notebook_v1';
  const WORDS_BACKUP_KEY = 'jimmy_vocabulary_notebook_backup_v1';
  const CACHE_KEY = 'jimmy_dictionary_cache_v2';
  const CACHE_LIMIT = 120;
  const state = { entries: null, dictionaryPromise: null, activeLookup: null, lookupSequence: 0, mounted: false };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function uniq(values, limit = 12) {
    const seen = new Set();
    return (Array.isArray(values) ? values : []).map(value => String(value || '').trim())
      .filter(value => value && !seen.has(value.toLowerCase()) && seen.add(value.toLowerCase())).slice(0, limit);
  }
  function normalizeText(value) { return String(value || '').replace(/\s+/g, ' ').trim(); }
  function normalizeTerm(value) { return normalizeText(value).replace(/^[^A-Za-z]+|[^A-Za-z'-]+$/g, '').toLowerCase(); }
  function isSingleWord(value) { return /^[A-Za-z]+(?:['-][A-Za-z]+)*$/.test(normalizeText(value)); }
  function safeParse(raw, fallback) { try { return JSON.parse(raw); } catch (_) { return fallback; } }
  const COLLOCATION_STOPWORDS = new Set(('a an the and or but as at by for from in into of on onto to with without is am are was were be been being '
    + 'do does did done have has had will would shall should can could may might must this that these those there here then than').split(/\s+/));

  function isPlausibleCollocation(term, phrase) {
    const headword = normalizeTerm(term);
    const normalized = normalizeText(phrase).toLowerCase();
    const tokens = normalized.split(/\s+/).filter(Boolean);
    if (!headword || tokens.length < 2 || tokens.length > 4 || !tokens.includes(headword)) return false;
    if (tokens.some(token => !/^[a-z]+(?:['-][a-z]+)*$/.test(token))) return false;
    const neighbours = tokens.filter(token => token !== headword);
    return neighbours.length > 0 && neighbours.every(token => token.length > 2 && !COLLOCATION_STOPWORDS.has(token));
  }

  function containsExactPhrase(sentence, phrase) {
    const haystack = ' ' + normalizeText(sentence).toLowerCase().replace(/[^a-z0-9'-]+/g, ' ') + ' ';
    const needle = ' ' + normalizeText(phrase).toLowerCase().replace(/[^a-z0-9'-]+/g, ' ') + ' ';
    return haystack.includes(needle);
  }

  function readEntries() {
    if (state.entries) return state.entries.slice();
    let parsed = safeParse(global.localStorage && global.localStorage.getItem(WORDS_KEY), null);
    if (!Array.isArray(parsed)) parsed = safeParse(global.localStorage && global.localStorage.getItem(WORDS_BACKUP_KEY), []);
    state.entries = Array.isArray(parsed) ? parsed.filter(item => item && item.id && item.term) : [];
    return state.entries.slice();
  }
  function writeEntries(entries) {
    const safe = Array.isArray(entries) ? entries : [];
    const previous = global.localStorage && global.localStorage.getItem(WORDS_KEY);
    try {
      if (previous) global.localStorage.setItem(WORDS_BACKUP_KEY, previous);
      global.localStorage.setItem(WORDS_KEY, JSON.stringify(safe));
      global.localStorage.setItem(WORDS_BACKUP_KEY, JSON.stringify(safe));
    } catch (_) { throw new Error('本地存储空间不足，请先导出单词本后再重试'); }
    state.entries = safe;
    global.dispatchEvent(new CustomEvent('vocabularyNotebookUpdated', { detail: { count: safe.length } }));
    return safe.slice();
  }
  function readCache() {
    const value = safeParse(global.localStorage && global.localStorage.getItem(CACHE_KEY), {});
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  }
  function cacheLookup(key, value) {
    try {
      const cache = readCache(); cache[key] = { savedAt: Date.now(), value };
      Object.keys(cache).sort((a, b) => Number(cache[b]?.savedAt || 0) - Number(cache[a]?.savedAt || 0))
        .slice(CACHE_LIMIT).forEach(oldKey => delete cache[oldKey]);
      global.localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    } catch (_) {}
  }
  function cachedLookupEntry(key) { const item = readCache()[key]; return item && item.value ? item : null; }
  function cachedLookup(key) { return cachedLookupEntry(key)?.value || null; }
  function showMessage(message, type) { if (typeof global.showMessage === 'function') global.showMessage(message, type || 'info'); }

  function loadScript(url) {
    return new Promise((resolve, reject) => {
      const existing = Array.from(document.scripts).find(node => node.src === url);
      if (existing && global.__LOCAL_DICTIONARIES__?.ecdict) return resolve();
      const node = existing || document.createElement('script');
      const timer = global.setTimeout(() => reject(new Error('内置词典加载超时')), 20000);
      const finish = error => { global.clearTimeout(timer); node.onload = node.onerror = null; error ? reject(error) : resolve(); };
      node.onload = () => finish(); node.onerror = () => finish(new Error('内置词典加载失败'));
      if (!existing) { node.src = url; document.head.appendChild(node); }
    });
  }
  async function ensureDictionary() {
    if (global.__LOCAL_DICTIONARIES__?.ecdict) return global.__LOCAL_DICTIONARIES__.ecdict;
    if (!state.dictionaryPromise) {
      const url = new URL('assets/wordlists/ecdict_reading.bundle.js', rootUrl).href;
      state.dictionaryPromise = loadScript(url).then(() => global.__LOCAL_DICTIONARIES__?.ecdict || null)
        .catch(error => { state.dictionaryPromise = null; throw error; });
    }
    return state.dictionaryPromise;
  }
  function findLocalEntry(entries, term) {
    let low = 0, high = entries.length - 1;
    while (low <= high) {
      const mid = (low + high) >> 1;
      const word = String(entries[mid]?.w || '').toLowerCase();
      if (word === term) return entries[mid];
      if (word < term) low = mid + 1; else high = mid - 1;
    }
    return null;
  }
  function normalizePartOfSpeech(value) {
    const raw = String(value || '').trim().toLowerCase().replace(/\.$/, '');
    return ({ n: 'n.', v: 'v.', vi: 'vi.', vt: 'vt.', a: 'adj.', s: 'adj.', adj: 'adj.', adv: 'adv.',
      prep: 'prep.', pron: 'pron.', conj: 'conj.', num: 'num.', art: 'art.', aux: 'aux.' })[raw] || (raw ? raw + '.' : '');
  }
  function parsePosSegments(value) {
    const text = String(value || '').replace(/；/g, ';').trim();
    if (!text) return [];
    const marker = /(?:^|[;\n])\s*(n|v|vi|vt|a|s|adj|adv|prep|pron|conj|num|art|aux)\.?\s+/gi;
    const matches = [];
    let match;
    while ((match = marker.exec(text))) matches.push({ index: match.index, contentStart: marker.lastIndex, pos: normalizePartOfSpeech(match[1]) });
    if (!matches.length) return [{ partOfSpeech: '', text }];
    return matches.map((item, index) => ({
      partOfSpeech: item.pos,
      text: text.slice(item.contentStart, index + 1 < matches.length ? matches[index + 1].index : text.length).replace(/^[;\s]+|[;\s]+$/g, '')
    })).filter(item => item.text);
  }
  function splitDefinitions(value) { return uniq(String(value || '').split(/;\s*(?=[a-z]+\.?\s|[A-Z])/i), 8); }
  function localSenses(value, chineseByPos) {
    return splitDefinitions(value).map(item => {
      const found = item.match(/^([a-z]+)\.?\s+(.+)$/i);
      const partOfSpeech = normalizePartOfSpeech(found?.[1] || '');
      const definition = normalizeText(found?.[2] || item);
      const chinese = chineseByPos.find(row => row.partOfSpeech === partOfSpeech)?.text || '';
      return { partOfSpeech, definition, chinese, example: '', exampleSource: '' };
    }).filter(item => item.definition);
  }
  async function lookupLocal(term) {
    try {
      const dictionary = await ensureDictionary();
      const raw = dictionary && Array.isArray(dictionary.entries) ? findLocalEntry(dictionary.entries, term) : null;
      if (!raw) return null;
      const chineseByPos = parsePosSegments(raw.t);
      return { term: raw.w, phonetic: raw.p || '', chinese: raw.t || '', chineseByPos,
        definitions: splitDefinitions(raw.d), senses: localSenses(raw.d, chineseByPos),
        examples: [], collocations: [], collocationDetails: [], synonyms: [], antonyms: [], audio: '',
        pronunciations: { uk: { phonetic: raw.p || '', audio: '' }, us: { phonetic: '', audio: '' } },
        tags: Array.isArray(raw.tags) ? raw.tags : [],
        sources: [{ name: 'ECDICT', url: dictionary.source?.url || 'https://github.com/skywind3000/ECDICT', license: 'MIT' }], offline: true };
    } catch (_) { return null; }
  }
  async function fetchJson(url, timeout = 7000) {
    const controller = typeof AbortController === 'function' ? new AbortController() : null;
    const timer = global.setTimeout(() => controller && controller.abort(), timeout);
    try {
      const response = await fetch(url, { signal: controller?.signal, cache: 'no-store' });
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return await response.json();
    } finally { global.clearTimeout(timer); }
  }
  async function fetchDictionaryApi(term) {
    const payload = await fetchJson('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(term));
    const entries = Array.isArray(payload) ? payload : [], definitions = [], examples = [], synonyms = [], antonyms = [], senses = [];
    let phonetic = '', audio = '', ukAudio = '', usAudio = '', ukPhonetic = '', usPhonetic = '';
    entries.forEach(entry => {
      phonetic = phonetic || entry.phonetic || entry.phonetics?.find(item => item.text)?.text || '';
      (entry.phonetics || []).forEach(item => {
        const source = String(item.audio || '') + ' ' + String(item.sourceUrl || '');
        if (/(?:_uk_|-uk|\/uk\/|british|en-gb)/i.test(source)) {
          ukAudio = ukAudio || item.audio || ''; ukPhonetic = ukPhonetic || item.text || '';
        } else if (/(?:_us_|-us|\/us\/|american|en-us)/i.test(source)) {
          usAudio = usAudio || item.audio || ''; usPhonetic = usPhonetic || item.text || '';
        }
      });
      audio = audio || ukAudio || '';
      (entry.meanings || []).forEach(meaning => {
        synonyms.push(...(meaning.synonyms || [])); antonyms.push(...(meaning.antonyms || []));
        (meaning.definitions || []).slice(0, 3).forEach(item => {
          if (item.definition) {
            const partOfSpeech = normalizePartOfSpeech(meaning.partOfSpeech || '');
            definitions.push((partOfSpeech ? partOfSpeech + ' ' : '') + item.definition);
            senses.push({ partOfSpeech, definition: item.definition, chinese: '', example: item.example || '', exampleSource: item.example ? 'Free Dictionary API' : '' });
          }
          if (item.example) examples.push(item.example);
          synonyms.push(...(item.synonyms || [])); antonyms.push(...(item.antonyms || []));
        });
      });
    });
    const secureAudio = value => value && value.startsWith('//') ? 'https:' + value : value || '';
    return { phonetic: ukPhonetic || phonetic, audio: secureAudio(audio), senses,
      pronunciations: { uk: { phonetic: ukPhonetic || phonetic, audio: secureAudio(ukAudio || audio) }, us: { phonetic: usPhonetic, audio: secureAudio(usAudio) } },
      definitions: uniq(definitions, 8), examples: uniq(examples, 5), synonyms: uniq(synonyms), antonyms: uniq(antonyms),
      sources: [{ name: 'Free Dictionary API', url: 'https://dictionaryapi.dev/', license: 'GPL-3.0 API project' }] };
  }
  async function fetchDatamuse(term) {
    const endpoint = 'https://api.datamuse.com/words?max=8&';
    const [syn, ant, after, before] = await Promise.all([
      fetchJson(endpoint + 'rel_syn=' + encodeURIComponent(term)), fetchJson(endpoint + 'rel_ant=' + encodeURIComponent(term)),
      fetchJson(endpoint + 'rel_bga=' + encodeURIComponent(term)), fetchJson(endpoint + 'rel_bgb=' + encodeURIComponent(term))
    ]);
    const words = value => (Array.isArray(value) ? value.map(item => item.word) : []);
    const candidates = (Array.isArray(after) ? after.map(item => ({ phrase: term + ' ' + item.word, score: Number(item.score) || 0 })) : [])
      .concat(Array.isArray(before) ? before.map(item => ({ phrase: item.word + ' ' + term, score: Number(item.score) || 0 })) : [])
      .filter(item => isPlausibleCollocation(term, item.phrase)).sort((a, b) => b.score - a.score);
    const bestScore = candidates[0]?.score || 0;
    const collocations = uniq(candidates.filter(item => !bestScore || item.score >= Math.max(20, bestScore * .12)).map(item => item.phrase), 8);
    return { synonyms: uniq(words(syn)), antonyms: uniq(words(ant)), collocations,
      sources: [{ name: 'Datamuse / WordNet', url: 'https://www.datamuse.com/api/', license: 'Free public API' }] };
  }

  async function fetchTatoebaExamples(query, limit = 8) {
    const payload = await fetchJson('https://api.tatoeba.org/v1/sentences?lang=eng&q=' + encodeURIComponent(query)
      + '&word_count=5-22&sort=relevance&limit=' + Math.max(1, Math.min(10, limit)), 6000);
    return (Array.isArray(payload?.data) ? payload.data : []).filter(item => item && item.text && item.is_unapproved !== true)
      .map(item => ({ text: normalizeText(item.text), source: 'Tatoeba CC BY 2.0 FR', owner: item.owner || '', id: item.id })).slice(0, limit);
  }

  async function enrichCollocations(values) {
    const phrases = uniq(values || [], 6).filter(phrase => isPlausibleCollocation(normalizeTerm(phrase.split(/\s+/).find(Boolean) || ''), phrase));
    const rows = await Promise.all(phrases.map(async phrase => {
      const key = 'collocation::' + phrase.toLowerCase();
      const cached = cachedLookup(key);
      if (cached) return cached;
      const [meaningResult, exampleResult] = await Promise.allSettled([translate(phrase), fetchTatoebaExamples('"' + phrase + '"', 3)]);
      const matchingExample = exampleResult.status === 'fulfilled'
        ? exampleResult.value.find(item => containsExactPhrase(item.text, phrase))
        : null;
      const row = { phrase,
        meaning: meaningResult.status === 'fulfilled' ? meaningResult.value.translation || '' : '',
        example: matchingExample?.text || '',
        exampleSource: matchingExample ? 'Tatoeba CC BY 2.0 FR' : '' };
      cacheLookup(key, row);
      return /[\u3400-\u9fff]/.test(row.meaning) && row.example ? row : null;
    }));
    return rows.filter(Boolean);
  }

  async function translate(text) {
    const normalized = normalizeText(text);
    const key = 'translation::' + normalized.toLowerCase();
    const cached = cachedLookup(key);
    if (cached) return cached;
    if (!navigator.onLine) return { original: normalized, translation: '', offline: true };
    const limited = Array.from(normalized).slice(0, 420).join('');
    const payload = await fetchJson('https://api.mymemory.translated.net/get?q=' + encodeURIComponent(limited) + '&langpair=en|zh-CN');
    const result = { original: normalized, translation: normalizeText(payload?.responseData?.translatedText || ''),
      source: { name: 'MyMemory Translation Memory', url: 'https://mymemory.translated.net/doc/', license: 'Free translation memory' } };
    cacheLookup(key, result);
    return result;
  }
  function mergeSenses(left, right) {
    const seen = new Set();
    return [...(left || []), ...(right || [])].filter(item => {
      const key = normalizeText(item?.partOfSpeech) + '|' + normalizeText(item?.definition).toLowerCase();
      if (!item?.definition || seen.has(key)) return false;
      seen.add(key); return true;
    }).slice(0, 10);
  }
  function mergeLookup(base, supplement) {
    const left = base || {}, right = supplement || {};
    const pronunciations = {
      uk: { ...(left.pronunciations?.uk || {}), ...(right.pronunciations?.uk || {}) },
      us: { ...(left.pronunciations?.us || {}), ...(right.pronunciations?.us || {}) }
    };
    return { ...left, ...right, term: left.term || right.term || '', phonetic: right.phonetic || left.phonetic || '',
      chinese: left.chinese || right.chinese || '', audio: right.audio || left.audio || '',
      chineseByPos: (left.chineseByPos?.length ? left.chineseByPos : right.chineseByPos) || [],
      senses: mergeSenses(left.senses, right.senses), pronunciations,
      definitions: uniq((left.definitions || []).concat(right.definitions || []), 8), examples: uniq((left.examples || []).concat(right.examples || []), 6),
      collocations: uniq((left.collocations || []).concat(right.collocations || []), 10), synonyms: uniq((left.synonyms || []).concat(right.synonyms || []), 12),
      antonyms: uniq((left.antonyms || []).concat(right.antonyms || []), 12),
      collocationDetails: (right.collocationDetails?.length ? right.collocationDetails : left.collocationDetails) || [],
      sources: [...(left.sources || []), ...(right.sources || [])].filter((item, index, all) => item && all.findIndex(other => other.name === item.name) === index) };
  }
  async function lookup(text, context) {
    const term = normalizeTerm(text);
    if (!term || !isSingleWord(term)) throw new Error('请选择一个英文单词；整句内容请使用“翻译”');
    const key = 'word::' + term;
    const local = await lookupLocal(term);
    const cachedEntry = cachedLookupEntry(key);
    let result = mergeLookup(local, cachedEntry?.value || null);
    result.term = result.term || term;
    const cacheIsFresh = cachedEntry && Date.now() - Number(cachedEntry.savedAt || 0) < 7 * 24 * 60 * 60 * 1000
      && result.senses?.length && result.collocationDetails?.length;
    if (cacheIsFresh) {
      result.context = context || {};
      return result;
    }
    if (navigator.onLine) {
      const enrichments = await Promise.allSettled([fetchDictionaryApi(term), fetchDatamuse(term), fetchTatoebaExamples(term, 10)]);
      enrichments.slice(0, 2).forEach(item => { if (item.status === 'fulfilled') result = mergeLookup(result, item.value); });
      const openExamples = enrichments[2]?.status === 'fulfilled' ? enrichments[2].value : [];
      if (!result.chinese) { try { result.chinese = (await translate(term)).translation || ''; } catch (_) {} }
      const examplePool = uniq((result.examples || []).concat(openExamples.map(item => item.text)), 14);
      if (!result.senses?.length) {
        result.senses = (result.definitions || []).map(definition => ({ partOfSpeech: '', definition, chinese: '', example: '', exampleSource: '' }));
      }
      result.senses = result.senses.map((sense, index) => {
        const row = result.chineseByPos?.find(item => item.partOfSpeech === sense.partOfSpeech);
        const chosenExample = sense.example || examplePool[index % Math.max(1, examplePool.length)] || '';
        const tatoeba = openExamples.find(item => item.text === chosenExample);
        return { ...sense, chinese: sense.chinese || row?.text || '',
          example: chosenExample,
          exampleSource: sense.exampleSource || (tatoeba ? 'Tatoeba CC BY 2.0 FR' : '') };
      });
      result.examples = uniq(result.senses.map(item => item.example).concat(examplePool), 14);
      try { result.collocationDetails = await enrichCollocations(result.collocations); } catch (_) {}
      result.collocations = (result.collocationDetails || []).map(item => item.phrase);
      cacheLookup(key, result);
    }
    result.context = context || {};
    return result;
  }

  async function lookupImmediate(text, context) {
    const term = normalizeTerm(text);
    if (!term || !isSingleWord(term)) throw new Error('请选择一个英文单词；整句内容请使用“翻译”');
    const local = await lookupLocal(term);
    const result = mergeLookup(local, cachedLookup('word::' + term));
    result.term = result.term || term;
    result.context = context || {};
    return result;
  }
  function hashCode(value) { let hash = 0; for (let i = 0; i < value.length; i += 1) hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0; return hash; }
  function entryFromLookup(result, context) {
    const now = new Date().toISOString(), term = normalizeText(result.term || result.original), key = term.toLowerCase();
    return { id: 'vocab-' + key.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-' + Math.abs(hashCode(key)),
      term, type: isSingleWord(term) ? 'word' : 'phrase', phonetic: result.phonetic || '', audio: result.audio || '', chinese: result.chinese || result.translation || '',
      chineseByPos: result.chineseByPos || [], pronunciations: result.pronunciations || {}, senses: result.senses || [],
      definitions: uniq(result.definitions || [], 10), examples: uniq(result.examples || [], 8), collocations: uniq(result.collocations || [], 16),
      collocationDetails: result.collocationDetails || [],
      synonyms: uniq(result.synonyms || [], 20), antonyms: uniq(result.antonyms || [], 20), note: '', sourceTitle: context?.title || '',
      sourceText: context?.sentence || result.original || '', createdAt: now, updatedAt: now };
  }
  function saveLookup(result, context) {
    const incoming = entryFromLookup(result, context || result.context || {}), entries = readEntries();
    const index = entries.findIndex(item => item.term.toLowerCase() === incoming.term.toLowerCase());
    if (index >= 0) {
      incoming.id = entries[index].id; incoming.createdAt = entries[index].createdAt; incoming.note = entries[index].note || '';
      entries[index] = { ...entries[index], ...incoming, updatedAt: new Date().toISOString() };
    } else entries.unshift(incoming);
    writeEntries(entries); renderNotebook(); return incoming;
  }
  function speakAccent(text, accent, audioUrl) {
    const language = accent === 'us' ? 'en-US' : 'en-GB';
    if (audioUrl) { const audio = new Audio(audioUrl); audio.play().catch(() => speakAccent(text, accent, '')); return; }
    if (!global.speechSynthesis || typeof SpeechSynthesisUtterance !== 'function') { showMessage('当前浏览器没有可用的英语发音', 'warning'); return; }
    global.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text), voices = global.speechSynthesis.getVoices();
    const preferred = accent === 'us' ? /aria|jenny|guy|samantha|google us|american/i : /sonia|ryan|libby|daniel|serena|george|google uk|british/i;
    const matcher = accent === 'us' ? /^en[-_]US$/i : /^en[-_]GB$/i;
    utterance.voice = voices.find(voice => matcher.test(voice.lang) && preferred.test(voice.name)) || voices.find(voice => matcher.test(voice.lang)) || null;
    utterance.lang = language; utterance.rate = 0.92; utterance.pitch = 1; global.speechSynthesis.speak(utterance);
  }
  function speakBritish(text, audioUrl) { speakAccent(text, 'uk', audioUrl); }

  function ensureLookupPanel() {
    let panel = document.getElementById('vocabulary-lookup-panel');
    if (panel) return panel;
    panel = document.createElement('aside');
    panel.id = 'vocabulary-lookup-panel';
    panel.className = 'vocabulary-lookup-panel';
    panel.setAttribute('aria-live', 'polite');
    panel.innerHTML = '<header><div><span class="vocabulary-lookup-kicker">Jimmy Dictionary</span><h2 data-lookup-title>划词词典</h2></div><button type="button" data-lookup-close aria-label="关闭">×</button></header><div class="vocabulary-lookup-body" data-lookup-body></div>';
    document.body.appendChild(panel);
    panel.querySelector('[data-lookup-close]').addEventListener('click', () => panel.classList.remove('is-open'));
    panel.addEventListener('click', event => {
      const button = event.target.closest('[data-lookup-action]');
      if (!button || !state.activeLookup) return;
      if (button.dataset.lookupAction === 'speak' || button.dataset.lookupAction === 'speak-uk' || button.dataset.lookupAction === 'speak-us') {
        const accent = button.dataset.lookupAction === 'speak-us' ? 'us' : 'uk';
        const text = button.dataset.speakText || state.activeLookup.term || state.activeLookup.original;
        const isHeadword = normalizeText(text).toLowerCase() === normalizeText(state.activeLookup.term).toLowerCase();
        const audio = isHeadword ? state.activeLookup.pronunciations?.[accent]?.audio || (accent === 'uk' ? state.activeLookup.audio : '') : '';
        speakAccent(text, accent, audio);
      }
      if (button.dataset.lookupAction === 'save') {
        saveLookup(state.activeLookup, state.activeLookup.context);
        button.textContent = '✓ 已加入单词本';
        button.disabled = true;
        showMessage('已保存到单词本', 'success');
      }
    });
    return panel;
  }

  function chipList(title, values, className) {
    if (!values?.length) return '';
    return '<section class="lookup-section"><h3>' + escapeHtml(title) + '</h3><div class="lookup-chips ' + (className || '') + '">' + values.map(value => '<span>' + escapeHtml(value) + '</span>').join('') + '</div></section>';
  }

  function pronunciationButtons(result, text, compact) {
    const uk = result.pronunciations?.uk || { phonetic: result.phonetic || '', audio: result.audio || '' };
    const us = result.pronunciations?.us || {};
    const safeText = escapeHtml(text || result.term || '');
    return '<div class="lookup-pronunciations' + (compact ? ' lookup-pronunciations--compact' : '') + '">'
      + '<button type="button" data-lookup-action="speak-uk" data-speak-text="' + safeText + '"><b>UK</b><span>'
      + escapeHtml(uk.phonetic ? '/' + uk.phonetic.replace(/^\/|\/$/g, '') + '/' : '英式发音') + '</span> 🔊</button>'
      + '<button type="button" data-lookup-action="speak-us" data-speak-text="' + safeText + '"><b>US</b><span>'
      + escapeHtml(us.phonetic ? '/' + us.phonetic.replace(/^\/|\/$/g, '') + '/' : '美式发音') + '</span> 🔊</button></div>';
  }

  function referenceLinks(term, compact) {
    const encoded = encodeURIComponent(normalizeTerm(term));
    return '<div class="lookup-reference-links' + (compact ? ' lookup-reference-links--compact' : '') + '">'
      + '<a href="https://www.oxfordlearnersdictionaries.com/definition/english/' + encoded + '" target="_blank" rel="noopener noreferrer">Oxford 官方例句 ↗</a>'
      + '<a href="https://www.collinsdictionary.com/dictionary/english/' + encoded + '" target="_blank" rel="noopener noreferrer">Collins 官方例句 ↗</a></div>';
  }

  function renderLookup(result, mode) {
    const panel = ensureLookupPanel();
    const body = panel.querySelector('[data-lookup-body]');
    panel.querySelector('[data-lookup-title]').textContent = result.term || '句子翻译';
    const saved = readEntries().some(item => item.term.toLowerCase() === String(result.term || result.original).toLowerCase());
    if (mode === 'translate') {
      body.innerHTML = '<section class="lookup-translation"><div class="lookup-translation__source"><span>原文</span><p>' + escapeHtml(result.original) + '</p></div><div class="lookup-translation__result"><span>中文释义</span><p class="lookup-translation__zh">' + escapeHtml(result.translation || '当前离线且没有缓存译文，请联网后重试。') + '</p></div></section>'
        + pronunciationButtons(result, result.original, true)
        + '<div class="lookup-actions"><button type="button" data-lookup-action="save" ' + (saved ? 'disabled' : '') + '>' + (saved ? '✓ 已在单词本' : '+ 保存句子') + '</button></div>'
        + '<p class="lookup-attribution">翻译来源：MyMemory 开放翻译记忆库；已查询内容会保存在本机。</p>';
      return;
    }
    const senses = result.senses?.length ? result.senses : (result.definitions || []).map(value => ({ definition: value }));
    const senseHtml = senses.length ? senses.map((sense, index) => '<article class="lookup-sense-card">'
      + '<div class="lookup-sense-card__title"><span>' + escapeHtml(sense.partOfSpeech || String(index + 1)) + '</span><p>' + escapeHtml(sense.definition) + '</p></div>'
      + (sense.chinese ? '<p class="lookup-sense-card__zh">' + escapeHtml(sense.chinese) + '</p>' : '')
      + '<div class="lookup-sense-example"><span>例句' + (sense.exampleSource ? ' · ' + escapeHtml(sense.exampleSource) : '') + '</span><p>'
      + escapeHtml(sense.example || '联网后可获取开放语料例句。') + '</p>' + (sense.example ? pronunciationButtons(result, sense.example, true) : '') + '</div>'
      + referenceLinks(result.term, true) + '</article>').join('') : '<p>暂无英英释义</p>';
    const collocationHtml = result.collocationDetails?.length ? result.collocationDetails.map(item => '<article class="lookup-collocation-card"><header><strong>'
      + escapeHtml(item.phrase) + '</strong>' + pronunciationButtons(result, item.phrase, true) + '</header><p class="lookup-collocation-card__meaning">'
      + escapeHtml(item.meaning || '释义将在联网后补充') + '</p><div class="lookup-sense-example"><span>例句' + (item.exampleSource ? ' · ' + escapeHtml(item.exampleSource) : '')
      + '</span><p>' + escapeHtml(item.example || '联网后可获取开放语料例句。') + '</p>' + (item.example ? pronunciationButtons(result, item.example, true) : '') + '</div></article>').join('')
      : '';
    body.innerHTML = '<div class="lookup-word-head"><div><strong>' + escapeHtml(result.term) + '</strong>'
      + (result.tags?.includes('ielts') ? '<span class="lookup-word-tag">IELTS 词表</span>' : '') + '</div>' + pronunciationButtons(result, result.term, false) + '</div>'
      + '<section class="lookup-section lookup-section--primary"><h3>逐义项中英释义与例句</h3><div class="lookup-sense-list">' + senseHtml + '</div></section>'
      + (collocationHtml ? '<section class="lookup-section"><h3>常用词组与固定搭配</h3><div class="lookup-collocation-list">' + collocationHtml + '</div></section>' : '')
      + chipList('常见同义词替换', result.synonyms, 'lookup-chips--syn')
      + chipList('常见反义词替换', result.antonyms, 'lookup-chips--ant')
      + '<div class="lookup-actions"><button type="button" data-lookup-action="save" ' + (saved ? 'disabled' : '') + '>' + (saved ? '✓ 已在单词本' : '+ 加入单词本') + '</button></div>'
      + referenceLinks(result.term, false)
      + '<p class="lookup-attribution">中文释义：ECDICT；英英释义：Free Dictionary API；新例句：Tatoeba（CC BY 2.0 FR）；搭配候选：Datamuse/WordNet，并仅保留有自然例句和中文释义的结果。Oxford 与 Collins 仅提供官方查阅链接。</p>';
  }

  async function openSelection(options) {
    const text = normalizeText(options?.text);
    if (!text) return;
    const mode = options?.mode === 'translate' || !isSingleWord(text) ? 'translate' : 'lookup';
    const panel = ensureLookupPanel();
    panel.classList.add('is-open');
    panel.querySelector('[data-lookup-title]').textContent = mode === 'translate' ? '句子翻译' : normalizeTerm(text);
    const sequence = ++state.lookupSequence;
    panel.querySelector('[data-lookup-body]').innerHTML = mode === 'translate'
      ? '<section class="lookup-translation"><div class="lookup-translation__source"><span>原文</span><p>' + escapeHtml(text) + '</p></div><div class="lookup-translation__result"><span>中文释义</span><div class="lookup-loading"><i></i><p>正在翻译…</p></div></div></section>'
      : '<div class="lookup-loading"><span></span><p>正在读取内置词典…</p></div>';
    try {
      let result;
      if (mode === 'translate') {
        result = await translate(text);
        result.term = text;
        result.context = options?.context || {};
      } else {
        const context = options?.context || {};
        const immediate = await lookupImmediate(text, context);
        if (sequence !== state.lookupSequence) return immediate;
        state.activeLookup = immediate;
        renderLookup(immediate, mode);
        const body = panel.querySelector('[data-lookup-body]');
        if (body && navigator.onLine) {
          const notice = document.createElement('p');
          notice.className = 'lookup-background-status';
          notice.textContent = '本地释义已显示，正在后台补充例句、搭配与英美发音…';
          body.prepend(notice);
        }
        result = navigator.onLine ? await lookup(text, context) : immediate;
      }
      if (sequence !== state.lookupSequence) return result;
      state.activeLookup = result;
      renderLookup(result, mode);
      if (options?.autoSave) {
        saveLookup(result, result.context);
        const button = panel.querySelector('[data-lookup-action="save"]');
        if (button) { button.disabled = true; button.textContent = '✓ 已加入单词本'; }
      }
      return result;
    } catch (error) {
      if (sequence !== state.lookupSequence) return null;
      panel.querySelector('[data-lookup-body]').innerHTML = '<div class="lookup-error"><strong>暂时无法完成</strong><p>' + escapeHtml(error.message || error) + '</p><small>内置词典仍可离线使用；若是整句翻译，请检查网络。</small></div>';
      throw error;
    }
  }

  function notebookMarkup() {
    return '<div class="wordbook-page"><header class="wordbook-heading"><div><span class="wordbook-eyebrow">VOCABULARY NOTEBOOK</span><h2>📘 我的单词本</h2><p>从阅读原文中收藏词汇、搭配和同反义替换，数据仅保存在当前设备。</p></div><div class="wordbook-heading__stats"><strong data-wordbook-count>0</strong><span>已收藏</span></div></header>'
      + '<div class="wordbook-toolbar"><label class="wordbook-search"><span>⌕</span><input type="search" data-wordbook-search placeholder="搜索单词、中文释义或来源文章" aria-label="搜索单词本"></label><select data-wordbook-sort aria-label="单词本排序"><option value="newest">最近添加</option><option value="az">A–Z</option><option value="updated">最近编辑</option></select><button type="button" class="wordbook-btn wordbook-btn--secondary" data-wordbook-action="lookup">＋ 查词添加</button><button type="button" class="wordbook-btn" data-wordbook-action="export">导出 PDF</button></div>'
      + '<div class="wordbook-source-note"><span>开放词典</span><p>联网补充逐义项中英释义、Tatoeba 新例句、经过例句验证的常用搭配和英美双发音。Oxford 与 Collins 提供官方查阅入口。</p></div>'
      + '<div class="wordbook-grid" data-wordbook-list></div></div>'
      + '<div class="wordbook-editor" data-wordbook-editor hidden><div class="wordbook-editor__backdrop" data-wordbook-action="close-editor"></div><form class="wordbook-editor__dialog" data-wordbook-form><header><div><span>EDIT ENTRY</span><h3>编辑单词卡</h3></div><button type="button" data-wordbook-action="close-editor" aria-label="关闭">×</button></header><input type="hidden" name="id"><div class="wordbook-form-grid"><label>单词 / 词组<input name="term" required></label><label>音标<input name="phonetic" placeholder="例如 /əˈprəʊtʃ/"></label><label class="wordbook-form-wide">中文释义<textarea name="chinese" rows="2" required></textarea></label><label class="wordbook-form-wide">英英释义（每行一条）<textarea name="definitions" rows="4"></textarea></label><label class="wordbook-form-wide">例句（每行一条）<textarea name="examples" rows="3"></textarea></label><label>固定搭配（逗号分隔）<textarea name="collocations" rows="3"></textarea></label><label>同义词替换（逗号分隔）<textarea name="synonyms" rows="3"></textarea></label><label>反义词替换（逗号分隔）<textarea name="antonyms" rows="3"></textarea></label><label>个人笔记<textarea name="note" rows="3"></textarea></label></div><footer><button type="button" class="wordbook-btn wordbook-btn--secondary" data-wordbook-action="close-editor">取消</button><button type="submit" class="wordbook-btn">保存修改</button></footer></form></div>';
  }

  function renderNotebook() {
    const root = document.querySelector('[data-vocab-role="root"]');
    if (!root) return;
    if (!state.mounted) mountNotebook();
    const list = root.querySelector('[data-wordbook-list]');
    if (!list) return;
    const query = normalizeText(root.querySelector('[data-wordbook-search]')?.value).toLowerCase();
    const sort = root.querySelector('[data-wordbook-sort]')?.value || 'newest';
    let entries = readEntries().filter(item => !query || [item.term, item.chinese, item.sourceTitle, item.definitions?.join(' ')].join(' ').toLowerCase().includes(query));
    entries.sort((a, b) => sort === 'az' ? a.term.localeCompare(b.term) : Number(new Date(sort === 'updated' ? b.updatedAt : b.createdAt)) - Number(new Date(sort === 'updated' ? a.updatedAt : a.createdAt)));
    const count = root.querySelector('[data-wordbook-count]');
    if (count) count.textContent = String(readEntries().length);
    if (!entries.length) {
      list.innerHTML = '<div class="wordbook-empty"><span>📖</span><h3>' + (query ? '没有找到匹配词条' : '单词本还是空的') + '</h3><p>' + (query ? '换一个关键词试试。' : '完成练习后划选单词，点击“查词”并加入单词本。') + '</p></div>';
      return;
    }
    list.innerHTML = entries.map(item => {
      const chineseRows = item.chineseByPos?.length ? item.chineseByPos : parsePosSegments(item.chinese);
      return '<article class="wordbook-card" data-entry-id="' + escapeHtml(item.id) + '"><header><div><h3>' + escapeHtml(item.term) + '</h3><span>' + escapeHtml(item.phonetic ? '/' + item.phonetic.replace(/^\/|\/$/g, '') + '/' : '') + '</span></div><div class="wordbook-card__audio"><button type="button" data-card-action="speak-uk" aria-label="播放英式发音">UK 🔊</button><button type="button" data-card-action="speak-us" aria-label="播放美式发音">US 🔊</button></div></header><div class="wordbook-card__zh">'
      + (chineseRows.length ? chineseRows.map(row => '<p><b>' + escapeHtml(row.partOfSpeech || '释义') + '</b> ' + escapeHtml(row.text) + '</p>').join('') : '<p>暂无中文释义</p>') + '</div>'
      + (item.definitions?.[0] ? '<p class="wordbook-card__definition">' + escapeHtml(item.definitions[0]) + '</p>' : '')
      + (item.collocations?.length ? '<div class="wordbook-card__chips">' + item.collocations.slice(0, 3).map(value => '<span>' + escapeHtml(value) + '</span>').join('') + '</div>' : '')
      + (item.synonyms?.length ? '<p class="wordbook-card__replace"><b>同义替换</b> ' + escapeHtml(item.synonyms.slice(0, 5).join(' · ')) + '</p>' : '')
      + (item.antonyms?.length ? '<p class="wordbook-card__replace wordbook-card__replace--ant"><b>反义替换</b> ' + escapeHtml(item.antonyms.slice(0, 5).join(' · ')) + '</p>' : '')
      + '<footer><span>' + escapeHtml(item.sourceTitle || '手动添加') + '</span><div><button type="button" data-card-action="edit">编辑</button><button type="button" data-card-action="delete">删除</button></div></footer></article>';
    }).join('');
  }

  function openEditor(entry) {
    document.getElementById('vocabulary-lookup-panel')?.classList.remove('is-open');
    const editor = document.querySelector('[data-wordbook-editor]');
    const form = editor?.querySelector('[data-wordbook-form]');
    if (!editor || !form) return;
    const item = entry || { id: '', term: '', phonetic: '', chinese: '', definitions: [], examples: [], collocations: [], synonyms: [], antonyms: [], note: '' };
    ['id', 'term', 'phonetic', 'chinese', 'note'].forEach(name => { form.elements[name].value = item[name] || ''; });
    ['definitions', 'examples'].forEach(name => { form.elements[name].value = (item[name] || []).join('\n'); });
    ['collocations', 'synonyms', 'antonyms'].forEach(name => { form.elements[name].value = (item[name] || []).join(', '); });
    editor.hidden = false;
    form.elements.term.focus();
  }

  function closeEditor() {
    const editor = document.querySelector('[data-wordbook-editor]');
    if (editor) editor.hidden = true;
  }

  function saveEditor(form) {
    const data = new FormData(form), existing = readEntries();
    const id = normalizeText(data.get('id')) || 'vocab-manual-' + Date.now();
    const current = existing.find(item => item.id === id) || {};
    const lines = name => uniq(normalizeText(data.get(name)).split(name === 'definitions' || name === 'examples' ? /\n+/ : /[,，\n]+/), 30);
    const entry = { ...current, id, term: normalizeText(data.get('term')), phonetic: normalizeText(data.get('phonetic')),
      chinese: normalizeText(data.get('chinese')), definitions: lines('definitions'), examples: lines('examples'), collocations: lines('collocations'),
      synonyms: lines('synonyms'), antonyms: lines('antonyms'), note: normalizeText(data.get('note')),
      createdAt: current.createdAt || new Date().toISOString(), updatedAt: new Date().toISOString() };
    const index = existing.findIndex(item => item.id === id);
    if (index >= 0) existing[index] = entry; else existing.unshift(entry);
    writeEntries(existing); closeEditor(); renderNotebook(); showMessage('单词卡已保存', 'success');
  }

  function exportPdf() {
    const entries = readEntries();
    if (!entries.length) { showMessage('单词本为空，暂无内容可导出', 'warning'); return; }
    const popup = global.open('', 'jimmy-vocabulary-pdf');
    if (!popup) { showMessage('浏览器拦截了导出窗口，请允许弹窗后重试', 'warning'); return; }
    const cards = entries.map((item, index) => {
      const chineseRows = item.chineseByPos?.length ? item.chineseByPos : parsePosSegments(item.chinese);
      const senses = item.senses?.length ? item.senses : (item.definitions || []).map((definition, senseIndex) => ({ definition, example: item.examples?.[senseIndex] || '' }));
      const collocations = item.collocationDetails?.length ? item.collocationDetails : (item.collocations || []).map(phrase => ({ phrase }));
      return '<section><h2>' + (index + 1) + '. ' + escapeHtml(item.term) + ' <small>' + escapeHtml(item.phonetic || '') + '</small></h2><div class="zh">'
      + chineseRows.map(row => '<p><b>' + escapeHtml(row.partOfSpeech || '释义') + '</b> ' + escapeHtml(row.text) + '</p>').join('') + '</div>'
      + (senses.length ? '<h3>English definitions & examples</h3><ol>' + senses.map(value => '<li><b>' + escapeHtml(value.partOfSpeech || '') + '</b> ' + escapeHtml(value.definition) + (value.example ? '<blockquote>' + escapeHtml(value.example) + '</blockquote>' : '') + '</li>').join('') + '</ol>' : '')
      + (collocations.length ? '<h3>Collocations</h3>' + collocations.map(value => '<p><b>' + escapeHtml(value.phrase) + '</b>' + (value.meaning ? ' — ' + escapeHtml(value.meaning) : '') + (value.example ? '<blockquote>' + escapeHtml(value.example) + '</blockquote>' : '') + '</p>').join('') : '')
      + (item.synonyms?.length ? '<p><b>同义替换：</b>' + escapeHtml(item.synonyms.join(' · ')) + '</p>' : '')
      + (item.antonyms?.length ? '<p><b>反义替换：</b>' + escapeHtml(item.antonyms.join(' · ')) + '</p>' : '') + '</section>';
    }).join('');
    popup.document.open();
    popup.document.write('<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><title>Jimmy 的 IELTS 阅读单词本</title><style>@page{size:A4;margin:14mm}body{font:14px/1.6 system-ui,"Microsoft YaHei",sans-serif;color:#172033;max-width:800px;margin:auto}header{border-bottom:3px solid #2563eb;margin-bottom:20px}header h1{margin:0}header p{color:#64748b}section{break-inside:avoid;border-bottom:1px solid #dbe3ef;padding:12px 0}h2{margin:0 0 5px;color:#173b68}h2 small{font-weight:400;color:#64748b}.zh{font-size:16px;color:#b45309}h3{font-size:13px;margin:8px 0 2px}ul{margin:2px 0 4px;padding-left:22px}blockquote{margin:5px 0;padding:5px 10px;border-left:3px solid #93c5fd;background:#f8fafc}</style></head><body><header><h1>Jimmy 的 IELTS 阅读单词本</h1><p>共 ' + entries.length + ' 条 · 导出时间 ' + escapeHtml(new Date().toLocaleString('zh-CN')) + '</p></header>' + cards + '</body></html>');
    popup.document.close();
    global.setTimeout(() => { popup.focus(); popup.print(); }, 500);
  }

  function mountNotebook() {
    const root = document.querySelector('[data-vocab-role="root"]');
    if (!root || state.mounted) return;
    root.innerHTML = notebookMarkup();
    state.mounted = true;
    root.querySelector('[data-wordbook-search]').addEventListener('input', renderNotebook);
    root.querySelector('[data-wordbook-sort]').addEventListener('change', renderNotebook);
    root.addEventListener('click', event => {
      const action = event.target.closest('[data-wordbook-action]')?.dataset.wordbookAction;
      if (action === 'export') exportPdf();
      if (action === 'close-editor') closeEditor();
      if (action === 'lookup') {
        const term = global.prompt('输入要查询并添加的英文单词：');
        if (term) openSelection({ text: term, mode: 'lookup', context: { title: '手动添加' } }).catch(() => {});
      }
      const cardAction = event.target.closest('[data-card-action]')?.dataset.cardAction;
      const card = event.target.closest('[data-entry-id]');
      if (!cardAction || !card) return;
      const entry = readEntries().find(item => item.id === card.dataset.entryId);
      if (!entry) return;
      if (cardAction === 'speak-uk') speakAccent(entry.term, 'uk', entry.pronunciations?.uk?.audio || entry.audio);
      if (cardAction === 'speak-us') speakAccent(entry.term, 'us', entry.pronunciations?.us?.audio || '');
      if (cardAction === 'edit') openEditor(entry);
      if (cardAction === 'delete' && global.confirm('从单词本删除 “' + entry.term + '”？')) {
        writeEntries(readEntries().filter(item => item.id !== entry.id)); renderNotebook();
      }
    });
    root.querySelector('[data-wordbook-form]').addEventListener('submit', event => { event.preventDefault(); saveEditor(event.currentTarget); });
    renderNotebook();
  }

  function initialize() {
    const view = document.getElementById('vocab-view');
    if (view) view.removeAttribute('hidden');
    mountNotebook();
    document.addEventListener('click', event => {
      if (event.target.closest('.nav-btn[data-view="vocab"]')) global.setTimeout(renderNotebook, 0);
    });
    global.addEventListener('vocabularyNotebookUpdated', renderNotebook);
  }

  global.VocabularyNotebook = { lookup, translate, openSelection, saveLookup, readEntries, writeEntries,
    render: renderNotebook, edit: openEditor, exportPdf, speakBritish, speakAccent, get count() { return readEntries().length; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
})(typeof window !== 'undefined' ? window : globalThis);
