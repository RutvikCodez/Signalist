import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Signalist",
  description:
    "Sign in to Signalist and access your personalized stock market dashboard with AI-powered alerts, real-time charts, and smart insights.",
  keywords: [
    "Signalist sign in",
    "stock market login",
    "AI stock alerts login",
    "stock dashboard sign in",
  ],
  alternates: {
    canonical: "https://signalist-nu.vercel.app/sign-in",
  },
  openGraph: {
    title: "Sign In to Signalist",
    description:
      "Log in to Signalist to track stocks, manage watchlists, and receive AI-powered market alerts.",
    url: "https://signalist-nu.vercel.app/sign-in",
    siteName: "Signalist",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sign In | Signalist",
    description:
      "Access your Signalist account for AI-powered stock alerts and real-time market data.",
  },
};

const SignIn = () => {
  return (
    <div className="flex flex-col">
      <h1 className="form-title">Welcome back</h1>
      <SignInForm />
    </div>
  );
};

export default SignIn;
