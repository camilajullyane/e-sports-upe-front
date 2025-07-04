import { Card, CardContent } from "@/components/ui/card";
import { Calendar1, Loader2 } from "lucide-react";
import champ from "@/assets/champ.jpg";

interface ChampionshipCardProps {
  title?: string;
  date: string;
  gameName: string;
  status: string;
  description: string;
  format: string;
  numberOfMatches: number;
  onClick: () => void;
}

export function ChampionshipCard({
  date,
  gameName,
  description,
  status,
  onClick,
}: ChampionshipCardProps) {
  const readStatus =
    status === "IN_PROGRESS"
      ? "EM ANDAMENTO"
      : status === "CLOSED"
      ? "ENCERRADO"
      : status === "REGISTRATION_OPEN"
      ? "INSCRIÇÕES ABERTAS"
      : status;

  return (
    <Card
      className="relative w-full max-w-[280px] mx-5 rounded-[8px] bg-[#1C1D2C] overflow-hidden border border-[#2F3047] cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-lime-500 z-10" />

      <div className="relative h-40 w-full">
        <img
          src={champ}
          alt="Championship Cover"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/50 rounded-full p-2">
            <Loader2 className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="min-w-fit whitespace-nowrap absolute bottom-2 left-1/2 -translate-x-1/2 bg-lime-500 text-black font-bold text-xs px-4 py-[2px] rounded-[10px]">
          {readStatus}
        </div>
      </div>

      <CardContent className="p-4 text-white space-y-3">
        <p className="font-bold text-base uppercase">{gameName}</p>
        <p className="text-sm -mt-3">{description}</p>
        <div className="flex justify-between text-sm text-lime-300">
          <span className="flex items-center gap-1">
            <Calendar1 size={14} />
            <span className="text-white">{formatDate(date)}</span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
