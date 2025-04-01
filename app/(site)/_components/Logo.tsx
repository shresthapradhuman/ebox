import Link from "next/link";
import { BoxIcon, HeadphonesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Logo = ({ className, iconStyle }: { className?: string; iconStyle?: string }) => {
  return (
    <Link href={"/"}>
      <h1 className={cn("flex items-center text-2xl font-bold", className)}>
        EVE
        <HeadphonesIcon className={cn("text-primary mx-1 stroke-2", iconStyle)} />
        T B <BoxIcon className={cn("text-primary mx-1 stroke-2", iconStyle)} />X
      </h1>
    </Link>
  );
};

export default Logo;
