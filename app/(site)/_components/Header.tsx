import React from "react";

import UserButton from "./UserButton";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="sticky z-50 w-full border-b bg-background top-0 shadow">
      <nav className="container px-4  lg:px-12 mx-auto h-16 flex items-center justify-between">
        {/* logo section */}
        <Logo />
        {/* user navigation section */}
        <UserButton />
      </nav>
    </header>
  );
};

export default Header;
