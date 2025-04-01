"use client";
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvatarImage } from "@radix-ui/react-avatar";
import { CogIcon, LogOutIcon } from "lucide-react";
import Link from "next/link";

const UserButton = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="space-x-3 flex items-center">
      {isLoggedIn ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <Avatar className="border-2 border-primary/40 hover:border-primary">
                <AvatarImage src={"/"} alt="user profile image" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-60"
              align="end"
              alignOffset={5}
              sideOffset={10}
            >
              <DropdownMenuLabel>
                <h3 className="text-balance text-base font-medium capitalize">
                  Pradhuman Shrestha
                </h3>
                <p className="truncate text-sm text-muted-foreground">
                  shresthapradhuman2018@gmail.com
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={"/settings"}>
                  <CogIcon />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOutIcon />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Button asChild variant={"ghost"} className="text-base">
            <Link href={"/login"}>Log In</Link>
          </Button>
          <Button asChild className="text-base">
            <Link href={"/register"}>Register</Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default UserButton;
