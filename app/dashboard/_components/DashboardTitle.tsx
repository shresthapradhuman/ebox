"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const DashboardTitle = () => {
  const pathname = usePathname();
  console.log(pathname.split("/").length);
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathname.split("/").length > 2 && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        {pathname.split("/").length > 3 && (
          <>
            <BreadcrumbItem className="capitalize">
              <BreadcrumbLink href={`/dashboard/${pathname.split("/")[2]}`}>
                {pathname.split("/")[2]}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem className="capitalize">
          <BreadcrumbPage>{pathname.split("/")[pathname.split("/").length - 1]}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DashboardTitle;
