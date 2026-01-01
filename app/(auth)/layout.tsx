import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const AuthLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user) redirect("/");
  return (
    <main className="grid grid-cols-[45fr_55fr] max-lg:grid-cols-1 h-screen bg-gray-900 relative overflow-hidden">
      <section className="auth-left-section scrollbar-hide-default w-full">
        <div className="w-11/12 mx-auto flex flex-col">
          <Link href={"/"} className="auth-logo">
            <Image
              src={"/assets/icons/logo.svg"}
              alt="Signalist Logo"
              width={140}
              height={32}
              className="h-8 w-auto cursor-pointer"
            />
          </Link>
          <div className="pb-6 lg:pb-8 flex-1">{children}</div>
        </div>
      </section>
      <section className="auth-right-section flex flex-col lg:gap-16">
        <div className="z-10 relative lg:mt-4 mx-auto w-11/12">
          <blockquote className="auth-blockquote">
            Signalist turned my watchlist into a winning list. The alerts are
            spot-on, and I feel more confident making moves in the market
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <cite className="auth-testimonial-author">- Ethan R.</cite>
              <p className="max-md:text-xs text-gray-500">Retail Investor</p>
            </div>
            <div className="flex items-center justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  src={"/assets/icons/star.svg"}
                  alt="Star"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  key={star}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image
            src={"/assets/images/dashboard.png"}
            alt="Dashboard Preview"
            width={1440}
            height={1150}
            className="auth-dashboard-preview absolute top-0"
          />
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
