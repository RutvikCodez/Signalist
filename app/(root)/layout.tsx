import Header from "@/components/Header";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="min-h-screen text-gray-400">
      <Header />
      <main className="w-11/12 mx-auto py-10">{children}</main>
    </main>
  );
};

export default Layout;
