"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { SearchIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const SearchBox = () => {
  const [searchOpen, setSearchOpen] = React.useState(false);
  return (
    <div className="relative block max-md:hidden">
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => setSearchOpen(!searchOpen)}
        aria-label="search"
      >
        {searchOpen ? <XIcon className="h-5 w-5" /> : <SearchIcon className="h-5 w-5" />}
      </Button>
      <div
        className={cn(
          "absolute right-0 top-full mt-2 w-80 origin-top-right transition-all duration-200 ease-in-out",
          searchOpen ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
        )}
      >
        <div className="rounded-md border bg-background shadow-lg">
          <div className="p-2">
            <Input placeholder="Search..." className="w-full" autoFocus={searchOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
