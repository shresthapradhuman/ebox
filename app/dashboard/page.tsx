import React from "react";
import InsightCard from "./_components/InsightCard";
import { getEventIncreasePercentage, getEvents } from "./events/helper";

const DashboardPage = async () => {
  const events = await getEvents();
  const eventGrowthPercent = await getEventIncreasePercentage();
  return (
    <div className="container mx-auto flex flex-col px-4 pt-3">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <InsightCard
          title={"Total Revenue"}
          count={"$86,230"}
          description={`+12.5% from last month`}
        />
        <InsightCard
          title={"Events Created"}
          count={events.length.toString()}
          description={`+${eventGrowthPercent} from last month`}
        />
        <InsightCard title={"Ticket Sold"} count={"1725"} description={`+8.3% from last month`} />
        <InsightCard
          title={"Total Attendees"}
          count={"1543"}
          description={`+5.2% from last month`}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
