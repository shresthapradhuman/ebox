"use client";
import Logo from "@/app/(site)/_components/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { dashboardItems } from "@/constant";
import { cn } from "@/lib/utils";
import { LayoutDashboardIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="border-b">
        <SidebarMenu className="pl-2">
          <SidebarMenuItem>
            <Logo />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenuItem className="flex items-center gap-2">
              <SidebarMenuButton
                tooltip={"dashboard"}
                className={cn("min-w-8")}
                isActive={pathname == "/dashboard"}
                asChild={true}
              >
                <Link href={"/dashboard"}>
                  <LayoutDashboardIcon />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            {dashboardItems.map((item) => (
              <SidebarMenu key={item.label}>
                <SidebarMenuItem className="flex items-center gap-2">
                  <SidebarMenuButton
                    tooltip={item.label}
                    className={cn("min-w-8")}
                    isActive={pathname.split("/")[2] == item.label.toLowerCase()}
                    asChild={true}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>{/* footer */}</SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
