import Link from "next/link";
import { BoxIcon, HeadphonesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const Logo = ({
  className,
  iconStyle,
}: {
  className?: string;
  iconStyle?: string;
}) => {
  return (
    <Link href={"/"}>
      <h1 className={cn("text-2xl flex items-center font-bold", className)}>
        EVE
        <HeadphonesIcon
          className={cn("text-primary stroke-2 mx-1", iconStyle)}
        />
        T B <BoxIcon className={cn("text-primary stroke-2 mx-1", iconStyle)} />X
      </h1>
    </Link>
  );
};

export default Logo;
