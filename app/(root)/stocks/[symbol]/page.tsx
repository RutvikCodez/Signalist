import TradingViewWidget from "@/components/TradingViewWidget";
import {
  BASELINE_WIDGET_CONFIG,
  CANDLE_CHART_WIDGET_CONFIG,
  COMPANY_FINANCIALS_WIDGET_CONFIG,
  SYMBOL_INFO_WIDGET_CONFIG,
  TECHNICAL_ANALYSIS_WIDGET_CONFIG,
} from "@/lib/constants";

const Page = async ({ params }: StockDetailsPageProps) => {
  const { symbol } = await params;
  const leftWidgets = [
    {
      script: "symbol-info.js",
      config: SYMBOL_INFO_WIDGET_CONFIG(symbol),
      height: 170,
    },
    {
      script: "advanced-chart.js",
      config: CANDLE_CHART_WIDGET_CONFIG(symbol),
      height: 600,
    },
    {
      script: "advanced-chart.js",
      config: BASELINE_WIDGET_CONFIG(symbol),
      height: 600,
    },
  ];

  const rightWidgets = [
    {
      script: "technical-analysis.js",
      config: TECHNICAL_ANALYSIS_WIDGET_CONFIG(symbol),
      height: 400,
    },
    {
      script: "financials.js",
      config: COMPANY_FINANCIALS_WIDGET_CONFIG(symbol),
      height: 464,
    },
  ];
  const baseUrl =
    "https://s3.tradingview.com/external-embedding/embed-widget-";


  return (
    <div className="flex min-h-screen p-4 md:p-6 lg:p-8">
      <section className="grid grid-cols-2 max-md:grid-cols-1 w-full gap-8">
        <div className="flex flex-col gap-6">
          {leftWidgets.map((w, i) => (
            <TradingViewWidget
              key={i}
              scriptUrl={`${baseUrl}${w.script}`}
              config={w.config}
              height={w.height}
              className="h-fit custom-chart"
            />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {rightWidgets.map((w, i) => (
            <TradingViewWidget
              key={i}
              scriptUrl={`${baseUrl}${w.script}`}
              config={w.config}
              height={w.height}
              className="h-fit custom-chart"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
