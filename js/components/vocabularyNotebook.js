(function initVocabularyNotebook(global) {
  'use strict';
  const scriptNode = document.currentScript;
  const rootUrl = new URL('../../', scriptNode && scriptNode.src ? scriptNode.src : document.baseURI);
  const WORDS_KEY = 'jimmy_vocabulary_notebook_v1';
  const WORDS_BACKUP_KEY = 'jimmy_vocabulary_notebook_backup_v1';
  const CACHE_KEY = 'jimmy_dictionary_cache_v3';
  const CACHE_LIMIT = 120;
  const state = { entries: null, dictionaryPromise: null, activeLookup: null, lookupSequence: 0, mounted: false, familyCache: new Map() };
  const INFLECTION_LABELS = { s: '复数', p: '过去式', d: '过去分词', i: '现在分词', '3': '第三人称单数', r: '比较级', t: '最高级' };
  const DERIVATIONAL_SUFFIXES = ['ability', 'ibility', 'ational', 'tional', 'fulness', 'ousness', 'iveness', 'ization', 'isation', 'ation', 'ition', 'sion', 'tion', 'ment', 'ness', 'ance', 'ence', 'ative', 'itive', 'ive', 'ity', 'able', 'ible', 'ally', 'ical', 'ous', 'ful', 'less', 'ize', 'ise', 'ify', 'ism', 'ist', 'ant', 'ent', 'ary', 'ory', 'al', 'ic', 'ly', 'er', 'or'];
  const DERIVATIONAL_PREFIXES = ['counter', 'inter', 'trans', 'under', 'over', 'post', 'pre', 'anti', 'non', 'mis', 'dis', 'un', 're', 'en', 'in', 'im', 'ir', 'il', 'de'];

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
    state.entries = Array.isArray(parsed) ? parsed.filter(item => item && item.id && item.term).map(item => {
      const collocationDetails = (item.collocationDetails || []).filter(row => row && row.meaning && row.example && isPlausibleCollocation(item.term, row.phrase));
      const allowed = new Set(collocationDetails.map(row => normalizeText(row.phrase).toLowerCase()));
      return { ...item, collocationDetails,
        collocations: (item.collocations || []).filter(phrase => allowed.has(normalizeText(phrase).toLowerCase())) };
    }) : [];
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
  function lowerBoundEntry(entries, term) {
    let low = 0, high = entries.length;
    while (low < high) {
      const mid = (low + high) >> 1;
      if (String(entries[mid]?.w || '').toLowerCase() < term) low = mid + 1; else high = mid;
    }
    return low;
  }
  function parseExchange(value) {
    return String(value || '').split('/').map(item => {
      const colon = item.indexOf(':');
      return colon > 0 ? { code: item.slice(0, colon), term: normalizeTerm(item.slice(colon + 1)) } : null;
    }).filter(item => item && item.term);
  }
  function formCategory(value) {
    const metadata = parseExchange(value).find(item => item.code === '1')?.term || '';
    const labels = uniq(Array.from(metadata).map(code => INFLECTION_LABELS[code]).filter(Boolean), 6);
    return labels.join(' / ');
  }
  function inferLemmaEntry(entries, term) {
    const candidates = new Set();
    const add = value => { const normalized = normalizeTerm(value); if (normalized && normalized !== term) candidates.add(normalized); };
    if (term.endsWith('ies')) add(term.slice(0, -3) + 'y');
    if (term.endsWith('ves')) { add(term.slice(0, -3) + 'f'); add(term.slice(0, -3) + 'fe'); }
    if (term.endsWith('ied')) add(term.slice(0, -3) + 'y');
    if (term.endsWith('ing')) { const stem = term.slice(0, -3); add(stem); add(stem + 'e'); if (stem.at(-1) === stem.at(-2)) add(stem.slice(0, -1)); }
    if (term.endsWith('ed')) { const stem = term.slice(0, -2); add(stem); add(term.slice(0, -1)); if (stem.at(-1) === stem.at(-2)) add(stem.slice(0, -1)); }
    if (term.endsWith('est')) { const stem = term.slice(0, -3); add(stem); add(stem + 'e'); if (stem.endsWith('i')) add(stem.slice(0, -1) + 'y'); }
    if (term.endsWith('er')) { const stem = term.slice(0, -2); add(stem); add(stem + 'e'); if (stem.endsWith('i')) add(stem.slice(0, -1) + 'y'); }
    if (term.endsWith('es')) { add(term.slice(0, -2)); add(term.slice(0, -1)); }
    if (term.endsWith('s')) add(term.slice(0, -1));
    for (const candidate of candidates) {
      const lemmaRaw = findLocalEntry(entries, candidate);
      const matched = lemmaRaw && parseExchange(lemmaRaw.x).find(item => item.term === term && INFLECTION_LABELS[item.code]);
      if (matched) return { raw: { w: term, p: '', x: '0:' + candidate + '/1:' + matched.code }, lemmaRaw };
    }
    return null;
  }
  function derivationStems(value) {
    const word = normalizeTerm(value);
    const stems = new Set(word ? [word] : []), bases = new Set(word ? [word] : []);
    DERIVATIONAL_PREFIXES.forEach(prefix => {
      if (word.startsWith(prefix) && word.length - prefix.length >= 3) bases.add(word.slice(prefix.length));
    });
    bases.forEach(base => {
      stems.add(base);
      if (base.length > 5 && base.endsWith('e')) stems.add(base.slice(0, -1));
      DERIVATIONAL_SUFFIXES.forEach(suffix => {
        if (base.length - suffix.length < 2 || !base.endsWith(suffix)) return;
        const stem = base.slice(0, -suffix.length);
        stems.add(stem);
        stems.add(stem + 'e');
        if (stem.endsWith('i')) stems.add(stem.slice(0, -1) + 'y');
        if (suffix === 'tion') { stems.add(stem + 'te'); if (stem.endsWith('c')) stems.add(stem + 't'); }
        if (suffix === 'sion' && stem.endsWith('i')) {
          stems.add(stem.slice(0, -1) + 'ide');
          stems.add(stem.slice(0, -1) + 'ise');
        }
        if ((suffix === 'ation' || suffix === 'ition') && stem.endsWith('ic')) stems.add(stem.slice(0, -2) + 'y');
        if ((suffix === 'ful' || suffix === 'less') && stem.endsWith('i')) stems.add(stem.slice(0, -1) + 'y');
      });
    });
    return stems;
  }
  function sharesWordFamily(left, right) {
    const a = derivationStems(left), b = derivationStems(right);
    return Array.from(a).some(stem => stem.length >= 3 && b.has(stem));
  }
  function formRows(entries, lemmaRaw) {
    const grouped = new Map();
    const add = (term, label) => {
      const normalized = normalizeTerm(term);
      if (!normalized) return;
      const raw = findLocalEntry(entries, normalized);
      const current = grouped.get(normalized) || { term: raw?.w || normalized, phonetic: raw?.p || '', labels: [] };
      if (label && !current.labels.includes(label)) current.labels.push(label);
      grouped.set(normalized, current);
    };
    add(lemmaRaw.w, '原形');
    parseExchange(lemmaRaw.x).forEach(item => { if (INFLECTION_LABELS[item.code]) add(item.term, INFLECTION_LABELS[item.code]); });
    return Array.from(grouped.values()).map(item => ({ ...item, label: item.labels.join(' / ') }));
  }
  function familyRows(entries, lemmaRaw) {
    const lemma = normalizeTerm(lemmaRaw.w);
    if (state.familyCache.has(lemma)) return state.familyCache.get(lemma);
    const rows = [], seen = new Set(), ranges = uniq([lemma.slice(0, 3), ...DERIVATIONAL_PREFIXES.map(prefix => prefix + lemma)], 30);
    ranges.forEach(prefix => {
      const start = lowerBoundEntry(entries, prefix);
      for (let index = start; index < entries.length; index += 1) {
        const raw = entries[index], word = normalizeTerm(raw?.w);
        if (!word.startsWith(prefix)) break;
        if (!word || word === lemma || seen.has(word) || parseExchange(raw.x).some(item => item.code === '0') || !sharesWordFamily(lemma, word)) continue;
        const pos = uniq(parsePosSegments(raw.t).map(item => item.partOfSpeech).filter(Boolean), 3).join(' / ');
        rows.push({ term: raw.w, phonetic: raw.p || '', partOfSpeech: pos });
        seen.add(word);
      }
    });
    rows.sort((a, b) => (Number(findLocalEntry(entries, a.term)?.b || 999999) - Number(findLocalEntry(entries, b.term)?.b || 999999)) || a.term.localeCompare(b.term));
    const result = rows;
    state.familyCache.set(lemma, result);
    return result;
  }
  function normalizePartOfSpeech(value) {
    const raw = String(value || '').trim().toLowerCase().replace(/\.$/, '');
    return ({ n: 'n.', v: 'v.', vi: 'vi.', vt: 'vt.', a: 'adj.', s: 'adj.', adj: 'adj.', adv: 'adv.',
      noun: 'n.', verb: 'v.', adjective: 'adj.', adverb: 'adv.', preposition: 'prep.', pronoun: 'pron.', conjunction: 'conj.',
      numeral: 'num.', article: 'art.', auxiliary: 'aux.', pl: 'n.', prep: 'prep.', pron: 'pron.', conj: 'conj.', num: 'num.', art: 'art.', aux: 'aux.' })[raw] || (raw ? raw + '.' : '');
  }
  function partOfSpeechGroup(value) {
    const normalized = normalizePartOfSpeech(value);
    if (normalized === 'v.' || normalized === 'vi.' || normalized === 'vt.') return 'verb';
    if (normalized === 'n.') return 'noun';
    if (normalized === 'adj.') return 'adjective';
    if (normalized === 'adv.') return 'adverb';
    return normalized;
  }
  function parsePosSegments(value) {
    const text = String(value || '').replace(/；/g, ';').trim();
    if (!text) return [];
    const marker = /(?:^|[;\n])\s*(n|v|vi|vt|a|s|adj|adv|pl|prep|pron|conj|num|art|aux)\.?\s+/gi;
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
      const entries = dictionary && Array.isArray(dictionary.entries) ? dictionary.entries : [];
      const exactRaw = findLocalEntry(entries, term), inferred = exactRaw ? null : inferLemmaEntry(entries, term);
      const raw = exactRaw || inferred?.raw;
      if (!raw) return null;
      const lemmaTerm = parseExchange(raw.x).find(item => item.code === '0')?.term || normalizeTerm(raw.w);
      const lemmaRaw = inferred?.lemmaRaw || findLocalEntry(entries, lemmaTerm) || { ...raw, w: lemmaTerm };
      const chineseByPos = parsePosSegments(lemmaRaw.t);
      return { term: lemmaRaw.w, lemma: lemmaRaw.w, queriedTerm: raw.w,
        queriedForm: normalizeTerm(raw.w) === normalizeTerm(lemmaRaw.w) ? '' : formCategory(raw.x),
        phonetic: lemmaRaw.p || '', chinese: lemmaRaw.t || '', chineseByPos,
        definitions: splitDefinitions(lemmaRaw.d), senses: localSenses(lemmaRaw.d, chineseByPos),
        forms: formRows(entries, lemmaRaw), wordFamily: familyRows(entries, lemmaRaw),
        examples: [], collocations: [], collocationDetails: [], synonyms: [], antonyms: [], audio: '',
        pronunciations: { uk: { phonetic: lemmaRaw.p || '', audio: '' }, us: { phonetic: '', audio: '' } },
        tags: Array.isArray(lemmaRaw.tags) ? lemmaRaw.tags : [],
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

  async function enrichCollocations(values, term) {
    const phrases = uniq(values || [], 6).filter(phrase => isPlausibleCollocation(term, phrase));
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
  async function attachExampleTranslations(result) {
    const texts = uniq([...(result.senses || []).map(item => item.example),
      ...(result.collocationDetails || []).map(item => item.example)].filter(Boolean), 20);
    if (!texts.length) return result;
    const translated = await Promise.allSettled(texts.map(text => translate(text)));
    const meanings = new Map();
    translated.forEach((item, index) => {
      if (item.status === 'fulfilled' && item.value?.translation) meanings.set(texts[index], item.value.translation);
    });
    return { ...result,
      senses: (result.senses || []).map(item => ({ ...item, exampleChinese: item.exampleChinese || meanings.get(item.example) || '' })),
      collocationDetails: (result.collocationDetails || []).map(item => ({ ...item, exampleChinese: item.exampleChinese || meanings.get(item.example) || '' })) };
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
      lemma: left.lemma || right.lemma || left.term || right.term || '', queriedTerm: left.queriedTerm || right.queriedTerm || '',
      queriedForm: left.queriedForm || right.queriedForm || '', forms: left.forms?.length ? left.forms : (right.forms || []),
      wordFamily: left.wordFamily?.length ? left.wordFamily : (right.wordFamily || []),
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
    const local = await lookupLocal(term);
    const headword = normalizeTerm(local?.term) || term;
    const key = 'word::' + headword;
    const queryKey = 'word::' + term;
    const cachedEntry = cachedLookupEntry(key) || cachedLookupEntry(queryKey);
    let result = mergeLookup(local, cachedEntry?.value || null);
    result.term = result.term || term;
    const cacheIsFresh = cachedEntry && Date.now() - Number(cachedEntry.savedAt || 0) < 7 * 24 * 60 * 60 * 1000
      && result.senses?.length && result.enrichedAt;
    if (cacheIsFresh) {
      result.context = context || {};
      return result;
    }
    if (navigator.onLine) {
      const canonicalTerm = normalizeTerm(result.term) || term;
      const enrichments = await Promise.allSettled([fetchDictionaryApi(canonicalTerm), fetchDatamuse(canonicalTerm), fetchTatoebaExamples(canonicalTerm, 10)]);
      enrichments.slice(0, 2).forEach(item => { if (item.status === 'fulfilled') result = mergeLookup(result, item.value); });
      const openExamples = enrichments[2]?.status === 'fulfilled' ? enrichments[2].value : [];
      if (!result.chinese) { try { result.chinese = (await translate(canonicalTerm)).translation || ''; } catch (_) {} }
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
      try { result.collocationDetails = await enrichCollocations(result.collocations, canonicalTerm); } catch (_) {}
      result.collocations = (result.collocationDetails || []).map(item => item.phrase);
      try { result = await attachExampleTranslations(result); } catch (_) {}
      result.enrichedAt = Date.now();
      cacheLookup(key, result);
      if (queryKey !== key) cacheLookup(queryKey, result);
    }
    result.context = context || {};
    return result;
  }

  async function lookupImmediate(text, context) {
    const term = normalizeTerm(text);
    if (!term || !isSingleWord(term)) throw new Error('请选择一个英文单词；整句内容请使用“翻译”');
    const local = await lookupLocal(term);
    const canonicalKey = 'word::' + (normalizeTerm(local?.term) || term);
    const result = mergeLookup(local, cachedLookup(canonicalKey) || cachedLookup('word::' + term));
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
      lemma: result.lemma || term, queriedTerm: result.queriedTerm || term, queriedForm: result.queriedForm || '',
      forms: result.forms || [], wordFamily: result.wordFamily || [],
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
      if (button.dataset.lookupAction === 'lookup-related') {
        openSelection({ text: button.dataset.term, mode: 'lookup', context: state.activeLookup.context || {} }).catch(() => {});
        return;
      }
      if (button.dataset.lookupAction === 'lookup-inline') {
        openSelection({ text: button.dataset.term, mode: 'lookup', context: state.activeLookup.context || {} }).catch(() => {});
        return;
      }
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

  function clickableEnglish(value) {
    return String(value || '').split(/([A-Za-z]+(?:['’\-][A-Za-z]+)*)/g).map(part => {
      if (!/^[A-Za-z]+(?:['’\-][A-Za-z]+)*$/.test(part)) return escapeHtml(part);
      return '<button type="button" class="lookup-inline-word" data-lookup-action="lookup-inline" data-term="' + escapeHtml(part) + '">' + escapeHtml(part) + '</button>';
    }).join('');
  }

  function chipList(title, values, className) {
    if (!values?.length) return '';
    return '<section class="lookup-section"><h3>' + escapeHtml(title) + '</h3><div class="lookup-chips ' + (className || '') + '">' + values.map(value => '<button type="button" data-lookup-action="lookup-related" data-term="' + escapeHtml(value) + '">' + escapeHtml(value) + '</button>').join('') + '</div></section>';
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

  function relationMarkup(title, rows, kind) {
    if (!rows?.length) return '';
    return '<section class="lookup-section lookup-relations lookup-relations--' + kind + '"><h3>' + escapeHtml(title) + '</h3><div class="lookup-relation-list">'
      + rows.map(row => {
        const phonetic = row.phonetic ? '/' + String(row.phonetic).replace(/^\/|\/$/g, '') + '/' : '';
        return '<article class="lookup-relation-row"><button type="button" class="lookup-relation-word" data-lookup-action="lookup-related" data-term="' + escapeHtml(row.term) + '"><strong>'
          + escapeHtml(row.term) + '</strong><span>' + escapeHtml(row.label || row.partOfSpeech || '') + '</span><small>' + escapeHtml(phonetic) + '</small></button>'
          + '<div class="lookup-relation-audio"><button type="button" data-lookup-action="speak-uk" data-speak-text="' + escapeHtml(row.term) + '" aria-label="播放 ' + escapeHtml(row.term) + ' 的英式发音">UK 🔊</button>'
          + '<button type="button" data-lookup-action="speak-us" data-speak-text="' + escapeHtml(row.term) + '" aria-label="播放 ' + escapeHtml(row.term) + ' 的美式发音">US 🔊</button></div></article>';
      }).join('') + '</div></section>';
  }

  function renderLookup(result, mode) {
    const panel = ensureLookupPanel();
    const body = panel.querySelector('[data-lookup-body]');
    panel.querySelector('[data-lookup-title]').textContent = result.term || '句子翻译';
    const saved = readEntries().some(item => item.term.toLowerCase() === String(result.term || result.original).toLowerCase());
    if (mode === 'translate') {
      body.innerHTML = '<section class="lookup-translation"><div class="lookup-translation__source"><span>原文 · 点击单词可继续查词</span><p>' + clickableEnglish(result.original) + '</p></div><div class="lookup-translation__result"><span>中文释义</span><p class="lookup-translation__zh">' + escapeHtml(result.translation || '当前离线且没有缓存译文，请联网后重试。') + '</p></div></section>'
        + pronunciationButtons(result, result.original, true)
        + '<div class="lookup-actions"><button type="button" data-lookup-action="save" ' + (saved ? 'disabled' : '') + '>' + (saved ? '✓ 已在单词本' : '+ 保存句子') + '</button></div>'
        + '<p class="lookup-attribution">翻译来源：MyMemory 开放翻译记忆库；已查询内容会保存在本机。</p>';
      return;
    }
    const senses = result.senses?.length ? result.senses : (result.definitions || []).map(value => ({ definition: value }));
    const englishSenseHtml = senses.length ? senses.map((sense, index) => '<article class="lookup-sense-card" data-pos-group="' + escapeHtml(partOfSpeechGroup(sense.partOfSpeech)) + '">'
      + '<div class="lookup-sense-card__title"><span>' + escapeHtml(sense.partOfSpeech || String(index + 1)) + '</span><p>' + clickableEnglish(sense.definition) + '</p></div>'
      + '<div class="lookup-sense-example"><span>例句' + (sense.exampleSource ? ' · ' + escapeHtml(sense.exampleSource) : '') + '</span><p>'
      + (sense.example ? clickableEnglish(sense.example) : '联网后可获取开放语料例句。') + '</p>'
      + (sense.exampleChinese ? '<p class="lookup-example-translation">' + escapeHtml(sense.exampleChinese) + '</p>' : '')
      + (sense.example ? pronunciationButtons(result, sense.example, true) : '') + '</div>'
      + referenceLinks(result.term, true) + '</article>').join('') : '<p>暂无英英释义</p>';
    const rawChineseRows = result.chineseByPos?.length ? result.chineseByPos : parsePosSegments(result.chinese);
    const chineseRows = Array.from(rawChineseRows.reduce((groups, row) => {
      const key = row.partOfSpeech || '释义', current = groups.get(key);
      if (current) current.text = uniq(current.text.split('；').concat(row.text), 20).join('；');
      else groups.set(key, { ...row });
      return groups;
    }, new Map()).values());
    const chineseSenseHtml = chineseRows.length ? chineseRows.map((row, index) => {
      let matches = senses.filter(sense => sense.example && partOfSpeechGroup(sense.partOfSpeech) === partOfSpeechGroup(row.partOfSpeech));
      if (!matches.length && chineseRows.length === 1) matches = senses.filter(sense => sense.example);
      const examples = uniq(matches.map(sense => sense.example), 4);
      return '<article class="lookup-sense-card lookup-sense-card--chinese" data-pos-group="' + escapeHtml(partOfSpeechGroup(row.partOfSpeech)) + '"><div class="lookup-sense-card__title"><span>'
        + escapeHtml(row.partOfSpeech || String(index + 1)) + '</span><p>' + escapeHtml(row.text) + '</p></div>'
        + (examples.length ? '<div class="lookup-chinese-examples">' + examples.map(example => {
          const sourceSense = matches.find(sense => sense.example === example);
          return '<div class="lookup-sense-example"><span>对应例句' + (sourceSense?.exampleSource ? ' · ' + escapeHtml(sourceSense.exampleSource) : '')
            + '</span><p>' + clickableEnglish(example) + '</p>'
            + (sourceSense?.exampleChinese ? '<p class="lookup-example-translation">' + escapeHtml(sourceSense.exampleChinese) + '</p>' : '')
            + pronunciationButtons(result, example, true) + '</div>';
        }).join('') + '</div>' : '<div class="lookup-sense-example"><span>对应例句</span><p>联网后可按词性获取开放语料例句。</p></div>')
        + '</article>';
    }).join('') : '<p>暂无中文释义</p>';
    const collocationHtml = result.collocationDetails?.length ? result.collocationDetails.map(item => '<article class="lookup-collocation-card"><header><button type="button" class="lookup-collocation-term" data-lookup-action="lookup-related" data-term="' + escapeHtml(item.phrase) + '"><strong>'
      + escapeHtml(item.phrase) + '</strong></button>' + pronunciationButtons(result, item.phrase, true) + '</header><p class="lookup-collocation-card__meaning">'
      + escapeHtml(item.meaning || '释义将在联网后补充') + '</p><div class="lookup-sense-example"><span>例句' + (item.exampleSource ? ' · ' + escapeHtml(item.exampleSource) : '')
      + '</span><p>' + (item.example ? clickableEnglish(item.example) : '联网后可获取开放语料例句。') + '</p>'
      + (item.exampleChinese ? '<p class="lookup-example-translation">' + escapeHtml(item.exampleChinese) + '</p>' : '')
      + (item.example ? pronunciationButtons(result, item.example, true) : '') + '</div></article>').join('')
      : '';
    body.innerHTML = '<div class="lookup-word-head"><div><strong>' + escapeHtml(result.term) + '</strong></div>' + pronunciationButtons(result, result.term, false) + '</div>'
      + (result.queriedTerm && normalizeTerm(result.queriedTerm) !== normalizeTerm(result.term) ? '<p class="lookup-lemma-notice">已识别 <b>' + escapeHtml(result.queriedTerm) + '</b>' + (result.queriedForm ? '（' + escapeHtml(result.queriedForm) + '）' : '') + '，以下显示原形 <b>' + escapeHtml(result.term) + '</b> 的释义。</p>' : '')
      + '<section class="lookup-section lookup-section--primary lookup-section--chinese"><h3>中文释义与对应例句</h3><div class="lookup-sense-list">' + chineseSenseHtml + '</div></section>'
      + '<section class="lookup-section lookup-section--english"><h3>英英释义与例句</h3><div class="lookup-sense-list">' + englishSenseHtml + '</div></section>'
      + relationMarkup('词格变化', result.forms, 'forms')
      + relationMarkup('同一词族 Word family', result.wordFamily, 'family')
      + (collocationHtml ? '<section class="lookup-section"><h3>常用词组与固定搭配</h3><div class="lookup-collocation-list">' + collocationHtml + '</div></section>' : '')
      + chipList('常见同义词替换', result.synonyms, 'lookup-chips--syn')
      + chipList('常见反义词替换', result.antonyms, 'lookup-chips--ant')
      + '<div class="lookup-actions"><button type="button" data-lookup-action="save" ' + (saved ? 'disabled' : '') + '>' + (saved ? '✓ 已在单词本' : '+ 加入单词本') + '</button></div>'
      + referenceLinks(result.term, false)
      + '<p class="lookup-attribution">点击释义或例句中的英文单词可继续查词。中文释义：ECDICT；英英释义：Free Dictionary API；新例句：Tatoeba（CC BY 2.0 FR）；搭配候选：Datamuse/WordNet。Oxford 与 Collins 仅提供官方查阅链接。</p>';
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
      + (item.forms?.length ? '<div class="wordbook-card__relations"><b>词格变化</b><div>' + item.forms.map(row => '<button type="button" data-card-action="lookup-related" data-term="' + escapeHtml(row.term) + '">' + escapeHtml(row.term) + '<small>' + escapeHtml(row.label || '') + '</small></button>').join('') + '</div></div>' : '')
      + (item.wordFamily?.length ? '<div class="wordbook-card__relations"><b>Word family</b><div>' + item.wordFamily.map(row => '<button type="button" data-card-action="lookup-related" data-term="' + escapeHtml(row.term) + '">' + escapeHtml(row.term) + '<small>' + escapeHtml(row.partOfSpeech || '') + '</small></button>').join('') + '</div></div>' : '')
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
      if (cardAction === 'lookup-related') openSelection({ text: event.target.closest('[data-term]')?.dataset.term, mode: 'lookup', context: { title: entry.sourceTitle || '单词本' } }).catch(() => {});
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
