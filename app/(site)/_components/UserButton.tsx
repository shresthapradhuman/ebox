"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarPlusIcon, LogOutIcon, UserIcon } from "lucide-react";
import { User } from "next-auth";
import Link from "next/link";
import React from "react";
import { logoutAction } from "../(auth)/actions";

interface UserButtonProps {
  user: User | undefined;
}

const UserButton = ({ user }: UserButtonProps) => {
  const handleLogout = async () => {
    await logoutAction();
  };
  return (
    <div className="max-lg:hidden">
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={user?.image || ""}
                alt={user?.name || "user name"}
              />
              <AvatarFallback className="uppercase bg-primary text-primary-foreground">
                {user?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="w-64">
              <h3 className="text-balance text-base uppercase">{user?.name}</h3>
              <p className="text-sm truncate text-muted-foreground">
                {user?.email}
              </p>
            </DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link href={"/dashboard/settings"}>
                <UserIcon />
                <span>Manage User</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href={"/dashboard/events/create"}>
                <CalendarPlusIcon/>
                <span>Create Events</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOutIcon />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex items-center gap-2">
          <Button variant={"outline"} asChild>
            <Link href={"/login"}>Log In</Link>
          </Button>
          <Button asChild>
            <Link href={"/register"}>Register</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default UserButton;
