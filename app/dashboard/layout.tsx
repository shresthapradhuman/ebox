import React from "react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardSidebar from "./_components/DashboardSidebar";
import { Separator } from "@/components/ui/separator";
import DashboardTitle from "./_components/DashboardTitle";
import { auth } from "@/auth";
import DashboardUser from "./_components/DashboardUser";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return (
    <SidebarProvider>
      {/* sidebar */}
      <DashboardSidebar />
      <SidebarInset>
        {/* header */}
        <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-[2.8rem] sticky top-0 z-50 flex h-[2.8rem] shrink-0 items-center gap-2 border-b bg-background transition-[width,height] ease-linear">
          <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
            <DashboardTitle />
            <div className="ml-auto">
              <DashboardUser user={session?.user} />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 md:gap-6">{children}</div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default layout;
