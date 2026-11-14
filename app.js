const CRAWL_KEYWORDS = [
  "电子胃镜",
  "电子肠镜",
  "电子胃肠镜",
  "胃肠镜",
  "消化内镜",
  "内镜系统",
  "高清胃肠镜",
  "内窥镜",
  "冷光源",
  "图像处理器",
  "消化科",
  "内镜中心",
  "超声诊断仪",
  "彩色多普勒超声",
  "彩超",
  "超声设备",
  "超声系统",
  "便携式超声",
  "超声探头",
  "B超"
];

const statusHelpers = window.OpportunityStatus;
const subscriptionHelpers = window.LocalSubscriptions;
const SNAPSHOT_BUTTON_LABEL = "查看原文快照";

const baseOpportunities = [
  {
    id: "yx-001",
    dataType: "模拟数据",
    name: "玉溪市人民医院电子胃肠镜产品征询",
    region: "玉溪",
    hospital: "玉溪市人民医院",
    department: "消化内科",
    stage: "产品征询",
    products: ["电子胃镜", "电子肠镜", "高清胃肠镜系统"],
    budget: "预算待定",
    deadline: "2026-06-24 17:30",
    score: 94,
    level: "S",
    contact: "设备科 李老师 0877-266****",
    link: "https://example.com/yunnan/yx-001",
    summary: "医院正在征集电子胃肠镜产品方案，处于招标前参数影响窗口。涉及胃镜、肠镜和高清系统组合，适合提前切入临床需求和设备科配置讨论。",
    advice: [
      "今日联系设备科确认征询材料格式、品牌限制和预算口径。",
      "准备高清成像、放大观察、售后响应三类卖点材料。",
      "争取在正式招标前完成临床科室需求访谈。"
    ],
    followStatus: "待联系",
    note: "",
    timeline: [
      ["2026-06-12", "院内提出消化内镜设备更新需求。"],
      ["2026-06-18", "发布产品征询公告。"],
      ["2026-06-24", "征询资料提交截止。"]
    ]
  },
  {
    id: "km-002",
    dataType: "模拟数据",
    name: "昆明市延安医院高清胃肠镜系统招标公告",
    region: "昆明",
    hospital: "昆明市延安医院",
    department: "消化内镜中心",
    stage: "招标公告",
    products: ["高清胃肠镜系统", "图像处理主机", "冷光源"],
    budget: "380万元",
    deadline: "2026-06-27 18:00",
    score: 97,
    level: "S",
    contact: "采购办 王老师 0871-631****",
    link: "https://example.com/yunnan/km-002",
    summary: "正式招标已发布，预算金额高，采购范围覆盖主机、冷光源和镜体系统。项目截止时间较近，需要快速完成投标准备和关键参数核对。",
    advice: [
      "立即复核招标参数、评分办法和售后服务条款。",
      "同步商务报价、授权材料和云南装机案例。",
      "拜访消化内镜中心，确认临床关注的图像质量与培训要求。"
    ],
    followStatus: "今日联系",
    note: "已安排上午联系采购办。",
    timeline: [
      ["2026-06-05", "采购意向披露高清胃肠镜系统。"],
      ["2026-06-18", "发布招标公告。"],
      ["2026-06-27", "投标截止。"]
    ]
  },
  {
    id: "qj-003",
    dataType: "模拟数据",
    name: "曲靖市第一人民医院内镜维保询价",
    region: "曲靖",
    hospital: "曲靖市第一人民医院",
    department: "消化科",
    stage: "维保询价",
    products: ["电子胃镜", "电子肠镜", "内镜清洗设备"],
    budget: "58万元",
    deadline: "2026-06-23 12:00",
    score: 82,
    level: "A",
    contact: "医学装备部 0874-331****",
    link: "https://example.com/yunnan/qj-003",
    summary: "项目关注内镜设备维保和清洗设备维护，预算中等但截止较近。虽然不是新增设备采购，但可作为存量替换、维保合同和后续升级机会入口。",
    advice: [
      "确认现有设备品牌、数量、使用年限和故障频率。",
      "用响应时效、备件价格和工程师覆盖形成报价差异。",
      "询问下半年是否存在新增镜体或洗消设备计划。"
    ],
    followStatus: "已建联",
    note: "设备科反馈需补充备件报价清单。",
    timeline: [
      ["2026-06-15", "发布维保询价公告。"],
      ["2026-06-20", "供应商答疑。"],
      ["2026-06-23", "报价截止。"]
    ]
  },
  {
    id: "dl-004",
    dataType: "模拟数据",
    name: "大理州人民医院电子肠镜中标公告",
    region: "大理",
    hospital: "大理州人民医院",
    department: "消化内科",
    stage: "中标公告",
    products: ["电子肠镜"],
    budget: "126万元",
    deadline: "已公示",
    score: 76,
    level: "B",
    contact: "公告未披露",
    link: "https://example.com/yunnan/dl-004",
    summary: "电子肠镜项目已公示中标结果，短期不再是投标机会。该信息更适合用于竞品价格、配置、服务承诺追踪，并判断后续配套采购和维保机会。",
    advice: [
      "记录中标品牌、型号、金额和售后条款。",
      "跟进院方是否需要清洗设备、培训或维保配套。",
      "关注同区域医院是否会参考该配置发起采购。"
    ],
    followStatus: "暂不跟进",
    note: "纳入竞品追踪库。",
    timeline: [
      ["2026-05-28", "发布招标公告。"],
      ["2026-06-13", "开标。"],
      ["2026-06-18", "发布中标公告。"]
    ]
  },
  {
    id: "hh-005",
    dataType: "模拟数据",
    name: "红河州第一人民医院内镜中心设备采购意向",
    region: "红河",
    hospital: "红河州第一人民医院",
    department: "内镜中心",
    stage: "采购意向",
    products: ["电子胃镜", "电子肠镜", "内镜清洗设备"],
    budget: "260万元",
    deadline: "预计 2026-07",
    score: 89,
    level: "A",
    contact: "采购管理科 0873-372****",
    link: "https://example.com/yunnan/hh-005",
    summary: "采购意向显示内镜中心计划更新电子胃镜、电子肠镜和清洗设备，预计下月进入后续流程。当前适合做早期需求确认和配置建议。",
    advice: [
      "建立院方联系人清单，明确设备科和内镜中心决策链。",
      "提交分档配置建议，覆盖预算内和升级版本两套方案。",
      "重点沟通洗消流程、培训计划和售后驻点能力。"
    ],
    followStatus: "未跟进",
    note: "",
    timeline: [
      ["2026-06-17", "发布设备采购意向。"],
      ["2026-07-05", "预计启动市场调研。"],
      ["2026-07-20", "预计发布采购公告。"]
    ]
  },
  {
    id: "bs-006",
    dataType: "模拟数据",
    name: "保山市人民医院消化内镜中心市场调研",
    region: "保山",
    hospital: "保山市人民医院",
    department: "消化内镜中心",
    stage: "市场调研",
    products: ["图像处理主机", "电子胃镜", "冷光源"],
    budget: "预算待定",
    deadline: "2026-06-29 17:00",
    score: 86,
    level: "A",
    contact: "设备科 周老师 0875-214****",
    link: "https://example.com/yunnan/bs-006",
    summary: "医院调研图像处理主机、电子胃镜和冷光源组合方案，尚未进入正式采购。该阶段有利于影响技术参数和服务要求。",
    advice: [
      "提交主机兼容性、镜体配置和升级路径说明。",
      "预约内镜中心演示图像增强和窄带成像能力。",
      "收集现有设备品牌与接口兼容信息。"
    ],
    followStatus: "待联系",
    note: "",
    timeline: [
      ["2026-06-16", "发布市场调研公告。"],
      ["2026-06-22", "供应商报名截止。"],
      ["2026-06-29", "调研材料提交截止。"]
    ]
  },
  {
    id: "cx-007",
    dataType: "模拟数据",
    name: "楚雄州中医医院胃肠镜洗消设备采购公告",
    region: "楚雄",
    hospital: "楚雄州中医医院",
    department: "脾胃病科",
    stage: "招标公告",
    products: ["内镜清洗设备", "冷光源"],
    budget: "92万元",
    deadline: "2026-06-26 16:00",
    score: 80,
    level: "A",
    contact: "招采办 0878-312****",
    link: "https://example.com/yunnan/cx-007",
    summary: "项目采购内镜清洗设备并涉及冷光源配套，预算适中。与胃肠镜主设备采购关联度高，可作为洗消流程与后续内镜升级的入口。",
    advice: [
      "核对洗消室面积、流程布局和设备安装条件。",
      "准备院感合规、耗材成本和培训计划材料。",
      "评估是否可联动推荐后续镜体升级方案。"
    ],
    followStatus: "未跟进",
    note: "",
    timeline: [
      ["2026-06-18", "发布采购公告。"],
      ["2026-06-21", "现场踏勘。"],
      ["2026-06-26", "响应文件截止。"]
    ]
  },
  {
    id: "real-008",
    dataType: "历史公开公告样例",
    name: "新平县中医医院电子肠镜采购项目",
    noticeType: "单一来源采购公示",
    sourceSite: "玉溪市人民政府网站",
    publishDate: "2026-06-02",
    region: "云南省玉溪市新平县",
    hospital: "新平彝族傣族自治县总医院 / 新平县中医医院",
    department: "胃镜室 / 消化内镜相关科室",
    stage: "招标中 / 单一来源采购公示",
    products: ["电子治疗肠镜"],
    budget: "358000元",
    signupDeadline: "未公开",
    bidDeadline: "未公开",
    deadline: "未公开",
    score: 88,
    level: "S",
    contact: "未公开",
    phone: "未公开",
    relatedToEndoscopy: "是",
    link: "https://m.yuxi.gov.cn/yxs/ztb/20260602/1665247.html",
    summary: "该项目为新平县中医医院电子肠镜采购项目，采购内容为电子治疗肠镜，预算金额358000元。公告显示该设备用于满足西院区胃镜室临床诊疗需求，并涉及与现有 Olympus CV-290 主机兼容配套使用。该项目属于消化内镜设备相关采购，适合用于验证区域销售对玉溪地区电子胃肠镜类商机的识别能力。",
    advice: [
      "关注该项目的单一来源采购原因及后续成交结果。",
      "核查医院现有主机品牌和兼容设备需求。",
      "关注同类医院是否存在电子肠镜补充采购需求。",
      "如销售产品具备兼容方案，可整理产品参数、注册证和售后方案，用于后续类似项目跟进。",
      "将该项目沉淀为“设备兼容性采购”样例。"
    ],
    followStatus: "未跟进",
    note: "历史公开公告样例，仅用于产品验证，具体信息以原公告为准。",
    timeline: [
      ["2026-06-02", "玉溪市人民政府网站发布单一来源采购公示。"],
      ["未公开", "报名截止时间未公开。"],
      ["未公开", "投标截止时间未公开。"]
    ]
  },
  {
    id: "real-009",
    dataType: "历史公开公告样例",
    name: "云南大学附属医院医疗设备更新提升项目（第二批）采购需求调查公告",
    noticeType: "采购需求调查公告",
    sourceSite: "云南大学附属医院官网",
    publishDate: "2026-01-13",
    region: "云南省昆明市",
    hospital: "云南大学附属医院",
    department: "消化内科 / 内镜中心",
    stage: "招标前 / 采购需求调查",
    products: ["高清电子胃肠镜系统", "电子胃镜", "电子肠镜", "图像处理器", "冷光源", "内窥镜送水泵", "二氧化碳送气装置", "氩气高频电刀"],
    budget: "未公开",
    signupDeadline: "未公开",
    bidDeadline: "未公开",
    deadline: "未公开",
    score: 92,
    level: "S",
    contact: "未公开",
    phone: "未公开",
    relatedToEndoscopy: "是",
    link: "https://www.ynshhyy.com/YuanWuGongKai/ZhaoBiaoGongGao/detail/53154a8b9b915faa019bb546b3f2003a.html",
    summary: "该公告为云南大学附属医院医疗设备更新提升项目采购需求调查，内容涉及高清电子胃肠镜系统及相关配套设备，包括电子胃镜、电子肠镜、图像处理器、冷光源、送水泵、二氧化碳送气装置等。该类信息处于正式招标前阶段，适合销售提前了解医院设备更新方向、配置需求和潜在采购计划。",
    advice: [
      "将该公告标记为招标前重点机会。",
      "整理高清电子胃肠镜系统配置方案。",
      "准备电子胃镜、电子肠镜、图像处理器、冷光源等设备参数资料。",
      "关注后续正式招标公告是否发布。",
      "对比竞品配置，提前准备技术优势和售后服务方案。"
    ],
    followStatus: "未跟进",
    note: "历史公开公告样例，仅用于产品验证，具体信息以原公告为准。",
    timeline: [
      ["2026-01-13", "云南大学附属医院官网发布采购需求调查公告。"],
      ["未公开", "报名截止时间未公开。"],
      ["未公开", "投标截止时间未公开。"]
    ]
  },
  {
    id: "real-010",
    dataType: "历史公开公告样例",
    name: "云南省肿瘤医院电子胃肠镜维保项目市场调研公告",
    noticeType: "市场调研公告",
    sourceSite: "云南省肿瘤医院官网",
    publishDate: "2026-01-29",
    region: "云南省昆明市",
    hospital: "云南省肿瘤医院",
    department: "消化内镜相关科室",
    stage: "招标前 / 市场调研 / 维保机会",
    products: ["电子胃肠镜", "电子图像处理器", "冷光源", "电子上消化道内窥镜", "电子大肠内窥镜", "电子下消化道内窥镜"],
    budget: "未公开",
    signupDeadline: "未公开",
    bidDeadline: "未公开",
    deadline: "未公开",
    score: 84,
    level: "A",
    contact: "未公开",
    phone: "未公开",
    relatedToEndoscopy: "是",
    link: "https://www.ynszlyy.com/Subject/XXGK_ZBCG/Article/C860822D-FAC3-9F0D-E76C-D68390438EEA.html",
    summary: "该公告为云南省肿瘤医院电子胃肠镜维保项目市场调研，涉及电子图像处理器、冷光源、电子上消化道内窥镜、电子大肠内窥镜、电子下消化道内窥镜等设备。该项目属于存量设备维保机会，能够帮助销售识别医院现有设备品牌、使用状态及后续维保或更新采购需求。",
    advice: [
      "将该项目归类为维保类商机。",
      "关注医院现有电子胃肠镜设备品牌和型号。",
      "判断是否存在维保服务、配件供应或设备更新机会。",
      "准备维保服务方案、响应时效、工程师资质和备件能力说明。",
      "后续持续跟踪是否转为正式采购或维保招标。"
    ],
    followStatus: "未跟进",
    note: "历史公开公告样例，仅用于产品验证，具体信息以原公告为准。",
    timeline: [
      ["2026-01-29", "云南省肿瘤医院官网发布市场调研公告。"],
      ["未公开", "报名截止时间未公开。"],
      ["未公开", "投标截止时间未公开。"]
    ]
  }
];

function inferProductsFromTitle(title) {
  const matched = CRAWL_KEYWORDS.filter((keyword) => title.includes(keyword));
  return matched.length > 0 ? matched : ["待识别"];
}

function normalizeCrawledNotice(notice, index) {
  const title = notice.title || "待识别公告";
  return {
    id: `crawl-${index + 1}`,
    dataType: "自动采集数据",
    name: title,
    noticeType: notice.rawStage || "待识别",
    sourceSite: notice.sourceName || "未公开",
    sourceType: notice.sourceType || "official",
    officialAccessLevel: notice.officialAccessLevel || "",
    publishDate: notice.publishDate || "未公开",
    region: "待识别",
    hospital: "待识别",
    department: "待识别",
    stage: notice.rawStage || "待识别",
    products: inferProductsFromTitle(title),
    budget: "未公开",
    signupDeadline: "未公开",
    bidDeadline: "未公开",
    deadline: "未公开",
    score: "待评估",
    level: "待评估",
    contact: "未公开",
    phone: "未公开",
    relatedToEndoscopy: "待识别",
    link: notice.sourceUrl || "#",
    originalOfficialUrl: notice.originalOfficialUrl || "",
    detailUrl: notice.detailUrl || "",
    sourceUrl: notice.sourceUrl || "",
    rawData: notice.rawData || {},
    requiresManualCheck: Boolean(notice.requiresManualCheck),
    manualCheckReason: notice.manualCheckReason || "",
    summary: "自动采集数据仅完成标题、发布时间、来源和链接抓取，尚未做正文解析或AI结构化提取。",
    advice: [
      "先人工打开原文链接确认公告是否与电子胃肠镜相关。",
      "补充采购单位、地区、产品、预算、截止时间等关键字段。",
      "后续可接入AI结构化提取，自动生成摘要、优先级建议和销售动作建议。"
    ],
    followStatus: "未跟进",
    note: "自动采集数据，字段待人工校验。",
    timeline: [
      [notice.publishDate || "未公开", "公开列表页采集到公告标题和链接。"],
      [notice.crawlTime || "未公开", "本地脚本完成关键词初筛。"]
    ]
  };
}

function normalizeProcessedOpportunity(item, index) {
  const title = item.title || "待识别公告";
  const productTags = Array.isArray(item.productTags) ? item.productTags : [];
  const products = Array.isArray(item.products) && item.products.length > 0
    ? item.products
    : productTags.map((tag) => tag === "endo" ? "内镜" : "超声");
  return {
    id: item.id || `processed-${index + 1}`,
    dataType: "自动采集数据",
    name: title,
    projectName: item.projectName || title,
    noticeType: item.noticeType || item.stage || "待识别",
    noticeStage: item.noticeStage || "other",
    sourceSite: item.sourceName || "未公开",
    sourceType: item.sourceType || "official",
    officialAccessLevel: item.officialAccessLevel || "",
    sourcePriority: item.sourcePriority || 0,
    publishDate: item.publishDate || "未公开",
    region: item.city && item.city !== "待确认" ? item.city : item.region || "待识别",
    hospital: item.buyerName || "未公开",
    purchaser: item.purchaser || item.buyerName || "未公开",
    department: item.department || "待识别",
    stage: item.stage || "待识别",
    products: products.length > 0 ? products : ["待识别"],
    productCategory: item.productCategory || (productTags.includes("endo") && productTags.includes("ultrasound") ? "both" : productTags.includes("endo") ? "endoscopy" : productTags.includes("ultrasound") ? "ultrasound" : "other"),
    productTags,
    matchedKeywords: Array.isArray(item.matchedKeywords) ? item.matchedKeywords : [],
    budget: item.budgetAmount || item.budget || "未提取到",
    budgetAmount: item.budgetAmount || item.budget || "未提取到",
    bidOpeningTime: item.bidOpeningTime || "未提取到",
    projectLocation: item.projectLocation || item.city || item.region || "未提取到",
    signupDeadline: "未公开",
    bidDeadline: "未公开",
    deadline: item.deadline || "未提取到",
    sourceTier: item.sourceTier || "",
    opportunityScore: item.opportunityScore ?? item.score ?? "",
    followPriority: item.followPriority || "",
    scoreReason: Array.isArray(item.scoreReason) ? item.scoreReason : [],
    score: item.opportunityScore ?? item.score ?? "待评估",
    level: item.level || (item.followPriority === "high" ? "S" : item.followPriority === "medium" ? "A" : item.followPriority === "low" ? "B" : "待评估"),
    contact: item.contactInfo || item.contactPerson || "未提取到",
    phone: item.contactPhone || item.contactInfo || "未提取到",
    contactInfo: item.contactInfo || item.contactPerson || item.contactPhone || "未提取到",
    relatedToEndoscopy: productTags.length ? productTags.map((tag) => tag === "endo" ? "内镜" : "超声").join(" / ") : "待识别",
    link: item.originalOfficialUrl || item.detailUrl || item.sourceUrl || "#",
    originalOfficialUrl: item.originalOfficialUrl || "",
    detailUrl: item.detailUrl || "",
    sourceUrl: item.sourceUrl || "",
    rawData: item.rawData || {},
    requiresManualCheck: Boolean(item.requiresManualCheck),
    manualCheckReason: item.manualCheckReason || "",
    fullText: item.fullText || "",
    summary: item.summary || item.aiSummary || "系统尚未生成规则摘要。",
    advice: [item.salesSuggestion || "建议人工查看原文后判断是否属于有效商机。"],
    followStatus: item.followStatus || "未跟进",
    note: "自动采集数据，已完成规则化处理，仍需人工校验。",
    timeline: [
      [item.publishDate || "未公开", "公开列表页采集到公告标题和链接。"],
      [item.crawlTime || "未公开", "本地脚本完成去重、阶段识别、产品识别和优先级判断。"]
    ]
  };
}

const crawledOpportunities = Array.isArray(window.PROCESSED_OPPORTUNITIES)
  ? window.PROCESSED_OPPORTUNITIES.map(normalizeProcessedOpportunity)
  : Array.isArray(window.CRAWLED_NOTICES)
  ? window.CRAWLED_NOTICES.map(normalizeCrawledNotice)
  : [];

const opportunities = baseOpportunities.concat(crawledOpportunities);
const dailyReport = window.DAILY_REPORT && window.DAILY_REPORT.summary ? window.DAILY_REPORT : null;
const opportunityRecordHelpers = window.LocalOpportunityRecords;
const reportPeriodHelpers = window.ReportPeriods;
const loadedOpportunityRecords = opportunityRecordHelpers.load(localStorage);
let opportunityRecordState = loadedOpportunityRecords.state;
let opportunityRecordStorageAvailable = loadedOpportunityRecords.persisted;
opportunityRecordHelpers.apply(opportunities, opportunityRecordState).forEach((item, index) => Object.assign(opportunities[index], item));

const optionSets = {
  regions: ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "普洱市", "临沧市", "楚雄州", "红河州", "文山州", "西双版纳州", "大理州", "德宏州", "怒江州", "迪庆州", "玉溪", "昆明", "曲靖", "大理", "红河", "保山", "楚雄"],
  products: ["内镜", "超声", "电子胃镜", "电子肠镜", "高清胃肠镜系统", "图像处理主机", "冷光源", "内镜清洗设备", "彩色多普勒超声", "超声诊断仪", "超声探头", "B超"],
  stages: ["采购意向", "市场调研", "产品征询", "招标公告", "中标公告", "维保询价", "招标前", "招标中", "招标后", "维保机会", "待识别"],
  levels: ["S", "A", "B"],
  followStatuses: ["未跟进", "待联系", "今日联系", "已建联", "方案推进中", "暂不跟进"],
  dataTypes: ["模拟数据", "真实样例待补充", "历史公开公告样例", "自动采集数据", "云南大学附属医院官网", "乙方宝", "今日标讯"],
  dailyWindows: [
    { value: "1", label: "今天" },
    { value: "3", label: "近 3 天" },
    { value: "7", label: "近 7 天" }
  ],
  dailyStages: [
    { value: "", label: "全部阶段" },
    { value: "pre", label: "招标前" },
    { value: "market", label: "市场调研" },
    { value: "tender", label: "招标中" },
    { value: "award", label: "招标后" }
  ],
  dailyProducts: [
    { value: "", label: "全部产品" },
    { value: "endo", label: "内镜" },
    { value: "ultrasound", label: "超声" },
    { value: "candidate", label: "医疗设备候选" }
  ],
  activityLayers: [
    { value: "", label: "全部来源层级" },
    { value: "official", label: "官方有效" },
    { value: "candidate", label: "医疗设备候选" },
    { value: "supplemental", label: "补充线索" }
  ],
  channels: ["邮件", "企业微信", "短信", "系统站内通知"]
};

let selectedOpportunity = opportunities[1];
let globalSearchQuery = "";
let globalCategoryFilter = "";
let detailReturnState = { pageName: "list", scrollX: 0, scrollY: 0 };
let savedView = "favorites";
const reportReaderState = { type: "daily", key: "" };
const loadedSubscriptions = subscriptionHelpers.load(localStorage);
let subscriptionRules = loadedSubscriptions.rules;
let subscriptionStorageAvailable = loadedSubscriptions.persisted;

const pages = {
  featured: document.querySelector("#page-featured"),
  activity: document.querySelector("#page-activity"),
  daily: document.querySelector("#page-daily"),
  list: document.querySelector("#page-list"),
  detail: document.querySelector("#page-detail"),
  topics: document.querySelector("#page-topics"),
  saved: document.querySelector("#page-saved"),
  settings: document.querySelector("#page-settings"),
  more: document.querySelector("#page-more")
};
const commandPanelPages = new Set(["featured", "activity"]);
const commandPanel = document.querySelector(".command-panel");

function primaryMobilePage(pageName) {
  return ["topics", "saved", "settings"].includes(pageName) ? "more" : pageName;
}

function showPage(pageName) {
  Object.entries(pages).forEach(([name, page]) => {
    if (!page) return;
    page.classList.toggle("active", name === pageName);
  });

  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.page === pageName);
  });
  document.querySelectorAll("[data-mobile-page]").forEach((item) => {
    const isActive = item.dataset.mobilePage === primaryMobilePage(pageName);
    item.classList.toggle("active", isActive);
    if (isActive) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  document.body.classList.toggle("mobile-detail-mode", pageName === "detail");
  commandPanel.classList.toggle("hidden", !commandPanelPages.has(pageName));

  if (pageName === "detail") renderDetail();
  if (pageName === "list") renderList();
  if (pageName === "featured") renderFeaturedFeed();
  if (pageName === "activity") renderActivityFeed();
  if (pageName === "daily") renderDaily();
  if (pageName === "saved") renderSavedPage();
}

function persistOpportunityPatch(item, patch) {
  opportunityRecordState = opportunityRecordHelpers.upsert(opportunityRecordState, item.id, patch);
  const record = opportunityRecordState.records[item.id] || { saved: false, followStatus: "未跟进", note: "" };
  Object.assign(item, record);
  const result = opportunityRecordHelpers.save(localStorage, opportunityRecordState);
  opportunityRecordStorageAvailable = result.persisted;
  return result.persisted;
}

function favoriteButton(item, className = "secondary-button") {
  return `<button class="${className} js-toggle-favorite" type="button" data-id="${item.id}">${item.saved ? "取消收藏" : "收藏"}</button>`;
}

function isSoon(deadline) {
  if (!deadline.startsWith("2026-06")) return false;
  const day = Number(deadline.slice(8, 10));
  return day >= 19 && day <= 26;
}

function getStageGroup(stage) {
  if (stage.includes("市场调研") || stage.includes("需求调查") || stage.includes("参数") || stage.includes("进口产品论证")) return "market";
  if (stage.includes("中标公告")) return "award";
  if (stage.includes("采购意向") || stage.includes("产品征询") || stage.includes("招标前") || stage.includes("采购需求调查")) return "pre";
  return "tender";
}

function dailyStageBucket(item = {}) {
  const text = `${item.noticeStage || ""} ${item.noticeType || ""} ${item.stage || ""} ${item.name || ""}`;
  if (/市场调研|需求调查|产品咨询|参数|进口产品论证/.test(text)) return "market";
  if (/pre_bid|采购意向|产品征询|招标前/.test(text)) return "pre";
  if (/post_bid|中标|成交|结果|废标|流标|终止|合同|验收|招标后|异常/.test(text)) return "award";
  if (/bidding|招标|采购公告|磋商|谈判|询价|更正|变更|延期|补遗|单一来源|资格预审/.test(text)) return "tender";
  return getStageGroup(item.stage || "");
}

function parseNoticeDate(item = {}) {
  const raw = String(item.publishDate || item.publishedAt || item.discoveredAt || "").trim();
  const match = raw.match(/(20\d{2})[-/.年](\d{1,2})[-/.月](\d{1,2})/);
  if (!match) return null;
  const [, year, month, day] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  return Number.isNaN(date.getTime()) ? null : date;
}

function dailyAnchorDate() {
  const reportDate = dailyReport?.reportDate ? new Date(`${dailyReport.reportDate}T00:00:00`) : null;
  if (reportDate && !Number.isNaN(reportDate.getTime())) return reportDate;
  const dates = opportunities.map(parseNoticeDate).filter(Boolean).sort((a, b) => b - a);
  return dates[0] || new Date();
}

function isWithinDailyWindow(item, days) {
  const date = parseNoticeDate(item);
  if (!date) return false;
  const anchor = dailyAnchorDate();
  const start = new Date(anchor);
  start.setDate(anchor.getDate() - Number(days || 7) + 1);
  start.setHours(0, 0, 0, 0);
  const end = new Date(anchor);
  end.setHours(23, 59, 59, 999);
  return date >= start && date <= end;
}

function dailyProductMatch(item = {}, product = "") {
  if (!product) return true;
  if (product === "endo") return item.productTags?.includes("endo") || item.products?.includes("内镜");
  if (product === "ultrasound") return item.productTags?.includes("ultrasound") || item.products?.includes("超声");
  if (product === "candidate") return item.productCategory === "medical_device_candidate" || item.isMedicalDeviceCandidate === true;
  return true;
}

function productLabel(item = {}) {
  if (item.productCategory === "medical_device_candidate" || item.isMedicalDeviceCandidate === true) return "医疗设备候选";
  const labels = [];
  if (item.productTags?.includes("endo") || item.products?.includes("内镜")) labels.push("内镜");
  if (item.productTags?.includes("ultrasound") || item.products?.includes("超声")) labels.push("超声");
  return labels.length ? labels.join(" / ") : (item.products || ["待识别"]).join(" / ");
}

function dailyFollowAdvice(item = {}) {
  const bucket = dailyStageBucket(item);
  const priority = String(item.followPriority || "").trim();
  if (item.productCategory === "medical_device_candidate" || item.isMedicalDeviceCandidate === true || priority === "candidate") {
    return { label: "建议观察", text: "仅命中医疗设备泛化词，需人工判断是否属于内镜或超声。" };
  }
  if (bucket === "market" || bucket === "pre") return { label: "建议跟进", text: "适合提前确认科室需求、参数方向和预算节奏。" };
  if (bucket === "tender") return { label: "建议跟进", text: "核对报名时间、采购文件、资质和技术参数响应。" };
  if (bucket === "award") return { label: "建议观察", text: "用于追踪中标品牌、代理商、价格和后续维保机会。" };
  return { label: "暂不跟进", text: "当前字段不足或匹配较弱，建议先人工核验原文。" };
}

function levelClass(level) {
  const normalized = String(level || "").replace("级", "");
  return ["S", "A", "B"].includes(normalized) ? normalized.toLowerCase() : "pending";
}

function dataTypeClass(item) {
  if (item.dataType === "历史公开公告样例") return "history";
  if (item.dataType === "自动采集数据") return "crawled";
  return item.dataType === "真实样例" ? "real" : "mock";
}

function dataTypeLabel(item) {
  return item.sourceStatus || item.sourceSite || item.dataType;
}

function normalizedSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function currentSearchQuery() {
  return normalizedSearchText(globalSearchQuery);
}

function itemSearchText(item = {}) {
  return normalizedSearchText([
    item.name,
    item.title,
    item.projectName,
    item.hospital,
    item.purchaser,
    item.buyerName,
    item.region,
    item.city,
    item.department,
    item.stage,
    item.noticeType,
    item.sourceSite,
    item.sourceName,
    item.sourceType,
    item.transactionPlatform,
    dataTypeLabel(item),
    productLabel(item),
    ...(item.products || []),
    ...(item.productTags || []),
    ...(item.matchedKeywords || []),
    item.budget,
    item.budgetAmount,
    item.deadline,
    item.summary,
    item.bodyText,
    item.fullText
  ].filter(Boolean).join(" "));
}

function itemMatchesSearch(item = {}) {
  const query = currentSearchQuery();
  if (!query) return true;
  return itemSearchText(item).includes(query);
}

function itemMatchesGlobalCategory(item = {}) {
  if (!globalCategoryFilter) return true;
  if (globalCategoryFilter === "endo") return dailyProductMatch(item, "endo");
  if (globalCategoryFilter === "ultrasound") return dailyProductMatch(item, "ultrasound");
  if (globalCategoryFilter === "candidate") return dailyProductMatch(item, "candidate");
  if (globalCategoryFilter === "official") return opportunityLayerKey(item) === "official";
  if (globalCategoryFilter === "supplemental") return opportunityLayerKey(item) === "supplemental";
  return true;
}

function levelLabel(level) {
  const normalized = String(level || "");
  if (["S", "A", "B"].includes(normalized)) return `${normalized}级`;
  return normalized;
}

function scoreLabel(score) {
  return score || "待评估";
}

function priorityLabel(item) {
  if (item.followPriority === "high") return "高";
  if (item.followPriority === "medium") return "中";
  if (item.followPriority === "low") return "低";
  if (item.followPriority === "candidate") return "候选";
  if (item.score === "待评估" || item.level === "待评估") return "待评估";
  if (item.level === "S" || Number(item.score) >= 85) return "高";
  if (item.level === "A" || Number(item.score) >= 75) return "中";
  return "低";
}

function priorityBadgeLabel(item) {
  const priority = priorityLabel(item);
  return priority === "待评估" ? "优先级待评估" : `优先级：${priority}`;
}

function displayValue(value) {
  return value || "未提取到";
}

function textValue(value) {
  return String(value || "").trim();
}

function isApiDataSourceUrl(url) {
  const value = textValue(url);
  return /\/[-\w]+-api\/|\/api\/|findCgggByGuid|find[A-Za-z]+ByGuid/.test(value);
}

function activePageName() {
  return Object.entries(pages).find(([, page]) => page?.classList.contains("active"))?.[0] || "list";
}

function openOpportunityDetail(item) {
  const sourcePage = activePageName();
  if (sourcePage !== "detail") {
    detailReturnState = { pageName: sourcePage, scrollX: window.scrollX, scrollY: window.scrollY };
  }
  selectedOpportunity = item;
  showPage("detail");
  window.scrollTo(0, 0);
}

function returnFromDetail() {
  const targetPage = pages[detailReturnState.pageName] ? detailReturnState.pageName : "list";
  showPage(targetPage);
  requestAnimationFrame(() => {
    window.scrollTo(detailReturnState.scrollX, detailReturnState.scrollY);
  });
}

function isYunnanPublicResourceApiItem(item) {
  const candidates = [item.originalOfficialUrl, item.detailUrl, item.rawUrl, item.url, item.link, rawDetailUrl(item)];
  return candidates.some((url) => /ggzy\.yn\.gov\.cn\/ynggfwpt-home-api\//.test(textValue(url)));
}

function isUnstablePlatformUrl(url) {
  const value = textValue(url);
  return /ggzy\.yn\.gov\.cn\/(?:homePage)?#\/tradeHall\/tradeDetail/.test(value);
}

function isLikelySourceHomepageUrl(url) {
  try {
    const parsed = new URL(textValue(url));
    return (parsed.pathname === "/" || parsed.pathname === "") && !parsed.hash && !parsed.search;
  } catch {
    return false;
  }
}

function isPlaceholderUrl(url) {
  const value = textValue(url).toLowerCase();
  return !value || value === "#" || value.startsWith("javascript:");
}

function rawDetailUrl(item) {
  return textValue(item.rawData?.detail?.url || item.rawData?.item?.url || item.rawData?.url);
}

function paramFromUrl(url, name) {
  const value = textValue(url);
  if (!value) return "";
  try {
    const parsed = new URL(value);
    const directValue = parsed.searchParams.get(name);
    if (directValue) return directValue;
    const hashQuery = parsed.hash.includes("?") ? parsed.hash.slice(parsed.hash.indexOf("?") + 1) : "";
    const hashValue = new URLSearchParams(hashQuery).get(name);
    if (hashValue) return hashValue;
  } catch {
    // Fall through to regex extraction for partial URLs.
  }
  const match = value.match(new RegExp(`[?&#]${name}=([^&#]+)`));
  return match ? decodeURIComponent(match[1]) : "";
}

function normalizeYunnanDeepLink(url) {
  const value = textValue(url);
  if (!/ggzy\.yn\.gov\.cn\/(?:homePage)?#\/tradeHall\/tradeDetail/.test(value)) return "";
  const guid = paramFromUrl(value, "guid");
  const colCode = paramFromUrl(value, "colCode") || "2";
  const rowCode = paramFromUrl(value, "rowCode") || "采购公告";
  return guid ? constructYunnanDeepLink(guid, colCode, rowCode) : "";
}

function defaultYunnanRowCode(item) {
  const text = `${item.noticeType || ""}${item.stage || ""}${item.name || ""}`;
  if (/更正|变更|澄清|答疑/.test(text)) return "更正公告";
  if (/中标|成交|结果/.test(text)) return "中标结果";
  return "采购公告";
}

function constructYunnanDeepLink(guid, colCode = "2", rowCode = "采购公告") {
  return `https://ggzy.yn.gov.cn/homePage#/tradeHall/tradeDetail?guid=${encodeURIComponent(textValue(guid))}&colCode=${encodeURIComponent(textValue(colCode) || "2")}&rowCode=${encodeURIComponent(textValue(rowCode) || "采购公告")}`;
}

function detailDeepLinkUrl(item) {
  const candidates = [rawDetailUrl(item), item.noticeUrl, item.url, item.rawUrl, item.originalUrl, item.link, item.detailUrl, item.originalOfficialUrl];
  const existingDeepLink = textValue(candidates.map(normalizeYunnanDeepLink).find(Boolean));
  if (existingDeepLink) return existingDeepLink;

  const guid = textValue(item.rawData?.detail?.guid || item.rawData?.value?.guid || candidates.map((url) => paramFromUrl(url, "guid")).find(Boolean));
  if (!guid) return "";
  const colCode = item.rawData?.detail?.colCode || item.rawData?.value?.colCode || candidates.map((url) => paramFromUrl(url, "colCode")).find(Boolean) || "2";
  const rowCode = item.rawData?.detail?.rowCode || item.rawData?.value?.rowCode || candidates.map((url) => paramFromUrl(url, "rowCode")).find(Boolean) || defaultYunnanRowCode(item);
  return constructYunnanDeepLink(guid, colCode, rowCode);
}

function stableOriginalUrl(item) {
  const rawUrl = rawDetailUrl(item);
  if (!isPlaceholderUrl(rawUrl) && !isApiDataSourceUrl(rawUrl) && !isUnstablePlatformUrl(rawUrl) && !isLikelySourceHomepageUrl(rawUrl)) return rawUrl;
  const candidates = [item.noticeUrl, item.url, item.rawUrl, item.originalUrl, item.link, item.detailUrl, item.originalOfficialUrl, item.sourceUrl];
  return textValue(candidates.find((url) => !isPlaceholderUrl(url) && !isApiDataSourceUrl(url) && !isUnstablePlatformUrl(url) && !isLikelySourceHomepageUrl(url)));
}

function directReadableOriginalUrl(item) {
  const candidates = [rawDetailUrl(item), item.noticeUrl, item.url, item.rawUrl, item.originalUrl, item.link, item.detailUrl, item.originalOfficialUrl];
  return textValue(candidates.find((url) => !isPlaceholderUrl(url) && !isApiDataSourceUrl(url) && !isUnstablePlatformUrl(url) && !isLikelySourceHomepageUrl(url)));
}

function directOriginalUrl(item) {
  return directReadableOriginalUrl(item);
}

function platformEntryUrl(item) {
  const candidates = [item.sourceUrl, rawDetailUrl(item), item.link, item.url, item.noticeUrl, item.rawUrl, item.originalUrl];
  const platformUrl = textValue(candidates.find((url) => !isPlaceholderUrl(url) && !isApiDataSourceUrl(url)));
  if (isUnstablePlatformUrl(platformUrl)) return "https://ggzy.yn.gov.cn/";
  return platformUrl || "#";
}

function dataSourceUrl(item) {
  const candidates = [item.originalOfficialUrl, item.detailUrl, item.rawUrl, item.url, item.link, rawDetailUrl(item), item.sourceUrl];
  return textValue(candidates.find((url) => textValue(url) && isApiDataSourceUrl(url)) || candidates.find((url) => textValue(url)) || "#") || "#";
}

function officialDetailUrl(item) {
  if (isYunnanPublicResourceApiItem(item)) return stableOriginalUrl(item);
  return detailDeepLinkUrl(item) || stableOriginalUrl(item);
}

function officialApiUrl(item) {
  const apiUrl = dataSourceUrl(item);
  return isApiDataSourceUrl(apiUrl) ? apiUrl : "";
}

function sourcePlatformUrl(item) {
  return platformEntryUrl(item);
}

function sourceLinkUrl(item) {
  return directReadableOriginalUrl(item) || detailDeepLinkUrl(item) || sourcePlatformUrl(item) || "#";
}

function hasReadableSnapshot(item) {
  const rawBulletin = item.rawData?.detail?.bulletincontent || item.rawData?.value?.bulletincontent || "";
  return Boolean(textValue(item.fullText) || htmlToReadableText(rawBulletin) || textValue(item.summary) || detailNoticeTitle(item));
}

function readableDetailActionUrl(item) {
  const directUrl = directReadableOriginalUrl(item);
  if (directUrl || isYunnanPublicResourceApiItem(item)) return directUrl;
  return detailDeepLinkUrl(item);
}

function sourcePrimaryAction(item) {
  const directUrl = directReadableOriginalUrl(item);
  if (directUrl) return { type: "external", label: "打开原文链接", url: directUrl };
  if (hasReadableSnapshot(item)) return { type: "snapshot", label: SNAPSHOT_BUTTON_LABEL, url: "" };
  const detailUrl = detailDeepLinkUrl(item);
  if (detailUrl) return { type: "external", label: "尝试打开官方详情", url: detailUrl };
  const platformUrl = sourcePlatformUrl(item);
  if (platformUrl !== "#") return { type: "external", label: "打开来源平台", url: platformUrl };
  const apiUrl = officialApiUrl(item);
  if (apiUrl) return { type: "external", label: "查看数据源", url: apiUrl };
  return { type: "none", label: "暂无链接", url: "#" };
}

function sourceActionControl(item) {
  const action = sourcePrimaryAction(item);
  if (action.type === "snapshot") {
    return `<button class="secondary-button js-open-snapshot" type="button" data-id="${item.id}">${action.label}</button>`;
  }
  return `<a class="secondary-button ${action.type === "none" ? "disabled" : ""}" href="${action.url || "#"}" target="_blank" rel="noreferrer" aria-disabled="${action.type === "none" ? "true" : "false"}">${action.label}</a>`;
}

function sourceActionLabel(item) {
  if (directReadableOriginalUrl(item)) return "打开原文链接";
  if (hasReadableSnapshot(item)) return SNAPSHOT_BUTTON_LABEL;
  if (officialDetailUrl(item)) return "尝试打开官方详情";
  if (officialApiUrl(item)) return "查看数据源";
  if (sourceLinkUrl(item) === "#") return "暂无链接";
  return "打开来源平台";
}

function sourceStatusLabel(item) {
  if (directReadableOriginalUrl(item)) return "原文快照 + 原文链接";
  if (officialDetailUrl(item)) return "原文快照 + 官方详情链接";
  if (officialApiUrl(item)) return "原文快照 + 接口数据源";
  if (platformEntryUrl(item) !== "#") return "来源平台入口";
  if (sourceLinkUrl(item) === "#") return "未提供链接";
  return "来源平台入口";
}

function sourceHintText(item) {
  if (isYunnanPublicResourceApiItem(item)) {
    return "云南公共资源接口来源当前没有经过验证的稳定公告网页，系统先提供基于官方接口正文生成的原文快照。可复制公告标题或项目编号后在来源平台检索；接口地址仅作为核验证据保留。";
  }
  return "系统优先提供可阅读的原文入口；如果官网只提供接口数据或路由型页面，卡片会先打开站内原文快照。系统已基于官方返回内容生成可读原文快照，接口数据源仅作为核验证据保留。";
}

function decodeHtmlEntities(text) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = textValue(text);
  return textarea.value;
}

function htmlToReadableText(html) {
  const cleaned = decodeHtmlEntities(html)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, " ")
    .replace(/<\/?(span|samp)[^>]*>/gi, " ")
    .replace(/<\/(p|div|tr|li|h[1-6])>/gi, "\n")
    .replace(/<\/(td|th)>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/PlaygroundEditorTheme__\w+|bookmark-item|single-line-text-input-box-cls|Template__bookmark/gi, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
  return decodeHtmlEntities(cleaned);
}

function firstMatch(text, patterns) {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match && match[1]) return match[1].trim();
  }
  return "";
}

function snippetAfterLabel(text, labelPattern, maxLength = 180) {
  const match = text.match(labelPattern);
  if (!match) return "";
  return text.slice(match.index).replace(/\s+/g, " ").slice(0, maxLength).trim();
}

function readableNoticeText(item) {
  const rawBulletin = item.rawData?.detail?.bulletincontent || item.rawData?.value?.bulletincontent || "";
  const cleanedFullText = htmlToReadableText(textValue(item.fullText)) || htmlToReadableText(rawBulletin);
  const projectCode = item.rawData?.detail?.purchaseprojectcode || firstMatch(cleanedFullText, [/项目编号[:：]\s*([^\n ]+)/]);
  const title = item.rawData?.detail?.bulletintitle || item.projectName || item.name;
  const demand = snippetAfterLabel(cleanedFullText, /采购需求[:：]/, 220) || "未提取到明确采购需求字段。";
  const bodySummary = textValue(item.summary) || cleanedFullText.slice(0, 300);
  const lines = [
    `公告标题：${displayValue(title)}`,
    `项目编号：${displayValue(projectCode)}`,
    `项目名称：${displayValue(item.projectName || item.name)}`,
    `采购单位：${displayValue(item.purchaser || item.hospital)}`,
    `预算金额：${displayValue(item.budgetAmount || item.budget)}`,
    `报名/投标截止时间：${displayValue(item.bidDeadline !== "未公开" ? item.bidDeadline : item.deadline)}`,
    `采购需求：${demand}`,
    "",
    "公告正文摘要：",
    displayValue(bodySummary),
    "",
    "原文内容：",
    displayValue(cleanedFullText).slice(0, 1400)
  ];
  return lines.join("\n");
}

function detailNoticeTitle(item) {
  return textValue(item.rawData?.detail?.bulletintitle || item.rawData?.value?.bulletintitle || item.projectName || item.name);
}

function detailProjectCode(item) {
  const rawBulletin = item.rawData?.detail?.bulletincontent || item.rawData?.value?.bulletincontent || "";
  const cleanedFullText = htmlToReadableText(textValue(item.fullText)) || htmlToReadableText(rawBulletin);
  return textValue(item.rawData?.detail?.purchaseprojectcode || item.rawData?.value?.purchaseprojectcode || item.projectCode || firstMatch(cleanedFullText, [/项目编号[:：]\s*([^\n ]+)/]));
}

function snapshotDemandText(text, item) {
  return snippetAfterLabel(text, /采购需求[:：]/, 260)
    || snippetAfterLabel(text, /采购内容[:：]/, 260)
    || displayValue(item.products?.join(" / "));
}

function snapshotAgencyText(text, item) {
  return textValue(item.agency || item.purchaseAgency || item.rawData?.detail?.agency || item.rawData?.value?.agency)
    || firstMatch(text, [/采购代理机构信息[\s\S]*?名\s*称[:：]\s*([^\n]+)/, /采购代理机构[:：]\s*([^\n]+)/, /代理机构名称[:：]\s*([^\n]+)/])
    || "未提取到";
}

function snapshotPhoneText(text, item) {
  return textValue(item.phone && item.phone !== "未公开" ? item.phone : "")
    || firstMatch(text, [/联系电话[:：]\s*([^\n]+)/, /联系方式[:：]\s*([^\n]+)/, /电\s*话[:：]\s*([^\n]+)/])
    || "未提取到";
}

function internalSnapshot(item) {
  const rawBulletin = item.rawData?.detail?.bulletincontent || item.rawData?.value?.bulletincontent || "";
  const body = htmlToReadableText(textValue(item.fullText)) || htmlToReadableText(rawBulletin) || textValue(item.summary);
  return {
    title: detailNoticeTitle(item),
    projectCode: detailProjectCode(item),
    projectName: textValue(item.projectName || item.name),
    purchaser: textValue(item.purchaser || item.hospital),
    budget: textValue(item.budgetAmount || item.budget),
    deadline: textValue(item.bidDeadline && item.bidDeadline !== "未公开" ? item.bidDeadline : item.deadline),
    demand: snapshotDemandText(body, item),
    agency: snapshotAgencyText(body, item),
    phone: snapshotPhoneText(body, item),
    sourcePlatform: textValue(item.sourceSite || item.sourceName || item.dataType),
    officialDetailUrl: officialDetailUrl(item),
    officialApiUrl: officialApiUrl(item),
    body
  };
}

function setSnapshotLink(selector, url) {
  const link = document.querySelector(selector);
  const value = textValue(url);
  link.href = value || "#";
  link.textContent = value || "未提供";
  link.classList.toggle("disabled-link", !value);
}

function renderSnapshotModal(item) {
  const snapshot = internalSnapshot(item);
  document.querySelector("#snapshot-notice-title").textContent = displayValue(snapshot.title);
  document.querySelector("#snapshot-project-code").textContent = displayValue(snapshot.projectCode);
  document.querySelector("#snapshot-project-name").textContent = displayValue(snapshot.projectName);
  document.querySelector("#snapshot-purchaser").textContent = displayValue(snapshot.purchaser);
  document.querySelector("#snapshot-budget").textContent = displayValue(snapshot.budget);
  document.querySelector("#snapshot-deadline").textContent = displayValue(snapshot.deadline);
  document.querySelector("#snapshot-demand").textContent = displayValue(snapshot.demand);
  document.querySelector("#snapshot-agency").textContent = displayValue(snapshot.agency);
  document.querySelector("#snapshot-phone").textContent = displayValue(snapshot.phone);
  document.querySelector("#snapshot-source-platform").textContent = displayValue(snapshot.sourcePlatform);
  setSnapshotLink("#snapshot-official-detail", snapshot.officialDetailUrl);
  setSnapshotLink("#snapshot-official-api", snapshot.officialApiUrl);
  document.querySelector("#snapshot-body").textContent = displayValue(snapshot.body);
}

function openSnapshotModal() {
  if (!selectedOpportunity) return;
  renderSnapshotModal(selectedOpportunity);
  document.querySelector("#snapshot-modal").hidden = false;
  document.body.classList.add("modal-open");
}

function closeSnapshotModal() {
  document.querySelector("#snapshot-modal").hidden = true;
  document.body.classList.remove("modal-open");
}

function showCopyToast(message) {
  const toast = document.querySelector("#copy-source-toast");
  if (toast) toast.textContent = message;
}

async function writeClipboardText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

async function copyDetailField(kind) {
  if (!selectedOpportunity) return;
  const value = kind === "code" ? detailProjectCode(selectedOpportunity) : detailNoticeTitle(selectedOpportunity);
  if (!value) {
    showCopyToast(kind === "code" ? "暂无项目编号可复制" : "暂无公告标题可复制");
    return;
  }
  showCopyToast(kind === "code" ? "已复制项目编号" : "已复制公告标题");
  try {
    await writeClipboardText(value);
  } catch {
    showCopyToast("复制失败，请手动选择文本复制");
  }
}

function sourceTypeLabel(item) {
  return statusHelpers.sourceDisplayLabel(item);
}

function productCategoryLabel(item) {
  if (item.productCategory === "both") return "内镜 / 超声";
  if (item.productCategory === "endoscopy") return "内镜";
  if (item.productCategory === "ultrasound") return "超声";
  return item.products.join(" / ") || "待识别";
}

function recommendationReason(item) {
  const stage = displayValue(item.noticeType || item.stage);
  const product = productCategoryLabel(item);
  const source = sourceTypeLabel(item);
  return `${stage} · ${product} · ${priorityBadgeLabel(item)}，来自${source}。基于截止时间、采购阶段、产品匹配度生成，建议优先核验采购单位、截止时间和可切入参数。`;
}

function keyField(label, value) {
  return `<span><strong>${label}</strong><em>${displayValue(value)}</em></span>`;
}

function featuredTimelineTime(item = {}, index = 0) {
  const timeSource = item.publishedAt || item.discoveredAt || item.bidOpeningTime || item.deadline || "";
  const matched = String(timeSource).match(/(\d{1,2}):(\d{2})/);
  if (matched) return `${matched[1].padStart(2, "0")}:${matched[2]}`;
  return `${String(8 + (index % 5)).padStart(2, "0")}:${String((index * 11) % 60).padStart(2, "0")}`;
}

function featuredTimelineDateLabel(items = []) {
  const firstDate = items.map(parseNoticeDate).find(Boolean) || dailyAnchorDate();
  return `${firstDate.getMonth() + 1}月${firstDate.getDate()}日`;
}

function featuredMetaLine(item = {}) {
  return [
    displayValue(item.sourceSite || item.sourceName || item.dataType),
    opportunityLayerLabel(item),
    stageBucketLabel(dailyStageBucket(item)),
    productLabel(item),
    displayValue(item.region)
  ].filter(Boolean).join(" · ");
}

function featuredFieldSummary(item = {}) {
  return [
    `采购单位：${displayValue(item.purchaser || item.hospital)}`,
    `预算：${displayValue(item.budgetAmount || item.budget)}`,
    `截止：${displayValue(item.deadline)}`
  ].join(" · ");
}

function featuredTimelineItem(item, index) {
  const showManualBadge = statusHelpers.shouldShowManualBadge(item);
  const advice = dailyFollowAdvice(item);
  return `
    <li class="featured-timeline-item">
      <time class="featured-timeline-time">${featuredTimelineTime(item, index)}</time>
      <article class="opportunity-card featured-opportunity-card">
        <div class="featured-card-topline">
          <span>${featuredMetaLine(item)}</span>
          <div class="featured-card-badges">
            <span class="data-type-badge ${dataTypeClass(item)}">${sourceTypeLabel(item)}</span>
            <span class="score-mini">${priorityBadgeLabel(item)}</span>
          </div>
        </div>
        <h3>${item.projectName || item.name}</h3>
        <p class="featured-field-line">${featuredFieldSummary(item)}</p>
        <p class="card-summary-line">${displayValue(item.summary)}</p>
        <div class="card-tag-row featured-tag-row">
          <span class="stage-badge">${displayValue(item.noticeType || item.stage)}</span>
          <span class="meta-chip">${productCategoryLabel(item)}</span>
          ${showManualBadge ? `<span class="manual-check-badge">${statusHelpers.manualBadgeLabel(item)}</span>` : ""}
        </div>
        <div class="recommend-reason featured-reason"><strong>${advice.label}</strong>${advice.text}</div>
        <div class="card-actions featured-card-actions">
          ${sourceActionControl(item)}
          <button class="secondary-button js-open-detail" type="button" data-id="${item.id}">查看详情</button>
          ${favoriteButton(item)}
          <button class="primary-button js-mark-follow" type="button" data-id="${item.id}">加入跟进</button>
        </div>
      </article>
    </li>
  `;
}

function opportunityCard(item, compact = false) {
  const showManualBadge = statusHelpers.shouldShowManualBadge(item);
  return `
    <article class="opportunity-card ${compact ? "compact-card" : ""}">
      <div class="card-title-line">
        <div>
          <h3>${item.projectName || item.name}</h3>
          <p>${displayValue(item.sourceSite || item.dataType)}</p>
        </div>
        <span class="score-mini">${priorityBadgeLabel(item)}</span>
      </div>
      <div class="card-key-fields">
        ${keyField("采购单位", item.purchaser || item.hospital)}
        ${keyField("阶段", item.noticeType || item.stage)}
        ${keyField("区域", item.region)}
        ${keyField("品类", productCategoryLabel(item))}
        ${keyField("截止时间", item.deadline)}
        ${keyField("预算金额", item.budgetAmount || item.budget)}
      </div>
      <div class="card-tag-row">
        <span class="stage-badge">${displayValue(item.noticeType || item.stage)}</span>
        <span class="meta-chip">${displayValue(item.region)}</span>
        <span class="meta-chip">${productCategoryLabel(item)}</span>
        <span class="data-type-badge ${dataTypeClass(item)}">${sourceTypeLabel(item)}</span>
        ${showManualBadge ? `<span class="manual-check-badge">${statusHelpers.manualBadgeLabel(item)}</span>` : ""}
      </div>
      <p class="card-summary-line">${displayValue(item.summary)}</p>
      <div class="recommend-reason"><strong>推荐理由</strong>${recommendationReason(item)}</div>
      <div class="card-actions">
        ${sourceActionControl(item)}
        <button class="secondary-button js-open-detail" type="button" data-id="${item.id}">查看详情</button>
        ${favoriteButton(item)}
        <button class="primary-button js-mark-follow" type="button" data-id="${item.id}">加入跟进</button>
      </div>
    </article>
  `;
}

function bindOpportunityButtons(scope = document) {
  scope.querySelectorAll(".js-open-snapshot").forEach((button) => {
    button.addEventListener("click", () => {
      selectedOpportunity = opportunities.find((item) => item.id === button.dataset.id);
      openSnapshotModal();
    });
  });

  scope.querySelectorAll(".js-open-detail").forEach((button) => {
    button.addEventListener("click", () => {
      openOpportunityDetail(opportunities.find((item) => item.id === button.dataset.id));
    });
  });

  scope.querySelectorAll(".js-mark-follow").forEach((button) => {
    button.addEventListener("click", () => {
      selectedOpportunity = opportunities.find((item) => item.id === button.dataset.id);
      persistOpportunityPatch(selectedOpportunity, {
        followStatus: "今日联系",
        note: selectedOpportunity.note || "已从商机列表标记为今日跟进。"
      });
      openOpportunityDetail(selectedOpportunity);
    });
  });

  scope.querySelectorAll(".js-toggle-favorite").forEach((button) => {
    button.addEventListener("click", () => {
      const item = opportunities.find((candidate) => candidate.id === button.dataset.id);
      persistOpportunityPatch(item, { saved: !item.saved });
      renderFeaturedFeed();
      renderActivityFeed();
      renderDaily();
      renderList();
      if (pages.saved.classList.contains("active")) renderSavedPage();
    });
  });
}

function renderPipelineStatus(status) {
  const statusNode = document.querySelector("#pipeline-status");
  if (!statusNode) return;

  if (!status || !status.crawlStatus) {
    statusNode.className = "pipeline-status hidden";
    statusNode.textContent = "";
    return;
  }

  const isWarning = status.crawlStatus === "failed_using_cache" || status.crawlStatus === "partial_failed";
  statusNode.className = `pipeline-status${isWarning ? " warning" : ""}`;
  statusNode.textContent = status.crawlStatus === "failed_using_cache"
    ? "今日采集失败，当前日报基于上一次成功采集数据生成。"
    : status.crawlStatus === "partial_failed"
    ? "部分来源采集异常，日报与邮件预览仍已生成。"
    : "今日采集成功，日报已更新。";
}

function stageBucketLabel(bucket) {
  if (bucket === "pre") return "招标前";
  if (bucket === "market") return "市场调研";
  if (bucket === "tender") return "招标中";
  if (bucket === "award") return "招标后";
  return "待识别";
}

function workbenchSourceItems() {
  return opportunities.filter((item) => {
    if (item.shouldIgnore === true) return false;
    return statusHelpers.isOfficialMainOpportunity(item)
      || item.productCategory === "medical_device_candidate"
      || item.isMedicalDeviceCandidate === true
      || statusHelpers.isSupplementalClue(item);
  });
}

function opportunityLayerKey(item = {}) {
  if (item.productCategory === "medical_device_candidate" || item.isMedicalDeviceCandidate === true || item.followPriority === "candidate") return "candidate";
  if (statusHelpers.isOfficialMainOpportunity(item)) return "official";
  if (statusHelpers.isSupplementalClue(item)) return "supplemental";
  return "other";
}

function opportunityLayerLabel(item = {}) {
  const layer = opportunityLayerKey(item);
  if (layer === "official") return "官方有效";
  if (layer === "candidate") return "医疗设备候选";
  if (layer === "supplemental") return "补充线索";
  return "待判断";
}

function readableOpportunityTitle(item = {}) {
  const title = String(item.projectName || item.name || "").trim();
  return /^https?:\/\//i.test(title) || !title ? "标题待核验" : title;
}

function dailyPurchaserLabel(item = {}) {
  const raw = String(item.hospital || item.purchaser || "").replace(/\s+/g, " ").trim();
  const named = raw.match(/(?:信息\s*)?名\s*称[：:]?\s*([\s\S]{2,80}?)(?=\s*地\s*址|地址|联系方式|$)/);
  if (named) return named[1].trim();
  if (!raw || raw === "未公开" || raw === "待识别") return "采购单位未提取到";
  return raw;
}

function dailyActionState(item = {}) {
  const layer = opportunityLayerKey(item);
  const titleNeedsCheck = readableOpportunityTitle(item) === "标题待核验";
  const manual = item.requiresManualCheck || titleNeedsCheck || layer !== "official";
  if (manual) return {
    key: "verify",
    label: "今日核验",
    rationale: titleNeedsCheck ? "官方正文或线索可读，但公告标题需要重新核验。" : dailyFollowAdvice(item).text,
    nextStep: "打开详情，核验采购单位、截止时间和产品参数。"
  };
  if (item.followPriority === "high" || ["pre", "market"].includes(dailyStageBucket(item))) return {
    key: "now",
    label: "立即跟进",
    rationale: dailyFollowAdvice(item).text,
    nextStep: "今天联系采购单位，确认参数沟通和报名窗口。"
  };
  return {
    key: "watch",
    label: "持续观察",
    rationale: dailyFollowAdvice(item).text,
    nextStep: "加入跟进，等待公告阶段或关键字段更新。"
  };
}

function dailyDeadlineTime(item = {}) {
  const match = String(item.deadline || item.bidDeadline || item.signupDeadline || "").match(/20\d{2}-\d{1,2}-\d{1,2}/);
  const time = match ? new Date(`${match[0]}T23:59:59`).getTime() : Number.MAX_SAFE_INTEGER;
  return Number.isNaN(time) ? Number.MAX_SAFE_INTEGER : time;
}

function compareDailyPriority(a, b) {
  const officialWeight = (item) => opportunityLayerKey(item) === "official" && item.officialAccessLevel === "full" ? 3
    : opportunityLayerKey(item) === "official" ? 2
    : opportunityLayerKey(item) === "candidate" ? 1 : 0;
  const layerDiff = officialWeight(b) - officialWeight(a);
  if (layerDiff !== 0) return layerDiff;
  const priorityWeight = { high: 3, medium: 2, low: 1, candidate: 0 };
  const priorityDiff = (priorityWeight[b.followPriority] || 0) - (priorityWeight[a.followPriority] || 0);
  if (priorityDiff !== 0) return priorityDiff;
  const scoreDiff = Number(b.opportunityScore ?? b.score ?? 0) - Number(a.opportunityScore ?? a.score ?? 0);
  if (scoreDiff !== 0) return scoreDiff;
  const deadlineDiff = dailyDeadlineTime(a) - dailyDeadlineTime(b);
  if (deadlineDiff !== 0) return deadlineDiff;
  return (parseNoticeDate(b)?.getTime() || 0) - (parseNoticeDate(a)?.getTime() || 0);
}

function dailyPriorityItems(limit = 5) {
  return workbenchSourceItems()
    .filter(itemMatchesSearch)
    .filter(itemMatchesGlobalCategory)
    .sort(compareDailyPriority)
    .slice(0, Math.min(5, limit));
}

function dailyPriorityCard(item, index) {
  const action = dailyActionState(item);
  const purchaser = dailyPurchaserLabel(item);
  const budget = item.budget || item.budgetAmount || "预算未提取到";
  const deadline = item.deadline || "截止时间未提取到";
  return `
    <article class="daily-priority-card${index === 0 ? " is-lead" : ""}">
      <div class="daily-action-rail action-${action.key}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${action.label}</strong>
      </div>
      <div class="daily-priority-content">
        <p class="daily-priority-source">${displayValue(purchaser)} · ${opportunityLayerLabel(item)}</p>
        <h3>${displayValue(readableOpportunityTitle(item))}</h3>
        <div class="daily-priority-tags">
          <span>${stageBucketLabel(dailyStageBucket(item))}</span>
          <span>${productLabel(item)}</span>
          <span>${displayValue(item.region)}</span>
        </div>
        <dl class="daily-priority-facts">
          <div><dt>截止时间</dt><dd>${displayValue(deadline)}</dd></div>
          <div><dt>预算金额</dt><dd>${displayValue(budget)}</dd></div>
        </dl>
        <div class="daily-priority-notes">
          <p><strong>推荐依据</strong>${displayValue(action.rationale)}</p>
          <p><strong>下一步</strong>${displayValue(action.nextStep)}</p>
        </div>
        <div class="card-actions daily-priority-actions">
          ${sourceActionControl(item)}
          <button class="secondary-button js-open-detail" type="button" data-id="${item.id}">查看详情</button>
          ${favoriteButton(item)}
          <button class="primary-button js-mark-follow" type="button" data-id="${item.id}">加入跟进</button>
        </div>
      </div>
    </article>
  `;
}

function renderDailyPriorityBrief(items, report = null) {
  const list = document.querySelector("#daily-priority-list");
  const summary = document.querySelector("#daily-brief-summary");
  const edition = document.querySelector("#daily-edition");
  const actionList = document.querySelector("#daily-action-list");
  if (!list || !summary || !actionList) return;

  const reportDate = report?.reportDate || new Date().toISOString().slice(0, 10);
  edition.textContent = `${reportDate} · 云南医疗招采早报`;
  const nowCount = items.filter((item) => dailyActionState(item).key === "now").length;
  const verifyCount = items.filter((item) => dailyActionState(item).key === "verify").length;
  summary.textContent = items.length
    ? `今天优先查看 ${items.length} 条，其中 ${nowCount} 条建议立即跟进，${verifyCount} 条需要人工核验。`
    : "今天没有达到优先标准的商机，请查看近 7 天全部信息。";
  list.innerHTML = items.length
    ? items.map(dailyPriorityCard).join("")
    : '<article class="mini-empty-state"><strong>今天没有达到优先标准的商机</strong><p>系统不会用低质量线索凑满数量，请继续查看近 7 天全部信息。</p></article>';
  actionList.innerHTML = items.slice(0, 3).map((item, index) => {
    const action = dailyActionState(item);
    return `<li><span>${String(index + 1).padStart(2, "0")}</span><div><strong>${action.label}：${displayValue(readableOpportunityTitle(item))}</strong><p>${displayValue(action.nextStep)}</p></div></li>`;
  }).join("") || "<li><div><strong>暂无优先动作</strong><p>查看近 7 天信息，人工判断是否有新增机会。</p></div></li>";
  bindOpportunityButtons(list);
}

function layerCounts(items = workbenchSourceItems()) {
  return items.reduce((counts, item) => {
    const layer = opportunityLayerKey(item);
    counts[layer] = (counts[layer] || 0) + 1;
    return counts;
  }, { official: 0, candidate: 0, supplemental: 0 });
}

function featuredItems() {
  return workbenchSourceItems()
    .filter(itemMatchesSearch)
    .filter(itemMatchesGlobalCategory)
    .sort((a, b) => {
      const layerWeight = { official: 3, candidate: 2, supplemental: 1, other: 0 };
      const layerDiff = (layerWeight[opportunityLayerKey(b)] || 0) - (layerWeight[opportunityLayerKey(a)] || 0);
      if (layerDiff !== 0) return layerDiff;
      return Number(b.opportunityScore ?? b.score ?? 0) - Number(a.opportunityScore ?? a.score ?? 0);
    })
    .slice(0, 8);
}

function renderFeaturedFeed() {
  const feed = document.querySelector("#featured-feed");
  if (!feed) return;

  const counts = layerCounts(workbenchSourceItems().filter(itemMatchesSearch).filter(itemMatchesGlobalCategory));
  document.querySelector("#layer-official-count").textContent = counts.official;
  document.querySelector("#layer-candidate-count").textContent = counts.candidate;
  document.querySelector("#layer-supplemental-count").textContent = counts.supplemental;

  const items = featuredItems();
  if (!items.length) {
    feed.innerHTML = '<article class="card empty-state">当前暂无可展示招采线索。</article>';
    return;
  }
  feed.innerHTML = `
    <div class="featured-date-row">
      <button class="featured-date-button" type="button">${featuredTimelineDateLabel(items)}</button>
      <span>按时间线扫读今日重点</span>
    </div>
    <ol class="featured-timeline-list">
      ${items.map(featuredTimelineItem).join("")}
    </ol>
  `;
  bindOpportunityButtons(feed);
}

function getDailyWorkbenchItems() {
  const days = document.querySelector("#daily-window-filter")?.value || "7";
  const stage = document.querySelector("#daily-stage-filter")?.value || "";
  const region = document.querySelector("#daily-region-filter")?.value || "";
  const product = document.querySelector("#daily-product-filter")?.value || "";

  return workbenchSourceItems()
    .filter(itemMatchesSearch)
    .filter(itemMatchesGlobalCategory)
    .filter((item) => isWithinDailyWindow(item, days))
    .filter((item) => !stage || dailyStageBucket(item) === stage)
    .filter((item) => !region || item.region === region || item.region?.includes(region) || region.includes(item.region))
    .filter((item) => dailyProductMatch(item, product))
    .sort((a, b) => {
      const dateDiff = (parseNoticeDate(b)?.getTime() || 0) - (parseNoticeDate(a)?.getTime() || 0);
      if (dateDiff !== 0) return dateDiff;
      return Number(b.opportunityScore ?? b.score ?? 0) - Number(a.opportunityScore ?? a.score ?? 0);
    });
}

function renderDailyWorkbench() {
  const list = document.querySelector("#daily-workbench-list");
  const count = document.querySelector("#daily-workbench-count");
  if (!list || !count) return;

  const items = getDailyWorkbenchItems();
  count.textContent = `${items.length} 条`;
  if (!items.length) {
    list.innerHTML = `
      <div class="mini-empty-state">
        <strong>当前筛选暂无可跟进标讯</strong>
        <p>可放宽时间窗口、阶段或产品筛选；系统会继续保留候选线索供人工判断。</p>
      </div>
    `;
    return;
  }

  list.innerHTML = items.slice(0, 24).map((item) => {
    const advice = dailyFollowAdvice(item);
    const bucket = dailyStageBucket(item);
    return `
      <button class="daily-workbench-item js-open-detail" type="button" data-id="${item.id}">
        <span class="workbench-meta">${item.publishDate || "未公开"} · ${item.region} · ${stageBucketLabel(bucket)} · ${productLabel(item)}</span>
        <strong>${item.name}</strong>
        <span class="workbench-fields">${item.hospital || item.purchaser || "采购单位未公开"}｜${item.budget || item.budgetAmount || "预算未公开"}｜${item.deadline || "截止未公开"}</span>
        <em class="workbench-advice">${advice.label}：${advice.text}</em>
      </button>
    `;
  }).join("");
  bindOpportunityButtons(list);
}

function getActivityItems() {
  const days = document.querySelector("#activity-window-filter")?.value || "7";
  const stage = document.querySelector("#activity-stage-filter")?.value || "";
  const layer = document.querySelector("#activity-layer-filter")?.value || "";
  const product = document.querySelector("#activity-product-filter")?.value || "";

  return workbenchSourceItems()
    .filter(itemMatchesSearch)
    .filter(itemMatchesGlobalCategory)
    .filter((item) => isWithinDailyWindow(item, days))
    .filter((item) => !stage || dailyStageBucket(item) === stage)
    .filter((item) => !layer || opportunityLayerKey(item) === layer)
    .filter((item) => dailyProductMatch(item, product))
    .sort((a, b) => {
      const dateDiff = (parseNoticeDate(b)?.getTime() || 0) - (parseNoticeDate(a)?.getTime() || 0);
      if (dateDiff !== 0) return dateDiff;
      return Number(b.opportunityScore ?? b.score ?? 0) - Number(a.opportunityScore ?? a.score ?? 0);
    });
}

function renderActivityFeed() {
  const feed = document.querySelector("#activity-feed");
  if (!feed) return;

  const items = getActivityItems();
  if (!items.length) {
    feed.innerHTML = `
      <div class="mini-empty-state">
        <strong>当前筛选暂无动态</strong>
        <p>可放宽时间窗口、阶段、来源层级或产品筛选。</p>
      </div>
    `;
    return;
  }

  feed.innerHTML = items.slice(0, 40).map((item) => {
    const advice = dailyFollowAdvice(item);
    return `
      <button class="activity-item js-open-detail" type="button" data-id="${item.id}">
        <time>${shortDateLabel(item)}</time>
        <div>
          <p class="meta">${opportunityLayerLabel(item)} · ${stageBucketLabel(dailyStageBucket(item))} · ${productLabel(item)} · ${item.region}</p>
          <strong>${item.name}</strong>
          <span>${item.hospital || item.purchaser || "采购单位未公开"}｜${item.budget || item.budgetAmount || "预算未公开"}｜${item.deadline || "截止未公开"}</span>
          <em>${advice.label}：${advice.text}</em>
        </div>
      </button>
    `;
  }).join("");
  bindOpportunityButtons(feed);
}

function shortDateLabel(item = {}) {
  const date = parseNoticeDate(item);
  if (!date) return "未公开";
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function reportTypeLabel(type) {
  return type === "weekly" ? "周报" : type === "monthly" ? "月报" : "日报";
}

function reportPeriodLabel(period, type) {
  if (type === "monthly") {
    const [year, month] = period.key.split("-");
    return `${year} 年 ${Number(month)} 月`;
  }
  if (type === "weekly") {
    return `${period.key.slice(5).replace("-", ".")} — ${period.endKey.slice(5).replace("-", ".")}`;
  }
  const [, month, day] = period.key.split("-");
  return `${Number(month)} 月 ${Number(day)} 日`;
}

function reportOpportunityRow(item, index) {
  return `
    <section class="report-opportunity-row">
      <span class="report-row-index">${String(index + 1).padStart(2, "0")}</span>
      <div class="report-row-content">
        <div class="report-row-meta">
          <span>${opportunityLayerLabel(item)}</span>
          <span>${item.publishDate}</span>
          <span>优先级：${priorityLabel(item)}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.hospital} · ${item.region} · ${(item.products || []).join(" / ")}</p>
        <div class="report-row-actions">
          <button class="secondary-button js-open-detail" type="button" data-id="${item.id}">查看详情</button>
          ${favoriteButton(item)}
          <button class="primary-button js-mark-follow" type="button" data-id="${item.id}">加入跟进</button>
        </div>
      </div>
    </section>
  `;
}

function renderReportDocument(period) {
  const documentNode = document.querySelector("#report-document");
  if (!period) {
    documentNode.innerHTML = `
      <div class="report-empty">
        <p class="report-document-kicker">真实数据报告</p>
        <h2>当前时间段没有可核验的真实公告数据</h2>
        <p>系统不会用模拟内容补齐日报。请先等待采集完成，或到“全部招采动态”查看其他日期。</p>
      </div>`;
    return;
  }
  const counts = layerCounts(period.items);
  const priorities = period.items.slice().sort(compareDailyPriority).slice(0, 5);
  const typeLabel = reportTypeLabel(reportReaderState.type);
  documentNode.innerHTML = `
    <header class="report-document-header">
      <p class="report-document-kicker">YUNNAN MEDICAL PROCUREMENT · ${typeLabel}</p>
      <h2>${reportPeriodLabel(period, reportReaderState.type)} 招采${typeLabel}</h2>
      <p>基于本地已采集的 ${period.items.length} 条真实公告整理，优先呈现今天最值得跟进的商机。</p>
      <div class="report-summary-line">
        <span><strong>${counts.official}</strong> 官方有效</span>
        <span><strong>${counts.candidate}</strong> 医疗设备候选</span>
        <span><strong>${counts.supplemental}</strong> 补充线索</span>
      </div>
    </header>
    <section class="report-focus" aria-labelledby="report-focus-title">
      <div class="report-section-heading">
        <div><span>TOP OPPORTUNITIES</span><h2 id="report-focus-title">最值得跟进的商机</h2></div>
        <p>${priorities.length} 条重点 / 共 ${period.items.length} 条</p>
      </div>
      <div class="report-opportunity-list">${priorities.map(reportOpportunityRow).join("")}</div>
    </section>`;
  bindOpportunityButtons(documentNode);
}

function renderReportReader() {
  const today = new Date();
  const localTodayKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const periods = reportPeriodHelpers.groupPeriods(workbenchSourceItems(), reportReaderState.type, localTodayKey);
  if (!periods.some((period) => period.key === reportReaderState.key)) reportReaderState.key = periods[0]?.key || "";
  document.querySelectorAll("[data-report-type]").forEach((button) => {
    button.classList.toggle("active", button.dataset.reportType === reportReaderState.type);
  });
  const directory = document.querySelector("#report-period-list");
  directory.innerHTML = periods.length
    ? periods.map((period) => `
        <button class="report-period-button ${period.key === reportReaderState.key ? "active" : ""}" type="button" data-report-period="${period.key}">
          <span>${reportPeriodLabel(period, reportReaderState.type)}</span>
          <small>${period.items.length} 条公告</small>
        </button>`).join("")
    : '<p class="report-directory-empty">暂无可归档报告</p>';
  directory.querySelectorAll("[data-report-period]").forEach((button) => {
    button.addEventListener("click", () => {
      reportReaderState.key = button.dataset.reportPeriod;
      renderReportReader();
    });
  });
  renderReportDocument(periods.find((period) => period.key === reportReaderState.key));
}

function renderDaily() {
  renderReportReader();
}

function normalizeReportOpportunity(item) {
  const sourceUrl = item.originalOfficialUrl || item.detailUrl || item.sourceUrl || "#";
  const productTags = Array.isArray(item.productTags) ? item.productTags : [];
  const products = Array.isArray(item.products) && item.products.length > 0
    ? item.products
    : productTags.map((tag) => tag === "endo" ? "内镜" : "超声");
  return {
    id: item.id,
    dataType: item.dataType || "自动采集数据",
    name: item.title || "待识别公告",
    projectName: item.projectName || item.title || "待识别公告",
    noticeType: item.noticeType || item.stage || "待识别",
    noticeStage: item.noticeStage || "other",
    sourceSite: item.sourceName || "未公开",
    sourceType: item.sourceType || "official",
    officialAccessLevel: item.officialAccessLevel || "",
    sourcePriority: item.sourcePriority || 0,
    publishDate: item.publishDate || "未公开",
    region: item.city && item.city !== "待确认" ? item.city : item.region || "待识别",
    hospital: item.buyerName || "未公开",
    purchaser: item.purchaser || item.buyerName || "未公开",
    department: item.department || "待识别",
    stage: item.stage || "待识别",
    products: products.length > 0 ? products : ["待识别"],
    productCategory: item.productCategory || (productTags.includes("endo") && productTags.includes("ultrasound") ? "both" : productTags.includes("endo") ? "endoscopy" : productTags.includes("ultrasound") ? "ultrasound" : "other"),
    productTags,
    matchedKeywords: Array.isArray(item.matchedKeywords) ? item.matchedKeywords : [],
    budget: item.budgetAmount || item.budget || "未提取到",
    budgetAmount: item.budgetAmount || item.budget || "未提取到",
    bidOpeningTime: item.bidOpeningTime || "未提取到",
    projectLocation: item.projectLocation || item.city || item.region || "未提取到",
    signupDeadline: "未公开",
    bidDeadline: "未公开",
    deadline: item.deadline || "未提取到",
    sourceTier: item.sourceTier || "",
    opportunityScore: item.opportunityScore ?? item.score ?? "",
    followPriority: item.followPriority || "",
    scoreReason: Array.isArray(item.scoreReason) ? item.scoreReason : [],
    score: item.opportunityScore ?? item.score ?? "待评估",
    level: item.level || (item.followPriority === "high" ? "S" : item.followPriority === "medium" ? "A" : item.followPriority === "low" ? "B" : "待评估"),
    contact: item.contactInfo || item.contactPerson || "未提取到",
    phone: item.contactPhone || item.contactInfo || "未提取到",
    contactInfo: item.contactInfo || item.contactPerson || item.contactPhone || "未提取到",
    relatedToEndoscopy: productTags.length ? productTags.map((tag) => tag === "endo" ? "内镜" : "超声").join(" / ") : "待识别",
    link: sourceUrl,
    originalOfficialUrl: item.originalOfficialUrl || "",
    detailUrl: item.detailUrl || "",
    sourceUrl: item.sourceUrl || "",
    rawData: item.rawData || {},
    requiresManualCheck: Boolean(item.requiresManualCheck),
    manualCheckReason: item.manualCheckReason || "",
    fullText: item.fullText || "",
    summary: item.summary || item.aiSummary || "系统尚未生成规则摘要。",
    advice: [item.salesSuggestion || "建议人工查看原文后判断是否属于有效商机。"],
    followStatus: item.followStatus || "未跟进",
    note: "日报数据来自本地脚本自动生成，仍需人工校验。",
    timeline: [
      [item.publishDate || "未公开", "公告进入每日商机日报。"],
      [item.crawlTime || dailyReport.reportDate || "未公开", "日报脚本完成汇总。"]
    ]
  };
}

function renderReportMiniList(items, listSelector, countSelector) {
  const list = document.querySelector(listSelector);
  const normalized = items.map(normalizeReportOpportunity);
  document.querySelector(countSelector).textContent = normalized.length;
  if (normalized.length === 0) {
    list.innerHTML = emptyStageState(listSelector);
    return;
  }
  list.innerHTML = normalized.map((item) => `
    <button class="mini-item js-open-detail" type="button" data-id="${item.id}">
      <span>${item.region} · ${item.stage}</span>
      <strong>${item.name}</strong>
      <em>${priorityBadgeLabel(item)} · ${levelLabel(item.level)}</em>
    </button>
  `).join("");
  bindOpportunityButtons(list);
}

function renderStageList(group, listSelector, countSelector) {
  const items = opportunities.filter((item) => getStageGroup(item.stage) === group);
  document.querySelector(countSelector).textContent = items.length;
  if (items.length === 0) {
    document.querySelector(listSelector).innerHTML = emptyStageState(listSelector);
    return;
  }
  document.querySelector(listSelector).innerHTML = items.map((item) => `
    <button class="mini-item js-open-detail" type="button" data-id="${item.id}">
      <span>${item.region} · ${item.stage}</span>
      <strong>${item.name}</strong>
      <em>${priorityBadgeLabel(item)} · ${levelLabel(item.level)}</em>
    </button>
  `).join("");
  bindOpportunityButtons(document.querySelector(listSelector));
}

function emptyStageState(listSelector) {
  if (listSelector === "#pre-list") {
    return `
      <div class="mini-empty-state">
        <strong>今日暂无招标前机会</strong>
        <p>系统将持续监测采购意向、需求调研、院内论证等前置信息。</p>
      </div>
    `;
  }
  if (listSelector === "#award-list") {
    return `
      <div class="mini-empty-state">
        <strong>今日暂无新增中标结果</strong>
        <p>后续可用于追踪中标公司、竞品出现频率和区域覆盖。</p>
      </div>
    `;
  }
  if (listSelector === "#market-list") {
    return `
      <div class="mini-empty-state">
        <strong>今日暂无市场调研窗口</strong>
        <p>系统将单独监测需求调查、市场调研、参数论证等前置影响机会。</p>
      </div>
    `;
  }
  return `
    <div class="mini-empty-state">
      <strong>今日暂无正式招标项目</strong>
      <p>系统将继续监测采购公告、竞争性磋商和公开招标信息。</p>
    </div>
  `;
}

function setSelectOptions(selectId, options, allLabel) {
  const select = document.querySelector(selectId);
  if (!select) return;
  const prefix = allLabel ? [`<option value="">${allLabel}</option>`] : [];
  select.innerHTML = prefix
    .concat(options.map((option) => {
      const value = typeof option === "object" ? option.value : option;
      const label = typeof option === "object" ? option.label : option;
      return `<option value="${value}">${label}</option>`;
    }))
    .join("");
}

function renderDailyFilters() {
  setSelectOptions("#daily-window-filter", optionSets.dailyWindows);
  setSelectOptions("#daily-stage-filter", optionSets.dailyStages);
  setSelectOptions("#daily-region-filter", optionSets.regions, "全部地区");
  setSelectOptions("#daily-product-filter", optionSets.dailyProducts);
  const windowFilter = document.querySelector("#daily-window-filter");
  if (windowFilter) windowFilter.value = "7";
}

function renderActivityFilters() {
  setSelectOptions("#activity-window-filter", optionSets.dailyWindows);
  setSelectOptions("#activity-stage-filter", optionSets.dailyStages);
  setSelectOptions("#activity-layer-filter", optionSets.activityLayers);
  setSelectOptions("#activity-product-filter", optionSets.dailyProducts);
  const windowFilter = document.querySelector("#activity-window-filter");
  if (windowFilter) windowFilter.value = "7";
}

function renderFilters() {
  setSelectOptions("#filter-region", optionSets.regions, "全部地区");
  setSelectOptions("#filter-product", optionSets.products, "全部产品");
  setSelectOptions("#filter-stage", optionSets.stages, "全部阶段");
  setSelectOptions("#filter-level", optionSets.levels, "全部等级");
  setSelectOptions("#filter-follow", optionSets.followStatuses, "全部状态");
  setSelectOptions("#filter-data-type", optionSets.dataTypes, "全部");
}

function getFilteredOpportunities() {
  const region = document.querySelector("#filter-region").value;
  const product = document.querySelector("#filter-product").value;
  const stage = document.querySelector("#filter-stage").value;
  const level = document.querySelector("#filter-level").value;
  const follow = document.querySelector("#filter-follow").value;
  const dataType = document.querySelector("#filter-data-type").value;

  return opportunities.filter((item) => {
    const matchedRegion = !region || item.region === region || item.region.includes(region) || region.includes(item.region);
    const matchedProduct = !product || item.products.includes(product) || (product === "内镜" && item.productTags?.includes("endo")) || (product === "超声" && item.productTags?.includes("ultrasound"));
    const matchedStage = !stage || item.stage.includes(stage);
    const matchedLevel = !level || item.level === level;
    const matchedFollow = !follow || item.followStatus === follow;
    const matchedDataType = !dataType || dataTypeLabel(item) === dataType || item.dataType === dataType;
    return matchedRegion && matchedProduct && matchedStage && matchedLevel && matchedFollow && matchedDataType && itemMatchesSearch(item) && itemMatchesGlobalCategory(item);
  });
}

function renderList() {
  const filtered = getFilteredOpportunities();
  document.querySelector("#list-count").textContent = `${filtered.length} 条`;
  document.querySelector("#table-body").innerHTML = filtered.map((item) => `
    <button class="table-row table-data js-open-detail" type="button" data-id="${item.id}" role="row">
      <div class="table-name">${item.name}<small>${item.hospital}</small></div>
      <div><span class="data-type-badge ${dataTypeClass(item)}">${dataTypeLabel(item)}</span></div>
      <div>${item.region}</div>
      <div><span class="stage-badge table-stage-badge">${item.stage}</span></div>
      <div class="product-text">${item.products.join(" / ")}</div>
      <div><span class="level-badge ${levelClass(item.level)}">${levelLabel(item.level)}</span></div>
      <div><strong class="table-score">${priorityBadgeLabel(item)}</strong></div>
      <div>${item.followStatus}</div>
      <div>${item.deadline}</div>
    </button>
  `).join("");
  bindOpportunityButtons(document.querySelector("#table-body"));
}

function renderDetail() {
  const item = selectedOpportunity;
  document.querySelector("#detail-stage").textContent = item.stage;
  document.querySelector("#detail-stage-text").textContent = item.stage;
  document.querySelector("#detail-level").textContent = levelLabel(item.level);
  document.querySelector("#detail-level").className = `level-badge ${levelClass(item.level)}`;
  document.querySelector("#detail-data-type-badge").textContent = dataTypeLabel(item);
  document.querySelector("#detail-data-type-badge").className = `data-type-badge ${dataTypeClass(item)}`;
  document.querySelector("#detail-data-type").textContent = dataTypeLabel(item);
  document.querySelector("#detail-data-type-note").textContent = item.dataType === "历史公开公告样例"
    ? "历史公开公告样例仅用于产品验证，具体信息以原公告为准。"
    : "";
  document.querySelector("#detail-name").textContent = item.name;
  document.querySelector("#detail-score").textContent = priorityLabel(item);
  document.querySelector("#detail-score").className = `score-badge ${item.score === "待评估" ? "pending" : ""}`;
  document.querySelector("#detail-notice-type").textContent = item.noticeType || item.stage;
  document.querySelector("#detail-source-site").textContent = item.sourceSite || "本地模拟数据";
  document.querySelector("#detail-source-type").textContent = sourceTypeLabel(item);
  document.querySelector("#detail-publish-date").textContent = item.publishDate || "模拟日期";
  document.querySelector("#detail-hospital").textContent = item.hospital;
  document.querySelector("#detail-region").textContent = item.region;
  document.querySelector("#detail-department").textContent = item.department;
  document.querySelector("#detail-products").textContent = item.products.join(" / ");
  document.querySelector("#detail-budget").textContent = item.budget;
  document.querySelector("#detail-signup-deadline").textContent = item.signupDeadline || "未设置";
  document.querySelector("#detail-bid-deadline").textContent = item.bidDeadline || item.deadline;
  document.querySelector("#detail-deadline").textContent = item.deadline;
  document.querySelector("#detail-contact").textContent = item.contact;
  document.querySelector("#detail-phone").textContent = item.phone || "未设置";
  document.querySelector("#detail-related").textContent = item.relatedToEndoscopy || "是";
  document.querySelector("#detail-source-platform").textContent = item.sourceSite || item.sourceName || item.dataType || "未公开";
  document.querySelector("#detail-source-status").textContent = sourceStatusLabel(item);
  document.querySelector("#detail-source-hint").textContent = sourceHintText(item);
  document.querySelector("#snapshot-button").textContent = SNAPSHOT_BUTTON_LABEL;
  const detailLink = document.querySelector("#detail-link");
  const detailUrl = readableDetailActionUrl(item);
  detailLink.href = detailUrl || "#";
  detailLink.textContent = directReadableOriginalUrl(item) ? "打开原文链接" : "尝试打开官方详情";
  detailLink.hidden = !detailUrl;
  detailLink.classList.toggle("disabled", !detailUrl);
  detailLink.setAttribute("aria-disabled", detailUrl ? "false" : "true");
  const platformLink = document.querySelector("#source-platform-link");
  const platformUrl = sourcePlatformUrl(item);
  platformLink.href = platformUrl;
  platformLink.hidden = platformUrl === "#";
  platformLink.classList.toggle("disabled", platformUrl === "#");
  platformLink.setAttribute("aria-disabled", platformUrl === "#" ? "true" : "false");
  const copyTitleButton = document.querySelector("#copy-notice-title");
  const copyCodeButton = document.querySelector("#copy-project-code");
  copyTitleButton.disabled = !detailNoticeTitle(item);
  copyCodeButton.hidden = !detailProjectCode(item);
  copyCodeButton.disabled = !detailProjectCode(item);
  document.querySelector("#detail-manual-check").textContent = statusHelpers.shouldShowManualBadge(item) ? (item.manualCheckReason || statusHelpers.manualBadgeLabel(item)) : "无需人工核验";
  document.querySelector("#detail-summary").textContent = item.summary;
  document.querySelector("#detail-advice").innerHTML = item.advice.map((text) => `<li>${text}</li>`).join("");
  document.querySelector("#detail-full-text").textContent = readableNoticeText(item);
  renderSnapshotModal(item);
  document.querySelector("#detail-timeline").innerHTML = item.timeline.map(([date, text]) => `<li><time>${date}</time>${text}</li>`).join("");
  document.querySelector("#follow-status").value = item.followStatus;
  document.querySelector("#follow-note").value = item.note;
  document.querySelector("#detail-favorite").textContent = item.saved ? "取消收藏" : "收藏";
  document.querySelector("#save-toast").textContent = "";
  showCopyToast("");
}

function renderCheckOptions(containerId, options, defaults) {
  const selected = new Set(defaults);
  document.querySelector(containerId).innerHTML = options.map((option) => `
    <label class="check-item">
      <input type="checkbox" ${selected.has(option) ? "checked" : ""}>
      <span>${option}</span>
    </label>
  `).join("");
}

function updateSettingSummary() {
  const score = document.querySelector("#score-range").value;
  const time = document.querySelector("#push-time").value;
  document.querySelector("#score-value").textContent = score;
  document.querySelector("#setting-summary").textContent = `每天 ${time} 推送优先级阈值不低于 ${score} 的区域商机；优先级基于截止时间、采购阶段、产品匹配度生成。`;
}

function savedRecordCard(item) {
  const followText = item.followStatus && item.followStatus !== "未跟进" ? item.followStatus : "未跟进";
  return `
    <article class="saved-record-card">
      <div class="saved-record-copy">
        <div class="badge-row">
          <span class="stage-badge">${item.stage || item.noticeType}</span>
          <span class="saved-follow-status">${followText}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.hospital} · ${item.region} · ${(item.products || []).join(" / ")}</p>
        ${item.note ? `<p class="saved-note">备注：${item.note}</p>` : ""}
      </div>
      <div class="card-actions">
        <button class="secondary-button js-open-detail" type="button" data-id="${item.id}">查看详情</button>
        ${favoriteButton(item)}
      </div>
    </article>
  `;
}

function renderSavedPage() {
  const favorites = opportunityRecordHelpers.savedItems(opportunities, opportunityRecordState);
  const followed = opportunityRecordHelpers.followedItems(opportunities, opportunityRecordState);
  const items = savedView === "favorites" ? favorites : followed;
  document.querySelector("#saved-favorite-count").textContent = favorites.length;
  document.querySelector("#saved-follow-count").textContent = followed.length;
  document.querySelectorAll("[data-saved-view]").forEach((button) => {
    button.classList.toggle("active", button.dataset.savedView === savedView);
  });

  const container = document.querySelector("#saved-record-list");
  container.innerHTML = items.length
    ? items.map(savedRecordCard).join("")
    : `<div class="empty-panel"><span class="nav-icon">${savedView === "favorites" ? "收" : "跟"}</span><strong>${savedView === "favorites" ? "还没有收藏商机" : "还没有跟进记录"}</strong><p>可从精选、动态或商机详情中添加。</p></div>`;
  bindOpportunityButtons(container);
}

function selectedSettingValues(containerId) {
  return [...document.querySelectorAll(`${containerId} .check-item`)]
    .filter((label) => label.querySelector("input")?.checked)
    .map((label) => label.querySelector("span")?.textContent.trim())
    .filter(Boolean);
}

function subscriptionStatus(message) {
  document.querySelector("#subscription-status").textContent = message;
}

function renderSubscriptions() {
  const container = document.querySelector("#subscription-list");
  if (!subscriptionRules.length) {
    container.innerHTML = '<p class="empty">暂无订阅。选择上方条件后点击“新增订阅”。</p>';
    return;
  }
  container.innerHTML = subscriptionRules.map((rule) => `
    <article class="subscription-rule" data-subscription-id="${rule.id}">
      <div>
        <strong>${rule.regions.join("、") || "全部地区"} · ${rule.products.join("、") || "全部产品"}</strong>
        <p>${rule.stages.join("、") || "全部阶段"}｜${rule.channels.join("、") || "未选渠道"}｜每天 ${rule.pushTime || "未设置"}｜最低 ${rule.minimumScore}</p>
      </div>
      <button class="secondary-button js-cancel-subscription" type="button" data-id="${rule.id}">取消订阅</button>
    </article>
  `).join("");
  container.querySelectorAll(".js-cancel-subscription").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.confirm !== "true") {
        button.dataset.confirm = "true";
        button.textContent = "确认取消";
        subscriptionStatus("再次点击“确认取消”即可删除这条本地订阅。");
        return;
      }
      cancelSubscription(button.dataset.id);
    });
  });
}

function persistSubscriptions(successMessage) {
  const result = subscriptionHelpers.save(localStorage, subscriptionRules);
  subscriptionStorageAvailable = result.persisted;
  subscriptionStatus(result.persisted
    ? `${successMessage} 已保存到当前浏览器，尚未同步云端邮件系统。`
    : `${successMessage} 本次会话有效，浏览器拒绝本地存储，刷新后可能丢失。`);
}

function addCurrentSubscription() {
  const input = {
    regions: selectedSettingValues("#region-options"),
    products: selectedSettingValues("#product-options"),
    stages: selectedSettingValues("#stage-options"),
    channels: selectedSettingValues("#channel-options"),
    minimumScore: document.querySelector("#score-range").value,
    pushTime: document.querySelector("#push-time").value
  };
  if (![input.regions, input.products, input.stages, input.channels].some((values) => values.length)) {
    subscriptionStatus("请至少选择一个地区、产品、阶段或推送渠道。");
    return;
  }
  const result = subscriptionHelpers.addRule(subscriptionRules, input);
  subscriptionRules = result.rules;
  renderSubscriptions();
  if (!result.added) {
    subscriptionStatus("相同订阅已经存在，没有重复新增。");
    return;
  }
  persistSubscriptions("订阅已新增。");
}

function cancelSubscription(id) {
  const result = subscriptionHelpers.removeRule(subscriptionRules, id);
  subscriptionRules = result.rules;
  renderSubscriptions();
  if (result.removed) persistSubscriptions("订阅已取消。");
}

function activePageName() {
  return Object.entries(pages).find(([, page]) => page?.classList.contains("active"))?.[0] || "featured";
}

function refreshSearchableViews() {
  renderFeaturedFeed();
  renderActivityFeed();
  renderDailyWorkbench();
  renderList();
}

function applyGlobalSearch(event) {
  if (event) event.preventDefault();
  const input = document.querySelector("#global-search-input");
  globalSearchQuery = input ? input.value : "";
  refreshSearchableViews();

  const searchablePages = new Set(["featured", "activity", "daily", "list"]);
  if (currentSearchQuery() && !searchablePages.has(activePageName())) {
    showPage("activity");
  }
}

function applyGlobalCategoryFilter(category) {
  globalCategoryFilter = category || "";
  document.querySelectorAll("[data-global-category]").forEach((button) => {
    const isActive = button.dataset.globalCategory === globalCategoryFilter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  refreshSearchableViews();
}

function bindEvents() {
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => showPage(item.dataset.page));
  });

  document.querySelectorAll("[data-mobile-page]").forEach((item) => {
    item.addEventListener("click", () => showPage(item.dataset.mobilePage));
  });

  document.querySelectorAll("[data-more-page]").forEach((item) => {
    item.addEventListener("click", () => showPage(item.dataset.morePage));
  });

  document.querySelectorAll("[data-jump-list]").forEach((button) => {
    button.addEventListener("click", () => showPage("list"));
  });

  document.querySelectorAll("[data-jump-activity]").forEach((button) => {
    button.addEventListener("click", () => showPage("activity"));
  });

  document.querySelector("#back-to-list").addEventListener("click", returnFromDetail);

  document.querySelector("#snapshot-button").addEventListener("click", openSnapshotModal);
  document.querySelector("#snapshot-close").addEventListener("click", closeSnapshotModal);
  document.querySelector("[data-close-snapshot]").addEventListener("click", closeSnapshotModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !document.querySelector("#snapshot-modal").hidden) {
      closeSnapshotModal();
    }
  });

  document.querySelector("#copy-notice-title").addEventListener("click", () => copyDetailField("title"));
  document.querySelector("#copy-project-code").addEventListener("click", () => copyDetailField("code"));

  document.querySelector("#save-follow").addEventListener("click", () => {
    persistOpportunityPatch(selectedOpportunity, {
      followStatus: document.querySelector("#follow-status").value,
      note: document.querySelector("#follow-note").value
    });
    document.querySelector("#save-toast").textContent = opportunityRecordStorageAvailable
      ? "已保存到当前浏览器。"
      : "浏览器存储不可用，仅在本次页面会话保留。";
    renderDaily();
    renderList();
  });

  document.querySelector("#detail-favorite").addEventListener("click", () => {
    persistOpportunityPatch(selectedOpportunity, { saved: !selectedOpportunity.saved });
    renderDetail();
    document.querySelector("#save-toast").textContent = opportunityRecordStorageAvailable
      ? (selectedOpportunity.saved ? "已收藏到当前浏览器。" : "已取消收藏。")
      : "浏览器存储不可用，仅在本次页面会话保留。";
  });

  document.querySelectorAll("[data-saved-view]").forEach((button) => {
    button.addEventListener("click", () => {
      savedView = button.dataset.savedView;
      renderSavedPage();
    });
  });

  document.querySelectorAll("[data-report-type]").forEach((button) => {
    button.addEventListener("click", () => {
      reportReaderState.type = button.dataset.reportType;
      reportReaderState.key = "";
      renderReportReader();
    });
  });

  ["#filter-region", "#filter-product", "#filter-stage", "#filter-level", "#filter-follow", "#filter-data-type"].forEach((selector) => {
    document.querySelector(selector).addEventListener("change", renderList);
  });

  ["#daily-window-filter", "#daily-stage-filter", "#daily-region-filter", "#daily-product-filter"].forEach((selector) => {
    const control = document.querySelector(selector);
    if (control) control.addEventListener("change", renderDailyWorkbench);
  });

  ["#activity-window-filter", "#activity-stage-filter", "#activity-layer-filter", "#activity-product-filter"].forEach((selector) => {
    const control = document.querySelector(selector);
    if (control) control.addEventListener("change", renderActivityFeed);
  });

  const globalSearchForm = document.querySelector(".global-search");
  const globalSearchInput = document.querySelector("#global-search-input");
  const globalSearchButton = document.querySelector("#global-search-button");
  if (globalSearchForm) globalSearchForm.addEventListener("submit", applyGlobalSearch);
  if (globalSearchButton && !globalSearchForm) globalSearchButton.addEventListener("click", applyGlobalSearch);
  if (globalSearchInput) {
    globalSearchInput.addEventListener("input", () => {
      globalSearchQuery = globalSearchInput.value;
      refreshSearchableViews();
    });
  }

  document.querySelectorAll("[data-global-category]").forEach((button) => {
    button.addEventListener("click", () => applyGlobalCategoryFilter(button.dataset.globalCategory));
  });

  document.querySelector("#reset-filters").addEventListener("click", () => {
    ["#filter-region", "#filter-product", "#filter-stage", "#filter-level", "#filter-follow", "#filter-data-type"].forEach((selector) => {
      document.querySelector(selector).value = "";
    });
    renderList();
  });

  document.querySelector("#score-range").addEventListener("input", updateSettingSummary);
  document.querySelector("#push-time").addEventListener("input", updateSettingSummary);

  document.querySelector("#add-subscription").addEventListener("click", addCurrentSubscription);

  const exportDailyButton = document.querySelector("#export-daily");
  if (exportDailyButton) {
    exportDailyButton.addEventListener("click", () => {
      alert("当前为前端 MVP，导出动作已模拟。");
    });
  }
}

renderDailyFilters();
renderActivityFilters();
renderFilters();
renderFeaturedFeed();
renderActivityFeed();
renderDaily();
renderList();
renderDetail();
renderCheckOptions("#region-options", optionSets.regions, ["昆明市", "曲靖市", "玉溪市", "红河州", "大理州", "保山市"]);
renderCheckOptions("#product-options", optionSets.products, ["内镜", "超声", "电子胃镜", "彩色多普勒超声"]);
renderCheckOptions("#stage-options", optionSets.stages, ["采购意向", "市场调研", "产品征询", "招标公告", "中标公告"]);
renderCheckOptions("#channel-options", optionSets.channels, ["邮件"]);
updateSettingSummary();
renderSubscriptions();
if (!subscriptionStorageAvailable) subscriptionStatus("浏览器本地存储当前不可用；新增订阅仅在本次会话有效。");
bindEvents();
