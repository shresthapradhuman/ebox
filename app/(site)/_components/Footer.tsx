import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center border-t pt-4 pb-2 text-sm uppercase">
      <div className="flex items-center">
        <Logo className="mr-1 text-sm" iconStyle="h-4 w-4" /> @ {new Date().getFullYear()}, All
        right reserved.
      </div>
    </footer>
  );
};

export default Footer;
