import React from "react";
import UserButton from "./UserButton";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b shadow">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-12">
        {/* logo section */}
        <Logo />
        {/* user navigation section */}
        <UserButton />
      </nav>
    </header>
  );
};

export default Header;
