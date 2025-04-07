import { CalendarIcon, CogIcon, JapaneseYenIcon, TicketsIcon } from "lucide-react";

export const navItems = [
  {
    label: "Browse Events",
    url: "/events",
  },
  {
    label: "How It Works",
    url: "/how-it-works",
  },
  {
    label: "Help Center",
    url: "/help-center",
  },
  {
    label: "My Tickets",
    url: "/tickets",
  },
];

export const dashboardItems = [
  {
    label: "Events",
    url: "/dashboard/events",
    icon: CalendarIcon,
  },
  {
    label: "Tickets",
    url: "/dashboard/tickets",
    icon: TicketsIcon,
  },
  {
    label: "Sales",
    url: "/dashboard/sales",
    icon: JapaneseYenIcon,
  },
  {
    label: "Settings",
    url: "/dashboard/settings",
    icon: CogIcon,
  },
];
