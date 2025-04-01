import Link from "next/link";
import { BoxIcon, HeadphonesIcon } from "lucide-react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h1 className="text-2xl flex items-center font-bold">
        EVE
        <HeadphonesIcon className="text-primary stroke-2 mx-1" />
        T B <BoxIcon className="text-primary stroke-2 mx-1" />X
      </h1>
    </Link>
  );
};

export default Logo;
