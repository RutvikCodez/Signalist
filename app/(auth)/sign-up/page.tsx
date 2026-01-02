import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Your Account | Signalist",
  description:
    "Create your Signalist account to track stocks, set AI-powered alerts, build watchlists, and access real-time market insights.",
  keywords: [
    "Signalist sign up",
    "create stock market account",
    "AI stock alerts sign up",
    "stock tracking app registration",
  ],
  alternates: {
    canonical: "https://signalist-nu.vercel.app/sign-up",
  },
  openGraph: {
    title: "Create an Account on Signalist",
    description:
      "Join Signalist and get AI-powered stock alerts, real-time charts, and personalized market insights.",
    url: "https://signalist-nu.vercel.app/sign-up",
    siteName: "Signalist",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sign Up | Signalist",
    description:
      "Join Signalist to receive AI-powered stock alerts and real-time market data.",
  },
};

const SignUp = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="form-title">Sign Up & Personalize</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
