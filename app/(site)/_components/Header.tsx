import React from "react";
import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import SearchBox from "./SearchBox";
import UserButton from "./UserButton";
import MobileMenu from "./MobileMenu";
import { auth } from "@/auth";

const Header = async () => {
  const session = await auth();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <nav className="h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between container mx-auto">
        {/* logo section */}
        <Logo />
        {/* desktop menu */}
        <NavbarMenu />

        <div className="flex items-center gap-4">
          <UserButton user={session?.user} />
          {/* mobile menu */}
          <MobileMenu user={session?.user} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
