"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CalendarPlusIcon, LogOutIcon, MenuIcon, MoreVerticalIcon, UserIcon } from "lucide-react";
import React from "react";
import Logo from "./Logo";
import { navItems } from "@/constant";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { User } from "next-auth";
import { logoutAction } from "../(auth)/actions";

interface MobileMenuProps {
  user: User | undefined;
}

const MobileMenu = ({ user }: MobileMenuProps) => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(`${path}/`);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hidden cursor-pointer max-lg:flex"
          aria-label="Menu"
        >
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full">
        <SheetHeader className="mt-0.5 border-b">
          <SheetTitle>
            <Logo className="pl-4" />
          </SheetTitle>
        </SheetHeader>
        <div className="-mt-2 flex flex-col gap-4">
          {/* nav items */}
          <div className="flex flex-col px-4">
            {navItems.map((item) => (
              <SheetClose asChild key={item.label}>
                <Link
                  href={item.url}
                  className={cn(
                    "flex items-center rounded-md px-4 py-3 text-base font-medium",
                    isActive(item.url) ? "bg-accent text-accent-foreground" : "hover:bg-muted",
                  )}
                >
                  {item.label}
                </Link>
              </SheetClose>
            ))}
          </div>
        </div>
        <SheetFooter>
          {/* authentication */}
          <div className="mt-4 border-t pt-4">
            {!user ? (
              <div className="flex flex-col gap-2">
                <SheetClose
                  className={buttonVariants({
                    variant: "default",
                    className: "w-full",
                  })}
                  asChild
                >
                  <Link href="/register" className="w-full">
                    Register
                  </Link>
                </SheetClose>
                <SheetClose
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full",
                  })}
                  asChild
                >
                  <Link href="/login" className="w-full">
                    Log In
                  </Link>
                </SheetClose>
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="w-full cursor-pointer py-8">
                  <Button size={"lg"} variant={"ghost"}>
                    <Avatar className="h-10 w-10 rounded-full bg-primary">
                      <AvatarImage src={user?.image || ""} alt={user?.name || "user name"} />
                      <AvatarFallback className="rounded-lg bg-primary uppercase text-primary-foreground">
                        {user?.name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium uppercase">{user?.name}</span>
                      <span className="truncate text-xs text-muted-foreground">{user?.email}</span>
                    </div>
                    <MoreVerticalIcon className="ml-auto size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-xs rounded-lg"
                  side={"bottom"}
                  align="end"
                  sideOffset={10}
                  alignOffset={20}
                >
                  <DropdownMenuItem asChild>
                    <Link href={"/settings"}>
                      <UserIcon />
                      <span>Manage User</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={"/settings"}>
                      <CalendarPlusIcon />
                      <span>Create Event</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={async () => {
                      await logoutAction();
                    }}
                  >
                    <LogOutIcon />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
