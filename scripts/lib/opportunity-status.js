(function initOpportunityStatus(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.OpportunityStatus = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function createOpportunityStatus() {
  function readText(value) {
    return String(value || "").trim();
  }

  function isOfficialSource(item = {}) {
    return readText(item.sourceType || "official") === "official";
  }

  function sourceNameText(item = {}) {
    return readText(item.sourceName || item.sourceSite || item.dataType);
  }

  function isKnownThirdParty(item = {}) {
    const sourceType = readText(item.sourceType);
    const sourceName = sourceNameText(item);
    return sourceType === "aggregator"
      || sourceType === "public_account"
      || /乙方宝|今日标讯|公众号/.test(sourceName);
  }

  function hasOfficialUrl(item = {}) {
    return Boolean(readText(item.originalOfficialUrl || item.officialUrl));
  }

  function hasAnyPublicUrl(item = {}) {
    return Boolean(readText(item.originalOfficialUrl || item.detailUrl || item.sourceUrl || item.link));
  }

  function isOfficialPartial(item = {}) {
    return isOfficialSource(item) && readText(item.officialAccessLevel) === "partial";
  }

  function isOfficialMainOpportunity(item = {}) {
    if (!isOfficialSource(item) || isOfficialPartial(item)) return false;
    if (hasOfficialUrl(item)) return true;
    return readText(item.officialAccessLevel) === "full" && hasAnyPublicUrl(item) && item.requiresManualCheck !== true;
  }

  function isSupplementalClue(item = {}) {
    if (isKnownThirdParty(item)) return true;
    if (isOfficialPartial(item)) return true;
    return item.requiresManualCheck === true && !isOfficialMainOpportunity(item);
  }

  function sourceDisplayLabel(item = {}) {
    if (isOfficialMainOpportunity(item)) return "官方公告";
    if (isOfficialPartial(item)) return "官方列表线索";
    if (readText(item.sourceType) === "public_account") return "补充线索";
    if (isKnownThirdParty(item)) return "补充线索";
    return "补充线索";
  }

  function actionButtonLabel(item = {}) {
    if (isOfficialMainOpportunity(item)) return "查看原文";
    if (isOfficialPartial(item)) return "查看官方列表";
    return "查看线索 / 需人工核验";
  }

  function shouldShowManualBadge(item = {}) {
    return isSupplementalClue(item);
  }

  function manualBadgeLabel(item = {}) {
    return isOfficialPartial(item) ? "详情需人工核验" : "需人工核验";
  }

  function linkUrl(item = {}) {
    return readText(item.originalOfficialUrl || item.detailUrl || item.sourceUrl || item.link || "#") || "#";
  }

  return {
    actionButtonLabel,
    hasOfficialUrl,
    isKnownThirdParty,
    isOfficialMainOpportunity,
    isOfficialPartial,
    isSupplementalClue,
    linkUrl,
    manualBadgeLabel,
    shouldShowManualBadge,
    sourceDisplayLabel
  };
});
