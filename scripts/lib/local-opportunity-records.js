(function initLocalOpportunityRecords(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.LocalOpportunityRecords = api;
}(typeof globalThis !== "undefined" ? globalThis : this, function createLocalOpportunityRecords() {
  const STORAGE_KEY = "yunnan-endo-bid-hot.opportunity-records.v1";

  function emptyState() {
    return { version: 1, records: {} };
  }

  function normalizeRecord(input = {}) {
    return {
      saved: input.saved === true,
      followStatus: String(input.followStatus || "未跟进").trim() || "未跟进",
      note: String(input.note || "").trim(),
      updatedAt: String(input.updatedAt || "").trim()
    };
  }

  function hasUserData(record) {
    return record.saved || record.followStatus !== "未跟进" || Boolean(record.note);
  }

  function normalizeState(input) {
    const state = emptyState();
    const source = input && typeof input.records === "object" ? input.records : {};
    Object.entries(source).forEach(([id, value]) => {
      const record = normalizeRecord(value);
      if (id && hasUserData(record)) state.records[id] = record;
    });
    return state;
  }

  function upsert(state, id, patch = {}, now = new Date().toISOString()) {
    const next = normalizeState(state);
    const current = normalizeRecord(next.records[id]);
    const record = normalizeRecord({ ...current, ...patch, updatedAt: now });
    if (hasUserData(record)) next.records[id] = record;
    else delete next.records[id];
    return next;
  }

  function apply(items = [], state = emptyState()) {
    const normalized = normalizeState(state);
    return items.map((item) => ({ ...item, ...(normalized.records[item.id] || {}) }));
  }

  function savedItems(items = [], state = emptyState()) {
    return apply(items, state).filter((item) => item.saved === true);
  }

  function followedItems(items = [], state = emptyState()) {
    return apply(items, state).filter((item) => Boolean(item.followStatus && item.followStatus !== "未跟进") || Boolean(item.note));
  }

  function load(storage) {
    try {
      const raw = storage?.getItem(STORAGE_KEY);
      if (!raw) return { state: emptyState(), persisted: true };
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== 1 || typeof parsed.records !== "object") {
        return { state: emptyState(), persisted: false };
      }
      return { state: normalizeState(parsed), persisted: true };
    } catch {
      return { state: emptyState(), persisted: false };
    }
  }

  function save(storage, state = emptyState()) {
    try {
      storage?.setItem(STORAGE_KEY, JSON.stringify(normalizeState(state)));
      return { persisted: true };
    } catch {
      return { persisted: false };
    }
  }

  return { STORAGE_KEY, apply, emptyState, followedItems, load, save, savedItems, upsert };
}));
