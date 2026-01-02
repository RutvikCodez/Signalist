import TradingViewWidget from "@/components/TradingViewWidget";
import { WIDGETS } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Stock Market Dashboard | AI Alerts & Charts - Signalist",
  description:
    "Track live stock market data with real-time charts, technical analysis, company financials, and AI-powered alerts. Signalist helps investors monitor markets smarter.",
  keywords: [
    "live stock market dashboard",
    "real time stock charts",
    "AI stock alerts",
    "stock technical analysis",
    "market insights app",
    "TradingView stock charts",
    "stock watchlist app",
  ],
  alternates: {
    canonical: "https://signalist-nu.vercel.app",
  },
  openGraph: {
    title: "Signalist - Live Stock Market Dashboard & AI Alerts",
    description:
      "Real-time stock charts, technical indicators, market insights, and AI-powered alerts — all in one modern dashboard.",
    url: "https://signalist-nu.vercel.app",
    siteName: "Signalist",
    images: [
      {
        url: "/readme/hero.webp",
        width: 1200,
        height: 630,
        alt: "Signalist Stock Market Dashboard",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signalist - AI Stock Alerts & Live Charts",
    description:
      "Monitor stock markets in real time with AI alerts, TradingView charts, and deep financial insights.",
    images: ["/readme/hero.webp"],
  },
};

const Home = () => {
  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8 grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1">
        {WIDGETS.map((widget, index) => (
          <TradingViewWidget
            key={index}
            title={widget.title}
            scriptUrl={`https://s3.tradingview.com/external-embedding/embed-widget-${widget.script}`}
            config={widget.config}
            className={widget.className}
            wrapperClassname={widget.wrapperClassname}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
