"use client";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Event } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { TableRowActions } from "./TableRowActions";
import CoverImage from "@/components/cover-image";

export const Columns: ColumnDef<Event>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="select all"
        className="mx-2"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="select row"
        className="mx-2"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: ({ column }) => {
      return (
        <div className="mr-2 flex w-full cursor-pointer items-center justify-center">Image</div>
      );
    },
    cell: ({ row }) => {
      const imageUrl = row.getValue("image") as string;
      return (
        <div className="relative mr-2 aspect-[3/2]">
          <CoverImage imageUrl={imageUrl} title={row.getValue("title")} />
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <div
          className="mr-2 flex w-full cursor-pointer items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => <div className="mr-2 font-medium capitalize">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <div
          className="mr-2 flex w-full cursor-pointer items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Schedule
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("date") as Date;
      const start = row.original.startTime;
      const end = row.original.endTime;
      return (
        <ul className="mr-2">
          <li>{date.toLocaleDateString()}</li>
          <li>({`${start} ~ ${end}`})</li>
        </ul>
      );
    },
  },
  {
    accessorKey: "venue",
    header: ({ column }) => {
      return (
        <div
          className="flex w-full cursor-pointer items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Venue
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </div>
      );
    },

    cell: ({ row }) => {
      return <div className="text-wrap">{row.getValue("venue")}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <div
          className="flex w-full items-center justify-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
        </div>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as string; // Cast to the keys of statusMap

      return (
        <div className="flex items-center justify-center capitalize">
          <Badge
            variant={
              status == "PUBLISHED" ? "default" : status == "DRAFT" ? "outline" : "secondary"
            }
          >
            {status.toLowerCase()}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
      }).format(amount);

      return <div>{amount > 0 ? formatted : "Free"}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt") as Date; // Cast to the keys of statusMap
      return <div>{createdAt.toLocaleDateString()}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <TableRowActions row={row} />,
    enableSorting: false,
    enableHiding: false,
  },
];
