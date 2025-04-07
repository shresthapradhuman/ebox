import React from "react";
import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import UserButton from "./UserButton";
import MobileMenu from "./MobileMenu";
import { auth } from "@/auth";

const Header = async () => {
  const session = await auth();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
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
