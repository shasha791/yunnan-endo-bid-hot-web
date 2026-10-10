(function initReportPeriods(root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.ReportPeriods = api;
}(typeof globalThis !== "undefined" ? globalThis : this, function createReportPeriods() {
  function parseDate(value) {
    const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return null;
    const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function dateKey(date) {
    return date.toISOString().slice(0, 10);
  }

  function addDays(date, days) {
    const result = new Date(date.getTime());
    result.setUTCDate(result.getUTCDate() + days);
    return result;
  }

  function mondayOf(date) {
    const weekday = date.getUTCDay() || 7;
    return addDays(date, 1 - weekday);
  }

  function groupPeriods(items = [], type = "daily", cutoffKey = "") {
    const groups = new Map();
    items.forEach((item) => {
      const date = parseDate(item.publishDate);
      if (!date) return;
      if (cutoffKey && dateKey(date) > cutoffKey) return;
      let key = dateKey(date);
      let endKey = key;
      if (type === "weekly") {
        const monday = mondayOf(date);
        key = dateKey(monday);
        endKey = dateKey(addDays(monday, 6));
      } else if (type === "monthly") {
        key = dateKey(date).slice(0, 7);
        endKey = key;
      }
      if (!groups.has(key)) groups.set(key, { key, endKey, items: [] });
      groups.get(key).items.push(item);
    });
    return [...groups.values()]
      .sort((a, b) => b.key.localeCompare(a.key))
      .map((group) => ({
        ...group,
        items: group.items.slice().sort((a, b) => String(b.publishDate).localeCompare(String(a.publishDate)))
      }));
  }

  return { groupPeriods, parseDate };
}));
