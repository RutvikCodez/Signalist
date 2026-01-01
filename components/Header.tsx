import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import UserDropDown from "./UserDropDown";
import { searchStocks } from "@/lib/actions/finnhub.actions";

const Header = async ({ email, id, name }: User) => {
  const initialStocks = await searchStocks();
  return (
    <header className="sticky top-0 header">
      <div className="w-11/12 mx-auto header-wrapper">
        <Link href={"/"}>
          <Image
            src={"/assets/icons/logo.svg"}
            alt="Signalist Logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <nav className="max-sm:hidden">
          <NavItems initialStocks={initialStocks} />
        </nav>
        <UserDropDown email={email} id={id} name={name} />
      </div>
    </header>
  );
};

export default Header;
