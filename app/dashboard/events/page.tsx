import React from "react";
import { DataTable } from "@/components/data-table";
import { Columns } from "./_components/Columns";
import { getEvents } from "./helper";

const EventListPage = async () => {
  const events = await getEvents();
  return (
    <div className="container mx-auto flex flex-col px-4 pt-3">
      <div className="pb-4 pt-8">
        <DataTable columns={Columns} data={events} />
      </div>
    </div>
  );
};

export default EventListPage;
