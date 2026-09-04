'use strict';

const fs = require('fs');
const vm = require('vm');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

class MemoryStorage {
  constructor() { this.map = new Map(); }
  getItem(key) { return this.map.has(key) ? this.map.get(key) : null; }
  setItem(key, value) { this.map.set(String(key), String(value)); }
  removeItem(key) { this.map.delete(String(key)); }
}

(async () => {
  const source = fs.readFileSync('js/utils/storage.js', 'utf8');
  const start = source.indexOf('class StorageManager');
  const end = source.indexOf('class PreferenceStore');
  assert(start >= 0 && end > start, 'StorageManager source not found');

  const localStorage = new MemoryStorage();
  const context = {
    console,
    localStorage,
    sessionStorage: new MemoryStorage(),
    window: { dispatchEvent() {} },
    CustomEvent: function CustomEvent() {}
  };
  vm.runInNewContext(source.slice(start, end) + '\nthis.StorageManager = StorageManager;', context);
  const manager = Object.create(context.StorageManager.prototype);
  manager.prefix = 'exam_system_';
  manager.version = '1.0.0';
  manager.practiceRecordsBackupKey = 'jimmy_reading_practice_records_backup_v1';
  manager.localStorageAvailable = true;
  manager.indexedDB = {};
  manager.indexedDBBlocked = false;
  manager.versionUpgradeInProgress = false;

  const canonical = [{ id: 'old-record', timestamp: 100, score: 8 }];
  const backup = [{ id: 'new-record', timestamp: 200, score: 12 }];
  localStorage.setItem(manager.practiceRecordsBackupKey, JSON.stringify({
    schemaVersion: 1,
    records: backup
  }));
  let storedEnvelope = JSON.stringify({ data: canonical, timestamp: 1, version: '0.9.0' });
  manager.getFromIndexedDB = async () => storedEnvelope;
  manager.setToIndexedDB = async (_key, value) => { storedEnvelope = value; };

  const recovered = await manager.recoverPracticeRecordsFromDurableBackup();
  assert(recovered.length === 2, 'upgrade recovery did not preserve both record sources');
  assert(recovered.some((item) => item.id === 'old-record'), 'canonical record was lost');
  assert(recovered.some((item) => item.id === 'new-record'), 'safety-copy record was not restored');

  manager.versionUpgradeInProgress = true;
  await manager.writeDurablePracticeRecordsBackup([]);
  assert(manager.readDurablePracticeRecordsBackup().length === 2,
    'an empty upgrade write replaced non-empty practice history');

  manager.versionUpgradeInProgress = false;
  await manager.writeDurablePracticeRecordsBackup([]);
  assert(manager.readDurablePracticeRecordsBackup().length === 0,
    'an explicit non-upgrade clear did not clear the safety copy');

  assert(!/await\s+this\.removeFromIndexedDB\(oldMyMelodyKey\)/.test(source),
    'legacy migration still deletes the canonical practice-record key');
  assert(source.includes("key === this.getKey('practice_records')"),
    'localStorage migration does not merge practice records');
  assert(source.includes('recoverPracticeRecordsFromDurableBackup'),
    'startup upgrade recovery hook is missing');

  const main = fs.readFileSync('js/main.js', 'utf8');
  assert(main.includes('storage.clear({ clearPracticeRecordsBackup: true })'),
    'explicit user clear must also clear the safety copy');

  const serviceWorker = fs.readFileSync('service-worker.js', 'utf8');
  assert(!/localStorage|indexedDB\.deleteDatabase/.test(serviceWorker),
    'service-worker update must not touch user storage');

  console.log('PASS: practice history survives cache/app upgrades and merges all local copies.');
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
