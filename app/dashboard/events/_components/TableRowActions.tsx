import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Event } from "@prisma/client";
import { Row } from "@tanstack/react-table";
import { EditIcon, LoaderIcon, MoreHorizontal, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { deleteEventAction } from "../actions";

interface TableRowActionsProps<TData> {
  row: Row<TData>;
}

export function TableRowActions<TData>({ row }: TableRowActionsProps<TData>) {
  const event = row.original as Event;
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const result = await deleteEventAction([event.id]);
      console.log(result);
      if (result.success) {
        toast.success("Event deleted successfully.", {
          style: { color: "green" },
        });
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to delete event:", error);
      toast.error("Failed to delete event. Please try again.", {
        style: { color: "red" },
      });
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            router.push(`/dashboard/events/${event.id}`);
          }}
        >
          <EditIcon className="mr-2 h-4 w-4" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleDelete}
          className="text-destructive focus:text-destructive"
          disabled={isDeleting}
        >
          {isDeleting ? (
            <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Trash2Icon className="mr-2 h-4 w-4" />
          )}
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
