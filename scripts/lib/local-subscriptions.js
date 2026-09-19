(function initLocalSubscriptions(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.LocalSubscriptions = api;
}(typeof globalThis !== "undefined" ? globalThis : this, function createLocalSubscriptions() {
  const STORAGE_KEY = "yunnan-endo-bid-hot.subscriptions.v1";

  function normalizedList(values) {
    return [...new Set((Array.isArray(values) ? values : []).map((value) => String(value || "").trim()).filter(Boolean))].sort();
  }

  function normalizeRule(input = {}) {
    return {
      regions: normalizedList(input.regions),
      products: normalizedList(input.products),
      stages: normalizedList(input.stages),
      channels: normalizedList(input.channels),
      minimumScore: Number(input.minimumScore || 0),
      pushTime: String(input.pushTime || "").trim()
    };
  }

  function ruleId(rule) {
    const value = JSON.stringify(normalizeRule(rule));
    let hash = 5381;
    for (let index = 0; index < value.length; index += 1) hash = ((hash << 5) + hash) ^ value.charCodeAt(index);
    return `subscription-${(hash >>> 0).toString(16)}`;
  }

  function withId(input) {
    const normalized = normalizeRule(input);
    return { id: ruleId(normalized), ...normalized };
  }

  function addRule(rules = [], input = {}) {
    const rule = withId(input);
    const current = Array.isArray(rules) ? rules : [];
    const existing = current.find((item) => item.id === rule.id);
    if (existing) return { rules: current, rule: existing, added: false };
    return { rules: [...current, rule], rule, added: true };
  }

  function removeRule(rules = [], id = "") {
    const current = Array.isArray(rules) ? rules : [];
    const next = current.filter((item) => item.id !== id);
    return { rules: next, removed: next.length !== current.length };
  }

  function load(storage) {
    try {
      const parsed = JSON.parse(storage?.getItem(STORAGE_KEY) || "[]");
      if (!Array.isArray(parsed)) return { rules: [], persisted: false };
      return { rules: parsed.map(withId), persisted: true };
    } catch {
      return { rules: [], persisted: false };
    }
  }

  function save(storage, rules = []) {
    try {
      storage?.setItem(STORAGE_KEY, JSON.stringify(rules));
      return { persisted: true };
    } catch {
      return { persisted: false };
    }
  }

  return { STORAGE_KEY, addRule, load, normalizeRule, removeRule, ruleId, save };
}));
