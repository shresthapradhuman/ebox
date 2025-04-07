import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideProps } from "lucide-react";
import React from "react";

interface InsightCardProps {
  title: string;
  count: string;
  description: string;
}

const InsightCard = ({ title, count, description }: InsightCardProps) => {
  return (
    <Card className="gap-2">
      <CardHeader>
        <CardTitle className="font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2 text-2xl font-bold">{count}</div>
        <p className="text-muted-foreground text-xs">{description}</p>
      </CardContent>
    </Card>
  );
};

export default InsightCard;
