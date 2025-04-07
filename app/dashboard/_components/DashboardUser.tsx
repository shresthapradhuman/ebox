'use client'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from 'next-auth';
import Link from 'next/link';
import { CalendarPlusIcon, LogOutIcon, UserIcon } from 'lucide-react';
import { logoutAction } from '@/app/(site)/(auth)/actions';

  interface UserButtonProps {
    user: User | undefined;
  }

const DashboardUser = ({ user }: UserButtonProps) => {
  const handleLogout = async () => {
        await logoutAction();
  };
  return (
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
  )
}

export default DashboardUser