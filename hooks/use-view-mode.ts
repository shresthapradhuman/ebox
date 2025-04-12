"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useViewMode() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = useState(searchParams.get("view") || "grid");

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (viewMode) {
      params.set("view", viewMode);
    } else {
      params.delete("view");
    }

    router.push(`/events?${params.toString()}`, { scroll: false });
  }, [viewMode, router, searchParams]);

  const toggleViewMode = (mode: string) => {
    setViewMode(mode);
  };

  return { viewMode, toggleViewMode };
}
