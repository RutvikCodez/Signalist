import TradingViewWidget from "@/components/TradingViewWidget";
import {
  BASELINE_WIDGET_CONFIG,
  CANDLE_CHART_WIDGET_CONFIG,
  COMPANY_FINANCIALS_WIDGET_CONFIG,
  SYMBOL_INFO_WIDGET_CONFIG,
  TECHNICAL_ANALYSIS_WIDGET_CONFIG,
} from "@/lib/constants";
import { Metadata } from "next";

export async function generateMetadata(
  { params }: StockDetailsPageProps
): Promise<Metadata> {
  const { symbol } = await params;
  const SYMBOL = symbol.toUpperCase();

  const title = `${SYMBOL} Stock Price, Charts, Technical Analysis & Financials`;
  const description = `Track live ${SYMBOL} stock price with real-time candlestick charts, technical indicators, company financials, and AI-powered market insights on Signalist.`;

  return {
    title,
    description,
    keywords: [
      `${SYMBOL} stock price`,
      `${SYMBOL} live chart`,
      `${SYMBOL} technical analysis`,
      `${SYMBOL} financials`,
      `${SYMBOL} stock alerts`,
      "AI stock analysis",
      "real time stock market data",
    ],
    alternates: {
      canonical: `https://signalist-nu.vercel.app/stocks/${symbol.toLowerCase()}`,
    },
    openGraph: {
      title,
      description,
      url: `https://signalist-nu.vercel.app/stocks/${symbol.toLowerCase()}`,
      siteName: "Signalist",
      images: [
        {
          url: "/readme/hero.webp",
          width: 1200,
          height: 630,
          alt: `${SYMBOL} Stock Charts & Analysis`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/readme/hero.webp"],
    },
  };
}

/* =========================
   PAGE COMPONENT
========================= */
const Page = async ({ params }: StockDetailsPageProps) => {
  const { symbol } = await params;
  const SYMBOL = symbol.toUpperCase();

  const baseUrl =
    "https://s3.tradingview.com/external-embedding/embed-widget-";

  const leftWidgets = [
    {
      script: "symbol-info.js",
      config: SYMBOL_INFO_WIDGET_CONFIG(SYMBOL),
      height: 170,
    },
    {
      script: "advanced-chart.js",
      config: CANDLE_CHART_WIDGET_CONFIG(SYMBOL),
      height: 600,
    },
    {
      script: "advanced-chart.js",
      config: BASELINE_WIDGET_CONFIG(SYMBOL),
      height: 600,
    },
  ];

  const rightWidgets = [
    {
      script: "technical-analysis.js",
      config: TECHNICAL_ANALYSIS_WIDGET_CONFIG(SYMBOL),
      height: 400,
    },
    {
      script: "financials.js",
      config: COMPANY_FINANCIALS_WIDGET_CONFIG(SYMBOL),
      height: 464,
    },
  ];

  return (
    <div className="flex min-h-screen p-4 md:p-6 lg:p-8">
      {/* SEO REQUIRED H1 */}
      <h1 className="sr-only">
        {SYMBOL} Stock Price, Charts, Technical Analysis & Financials
      </h1>

      <section className="grid grid-cols-2 max-md:grid-cols-1 w-full gap-8">
        {/* LEFT COLUMN */}
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

        {/* RIGHT COLUMN */}
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
