import React from "react";
import UserButton from "./UserButton";
import Logo from "./Logo";
import { auth } from "@/auth";

const Header = async () => {
  const session = await auth();
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b shadow">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-12">
        {/* logo section */}
        <Logo />
        {/* user navigation section */}
        <UserButton user={session?.user} />
      </nav>
    </header>
  );
};

export default Header;
