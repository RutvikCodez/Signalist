import Header from "@/components/Header";
import { auth } from "@/lib/better-auth/auth";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard | Signalist",
  description:
    "Access your personalized stock market dashboard with real-time charts, AI alerts, watchlists, and insights on Signalist.",
  robots: {
    index: false,
    follow: false,
  },
};


const Layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) redirect("/sign-in");
  const user = {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
  }
  return (
    <main className="min-h-screen text-gray-400">
      <Header user={user} />
      <main className="w-11/12 mx-auto py-10">{children}</main>
    </main>
  );
};

export default Layout;
