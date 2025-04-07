import { cn } from "@/lib/utils";
import { BoxIcon, HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface LogoProps {
  className?: string;
  iconStyle?: string;
}

const Logo = ({ className, iconStyle }: LogoProps) => {
  return (
    <Link href={"/"}>
      <h1 className={cn("flex items-center text-xl font-bold", className)}>
        EVE <HeadphonesIcon className={cn("h-5 w-5 mx-0.5", iconStyle)} /> T B{" "}
        <BoxIcon className={cn("h-5 w-5 mx-0.5", iconStyle)} /> X
      </h1>
    </Link>
  );
};

export default Logo;
