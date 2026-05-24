import type { MoroccoLocale, PartnershipContent } from "@/schemas/landing";

const dashboardCopy = {
  en: {
    badge: "Affiliate dashboard",
    title: "Morocco performance overview",
    chartLabel: "Weekly volume",
    mixLabel: "Source mix",
    funnelLabel: "Conversion pipeline",
    tableLabel: "Recent activity",
    sourceLabel: "Source",
    signupsLabel: "Signups",
    rateLabel: "Rate",
    statusLabel: "Status",
    liveStatus: "Live",
    pendingStatus: "Warming",
    funnelSteps: ["Clicks", "Registrations", "Deposits"],
    sourceMix: [
      { label: "Telegram", value: "42%", width: "42%" },
      { label: "TikTok", value: "31%", width: "31%" },
      { label: "Local agents", value: "27%", width: "27%" },
    ],
    activityRows: [
      { source: "Telegram", signups: "148", rate: "+12%", status: "Live" },
      { source: "TikTok", signups: "96", rate: "+9%", status: "Live" },
      { source: "Local agents", signups: "58", rate: "+6%", status: "Warming" },
    ],
  },
  fr: {
    badge: "Tableau d'affiliation",
    title: "Vue performance Maroc",
    chartLabel: "Volume hebdo",
    mixLabel: "Mix des sources",
    funnelLabel: "Pipeline conversion",
    tableLabel: "Activite recente",
    sourceLabel: "Source",
    signupsLabel: "Inscriptions",
    rateLabel: "Taux",
    statusLabel: "Statut",
    liveStatus: "Live",
    pendingStatus: "En chauffe",
    funnelSteps: ["Clics", "Inscriptions", "Depots"],
    sourceMix: [
      { label: "Telegram", value: "42%", width: "42%" },
      { label: "TikTok", value: "31%", width: "31%" },
      { label: "Agents locaux", value: "27%", width: "27%" },
    ],
    activityRows: [
      { source: "Telegram", signups: "148", rate: "+12%", status: "Live" },
      { source: "TikTok", signups: "96", rate: "+9%", status: "Live" },
      { source: "Agents locaux", signups: "58", rate: "+6%", status: "En chauffe" },
    ],
  },
  ar: {
    badge: "لوحة الشراكة",
    title: "نظرة اداء المغرب",
    chartLabel: "حجم الاسبوع",
    mixLabel: "توزيع المصادر",
    funnelLabel: "مسار التحويل",
    tableLabel: "نشاط حديث",
    sourceLabel: "المصدر",
    signupsLabel: "التسجيلات",
    rateLabel: "النسبة",
    statusLabel: "الحالة",
    liveStatus: "مباشر",
    pendingStatus: "قيد التسخين",
    funnelSteps: ["النقرات", "التسجيلات", "الايداعات"],
    sourceMix: [
      { label: "تيليجرام", value: "42%", width: "42%" },
      { label: "تيك توك", value: "31%", width: "31%" },
      { label: "وكلاء محليون", value: "27%", width: "27%" },
    ],
    activityRows: [
      { source: "تيليجرام", signups: "148", rate: "+12%", status: "مباشر" },
      { source: "تيك توك", signups: "96", rate: "+9%", status: "مباشر" },
      { source: "وكلاء محليون", signups: "58", rate: "+6%", status: "قيد التسخين" },
    ],
  },
} as const satisfies Record<MoroccoLocale, unknown>;

const chartBars = [36, 54, 48, 68, 60, 82, 92];
const chartLabels = ["1", "2", "3", "4", "5", "6", "7"];

export default function AffiliateDashboardStage({
  locale,
  stats,
}: {
  locale: MoroccoLocale;
  stats: PartnershipContent["hero"]["stats"];
}) {
  const copy = dashboardCopy[locale];
  const isRtl = locale === "ar";
  const funnelWidths = ["100%", "71%", "43%"];

  return (
    <div className="affiliate-dashboard" dir={isRtl ? "rtl" : "ltr"}>
      <div className="affiliate-dashboard__topbar">
        <div>
          <p className="affiliate-dashboard__badge">{copy.badge}</p>
          <h3 className="affiliate-dashboard__title">{copy.title}</h3>
        </div>
        <div className="affiliate-dashboard__status">
          <span className="affiliate-dashboard__status-dot" aria-hidden />
          <span>{copy.liveStatus}</span>
        </div>
      </div>

      <div className="affiliate-dashboard__overview">
        {stats.map((stat) => (
          <div key={stat.label} className="affiliate-dashboard__overview-card">
            <p className="affiliate-dashboard__overview-value">{stat.value}</p>
            <p className="affiliate-dashboard__overview-label">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="affiliate-dashboard__grid">
        <div className="affiliate-dashboard__panel affiliate-dashboard__panel--chart">
          <div className="affiliate-dashboard__panel-head">
            <p className="affiliate-dashboard__panel-label">{copy.chartLabel}</p>
            <span className="affiliate-dashboard__panel-trend">+18%</span>
          </div>

          <div className="affiliate-dashboard__chart">
            <div className="affiliate-dashboard__chart-lines" aria-hidden>
              <span />
              <span />
              <span />
            </div>

            <div className="affiliate-dashboard__bars" aria-hidden>
              {chartBars.map((height, index) => (
                <div key={`${height}-${index}`} className="affiliate-dashboard__bar-wrap">
                  <span className="affiliate-dashboard__bar" style={{ height: `${height}%` }} />
                </div>
              ))}
            </div>

            <div className="affiliate-dashboard__axis">
              {chartLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="affiliate-dashboard__stack">
          <div className="affiliate-dashboard__panel">
            <p className="affiliate-dashboard__panel-label">{copy.mixLabel}</p>
            <div className="affiliate-dashboard__mix-list">
              {copy.sourceMix.map((item) => (
                <div key={item.label} className="affiliate-dashboard__mix-item">
                  <div className="affiliate-dashboard__mix-meta">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="affiliate-dashboard__mix-track">
                    <span className="affiliate-dashboard__mix-fill" style={{ width: item.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="affiliate-dashboard__panel">
            <p className="affiliate-dashboard__panel-label">{copy.funnelLabel}</p>
            <div className="affiliate-dashboard__funnel">
              {copy.funnelSteps.map((label, index) => (
                <div key={label} className="affiliate-dashboard__funnel-row">
                  <span className="affiliate-dashboard__funnel-label">{label}</span>
                  <span className="affiliate-dashboard__funnel-track">
                    <span className="affiliate-dashboard__funnel-fill" style={{ width: funnelWidths[index] }} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="affiliate-dashboard__panel affiliate-dashboard__panel--table">
        <div className="affiliate-dashboard__panel-head">
          <p className="affiliate-dashboard__panel-label">{copy.tableLabel}</p>
          <span className="affiliate-dashboard__panel-trend">24/7</span>
        </div>

        <div className="affiliate-dashboard__table">
          <div className="affiliate-dashboard__table-head">
            <span>{copy.sourceLabel}</span>
            <span>{copy.signupsLabel}</span>
            <span>{copy.rateLabel}</span>
            <span>{copy.statusLabel}</span>
          </div>

          {copy.activityRows.map((row) => (
            <div key={`${row.source}-${row.signups}`} className="affiliate-dashboard__table-row">
              <span>{row.source}</span>
              <span>{row.signups}</span>
              <span>{row.rate}</span>
              <span
                className={
                  row.status === copy.liveStatus
                    ? "affiliate-dashboard__table-status affiliate-dashboard__table-status--live"
                    : "affiliate-dashboard__table-status"
                }
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
