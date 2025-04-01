import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center border-t pb-2 pt-4 text-sm uppercase">
      <div className="flex items-center">
        <Logo className="mr-1 text-sm" iconStyle="h-4 w-4" /> @{" "}
        {new Date().getFullYear()}, All right reserved.
      </div>
    </footer>
  );
};

export default Footer;
