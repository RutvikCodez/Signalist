import TradingViewWidget from "@/components/TradingViewWidget";
import { WIDGETS } from "@/lib/constants";

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
