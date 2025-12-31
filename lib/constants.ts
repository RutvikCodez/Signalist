import z from "zod/v3";

export const NAV_ITEMS = [
  { href: "/", label: "Dashboard" },
  { href: "/search", label: "Search" },
  // { href: '/watchlist', label: 'Watchlist' },
];

// Sign-up form select options
export const INVESTMENT_GOALS = [
  { value: "Growth", label: "Growth" },
  { value: "Income", label: "Income" },
  { value: "Balanced", label: "Balanced" },
  { value: "Conservative", label: "Conservative" },
];

export const RISK_TOLERANCE_OPTIONS = [
  { value: "Low", label: "Low" },
  { value: "Medium", label: "Medium" },
  { value: "High", label: "High" },
];

export const PREFERRED_INDUSTRIES = [
  { value: "Technology", label: "Technology" },
  { value: "Healthcare", label: "Healthcare" },
  { value: "Finance", label: "Finance" },
  { value: "Energy", label: "Energy" },
  { value: "Consumer Goods", label: "Consumer Goods" },
];

export const ALERT_TYPE_OPTIONS = [
  { value: "upper", label: "Upper" },
  { value: "lower", label: "Lower" },
];

export const CONDITION_OPTIONS = [
  { value: "greater", label: "Greater than (>)" },
  { value: "less", label: "Less than (<)" },
];

// TradingView Charts
const MARKET_OVERVIEW_WIDGET_CONFIG = {
  colorTheme: "dark", // dark mode
  dateRange: "12M", // last 12 months
  locale: "en", // language
  largeChartUrl: "", // link to a large chart if needed
  isTransparent: true, // makes background transparent
  showFloatingTooltip: true, // show tooltip on hover
  plotLineColorGrowing: "#0FEDBE", // line color when price goes up
  plotLineColorFalling: "#0FEDBE", // line color when price falls
  gridLineColor: "rgba(240, 243, 250, 0)", // grid line color
  scaleFontColor: "#DBDBDB", // font color for scale
  belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)", // fill under line when growing
  belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)", // fill under line when falling
  belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
  belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
  symbolActiveColor: "rgba(15, 237, 190, 0.05)", // highlight color for active symbol
  tabs: [
    {
      title: "Financial",
      symbols: [
        { s: "NYSE:JPM", d: "JPMorgan Chase" },
        { s: "NYSE:WFC", d: "Wells Fargo Co New" },
        { s: "NYSE:BAC", d: "Bank Amer Corp" },
        { s: "NYSE:HSBC", d: "Hsbc Hldgs Plc" },
        { s: "NYSE:C", d: "Citigroup Inc" },
        { s: "NYSE:MA", d: "Mastercard Incorporated" },
      ],
    },
    {
      title: "Technology",
      symbols: [
        { s: "NASDAQ:AAPL", d: "Apple" },
        { s: "NASDAQ:GOOGL", d: "Alphabet" },
        { s: "NASDAQ:MSFT", d: "Microsoft" },
        { s: "NASDAQ:FB", d: "Meta Platforms" },
        { s: "NYSE:ORCL", d: "Oracle Corp" },
        { s: "NASDAQ:INTC", d: "Intel Corp" },
      ],
    },
    {
      title: "Services",
      symbols: [
        { s: "NASDAQ:AMZN", d: "Amazon" },
        { s: "NYSE:BABA", d: "Alibaba Group Hldg Ltd" },
        { s: "NYSE:T", d: "At&t Inc" },
        { s: "NYSE:WMT", d: "Walmart" },
        { s: "NYSE:V", d: "Visa" },
      ],
    },
  ],
  support_host: "https://www.tradingview.com", // TradingView host
  backgroundColor: "#141414", // background color
  width: "100%", // full width
  height: 600, // height in px
  showSymbolLogo: true, // show logo next to symbols
  showChart: true, // display mini chart
};

const HEATMAP_WIDGET_CONFIG = {
  dataSource: "SPX500",
  blockSize: "market_cap_basic",
  blockColor: "change",
  grouping: "sector",
  isTransparent: true,
  locale: "en",
  symbolUrl: "",
  colorTheme: "dark",
  exchanges: [],
  hasTopBar: false,
  isDataSetEnabled: false,
  isZoomEnabled: true,
  hasSymbolTooltip: true,
  isMonoSize: false,
  width: "100%",
  height: "600",
};

const TOP_STORIES_WIDGET_CONFIG = {
  displayMode: "regular",
  feedMode: "market",
  colorTheme: "dark",
  isTransparent: true,
  locale: "en",
  market: "stock",
  width: "100%",
  height: "600",
};

const MARKET_DATA_WIDGET_CONFIG = {
  title: "Stocks",
  width: "100%",
  height: 600,
  locale: "en",
  showSymbolLogo: true,
  colorTheme: "dark",
  isTransparent: false,
  backgroundColor: "#0F0F0F",
  symbolsGroups: [
    {
      name: "Financial",
      symbols: [
        { name: "NYSE:JPM", displayName: "JPMorgan Chase" },
        { name: "NYSE:WFC", displayName: "Wells Fargo Co New" },
        { name: "NYSE:BAC", displayName: "Bank Amer Corp" },
        { name: "NYSE:HSBC", displayName: "Hsbc Hldgs Plc" },
        { name: "NYSE:C", displayName: "Citigroup Inc" },
        { name: "NYSE:MA", displayName: "Mastercard Incorporated" },
      ],
    },
    {
      name: "Technology",
      symbols: [
        { name: "NASDAQ:AAPL", displayName: "Apple" },
        { name: "NASDAQ:GOOGL", displayName: "Alphabet" },
        { name: "NASDAQ:MSFT", displayName: "Microsoft" },
        { name: "NASDAQ:FB", displayName: "Meta Platforms" },
        { name: "NYSE:ORCL", displayName: "Oracle Corp" },
        { name: "NASDAQ:INTC", displayName: "Intel Corp" },
      ],
    },
    {
      name: "Services",
      symbols: [
        { name: "NASDAQ:AMZN", displayName: "Amazon" },
        { name: "NYSE:BABA", displayName: "Alibaba Group Hldg Ltd" },
        { name: "NYSE:T", displayName: "At&t Inc" },
        { name: "NYSE:WMT", displayName: "Walmart" },
        { name: "NYSE:V", displayName: "Visa" },
      ],
    },
  ],
};

export const SYMBOL_INFO_WIDGET_CONFIG = (symbol: string) => ({
  symbol: symbol.toUpperCase(),
  colorTheme: "dark",
  isTransparent: true,
  locale: "en",
  width: "100%",
  height: 170,
});

export const CANDLE_CHART_WIDGET_CONFIG = (symbol: string) => ({
  allow_symbol_change: false,
  calendar: false,
  details: true,
  hide_side_toolbar: true,
  hide_top_toolbar: false,
  hide_legend: false,
  hide_volume: false,
  hotlist: false,
  interval: "D",
  locale: "en",
  save_image: false,
  style: 1,
  symbol: symbol.toUpperCase(),
  theme: "dark",
  timezone: "Etc/UTC",
  backgroundColor: "#141414",
  gridColor: "#141414",
  watchlist: [],
  withdateranges: false,
  compareSymbols: [],
  studies: [],
  width: "100%",
  height: 600,
});

export const BASELINE_WIDGET_CONFIG = (symbol: string) => ({
  allow_symbol_change: false,
  calendar: false,
  details: false,
  hide_side_toolbar: true,
  hide_top_toolbar: false,
  hide_legend: false,
  hide_volume: false,
  hotlist: false,
  interval: "D",
  locale: "en",
  save_image: false,
  style: 10,
  symbol: symbol.toUpperCase(),
  theme: "dark",
  timezone: "Etc/UTC",
  backgroundColor: "#141414",
  gridColor: "#141414",
  watchlist: [],
  withdateranges: false,
  compareSymbols: [],
  studies: [],
  width: "100%",
  height: 600,
});

export const TECHNICAL_ANALYSIS_WIDGET_CONFIG = (symbol: string) => ({
  symbol: symbol.toUpperCase(),
  colorTheme: "dark",
  isTransparent: "true",
  locale: "en",
  width: "100%",
  height: 400,
  interval: "1h",
  largeChartUrl: "",
});

export const COMPANY_PROFILE_WIDGET_CONFIG = (symbol: string) => ({
  symbol: symbol.toUpperCase(),
  colorTheme: "dark",
  isTransparent: "true",
  locale: "en",
  width: "100%",
  height: 440,
});

export const COMPANY_FINANCIALS_WIDGET_CONFIG = (symbol: string) => ({
  symbol: symbol.toUpperCase(),
  colorTheme: "dark",
  isTransparent: "true",
  locale: "en",
  width: "100%",
  height: 464,
  displayMode: "regular",
  largeChartUrl: "",
});

export const POPULAR_STOCK_SYMBOLS = [
  // Tech Giants (the big technology companies)
  "AAPL",
  "MSFT",
  "GOOGL",
  "AMZN",
  "TSLA",
  "META",
  "NVDA",
  "NFLX",
  "ORCL",
  "CRM",

  // Growing Tech Companies
  "ADBE",
  "INTC",
  "AMD",
  "PYPL",
  "UBER",
  "ZOOM",
  "SPOT",
  "SQ",
  "SHOP",
  "ROKU",

  // Newer Tech Companies
  "SNOW",
  "PLTR",
  "COIN",
  "RBLX",
  "DDOG",
  "CRWD",
  "NET",
  "OKTA",
  "TWLO",
  "ZM",

  // Consumer & Delivery Apps
  "DOCU",
  "PTON",
  "PINS",
  "SNAP",
  "LYFT",
  "DASH",
  "ABNB",
  "RIVN",
  "LCID",
  "NIO",

  // International Companies
  "XPEV",
  "LI",
  "BABA",
  "JD",
  "PDD",
  "TME",
  "BILI",
  "DIDI",
  "GRAB",
  "SE",
];

export const NO_MARKET_NEWS =
  '<p class="mobile-text" style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:#4b5563;">No market news available today. Please check back tomorrow.</p>';

export const WATCHLIST_TABLE_HEADER = [
  "Company",
  "Symbol",
  "Price",
  "Change",
  "Market Cap",
  "P/E Ratio",
  "Alert",
  "Action",
];

export const WIDGETS = [
  {
    title: "Market Overview",
    script: "market-overview.js",
    config: MARKET_OVERVIEW_WIDGET_CONFIG,
    className: "custom-chart",
  },
  {
    title: "Stock Heatmap",
    script: "stock-heatmap.js",
    config: HEATMAP_WIDGET_CONFIG,
    wrapperClassname: "xl:col-span-2",
  },
  {
    script: "timeline.js",
    config: TOP_STORIES_WIDGET_CONFIG,
  },
  {
    script: "market-quotes.js",
    config: MARKET_DATA_WIDGET_CONFIG,
    wrapperClassname: "xl:col-span-2",
  },
];

export const signUPFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full Name must be at least 2 characters."),

  email: z.string().trim().email("Invalid email address."),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter.")
    .regex(/[0-9]/, "Must contain at least one number."),

  investmentGoals: z.string({
    required_error: "Investment Goals is required!",
  }),

  riskTolerance: z.string({
    required_error: "Risk Tolerance is required!",
  }),

  preferredIndustry: z.string({
    required_error: "Preferred Industry is required!",
  }),

  country: z.string({
    required_error: "Country is required!",
  }),
});

export const signUpSelectFields = [
  {
    name: "investmentGoals",
    label: "Investment Goals",
    placeholder: "Select your investment goal",
    options: INVESTMENT_GOALS,
  },
  {
    name: "riskTolerance",
    label: "Risk Tolerance",
    placeholder: "Select your risk level",
    options: RISK_TOLERANCE_OPTIONS,
  },
  {
    name: "preferredIndustry",
    label: "Preferred Industry",
    placeholder: "Select your preferred industry",
    options: PREFERRED_INDUSTRIES,
  },
] as const;

export const signUpInputFields = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "John Doe",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "contact@jsmastery.com",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter a strong password",
    type: "password",
  },
] as const;

export const signInFormSchema = z.object({
  email: z.string().trim().email("Invalid email address."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter.")
    .regex(/[0-9]/, "Must contain at least one number."),
});

export const signInInputFields = [
  {
    name: "email",
    label: "Email",
    placeholder: "contact@jsmastery.com",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter a strong password",
    type: "password",
  },
] as const;