export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/dashboard", "/watchlist"] },
    ],
    sitemap: "https://signalist-nu.vercel.app/sitemap.xml",
  };
}
