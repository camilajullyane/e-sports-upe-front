import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar1, ShieldHalf } from "lucide-react";

interface ChampionshipCardProps {
  title?: string;
  date: string;
  gameName: string;
  status: string;
  description: string;
  format: string;
  numberOfMatches: number;
}

export function ChampionshipCard({
  date,
  gameName,
  title,
  description,
  format,
  numberOfMatches,
  status,
}: ChampionshipCardProps) {
  return (
    <Card className="w-full max-w-sm min-h-8 rounded-[4px] bg-[#1C1D2C] shadow-2xl border-zinc-700">
      <CardHeader className="text-zinc-50">
        <CardTitle className="text-zinc-50">{gameName}</CardTitle>
        <CardDescription className="text-zinc-50/60">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center text-zinc-200 gap-4">
        <div
          className={`${
            status === "IN_PROGRESS"
              ? "bg-green-100 text-green-700"
              : status === "CLOSED"
              ? "bg-red-100 text-red-700"
              : status === "REGISTRATION_OPEN"
              ? "bg-amber-600"
              : "bg-gray-100 text-gray-700"
          } p-1 rounded-[4px] font-bold text-sm`}
        >
          <p>{status}</p>
        </div>

        <div>
          <div className="flex gap-4 text-sm font-semibold">
            <p className="flex items-center gap-1">
              <Calendar1 size="14px" color="#8CA800" />
              {date}
            </p>
            <p className="flex items-center gap-1">
              <ShieldHalf size="14px" color="#8CA800" />
              {format}
            </p>
          </div>
        </div>
        <div>
          <p className="border-zinc-200 ">{numberOfMatches} partidas</p>
        </div>
      </CardContent>
    </Card>
  );
}
