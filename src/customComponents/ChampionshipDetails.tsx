import { CalendarDays, Users, ListChecks } from "lucide-react";
import type { ChampionshipType } from "@/types/championshipTypes";

interface ChampionshipDetailsProps {
  championshipInfo: ChampionshipType;
}

export function ChampionshipDetails({ championshipInfo }: ChampionshipDetailsProps) {
  // Cores centralizadas para os ícones
  const IconColor = "text-red-500";

  const leftColumnDetails = [
    {
      icon: <ListChecks className={`w-5 h-5 ${IconColor}`} />,
      label: "Formato",
      value: championshipInfo.format,
    },
    {
      icon: <ListChecks className={`w-5 h-5 ${IconColor}`} />,
      label: "Número de Partidas",
      value: `${championshipInfo.numbersOfMatches} jogos`,
    },
    {
      icon: <Users className={`w-5 h-5 ${IconColor}`} />,
      label: "Times Participantes",
      value: `${championshipInfo.teams?.length || 0} times`,
    },
    {
      icon: <ListChecks className={`w-5 h-5 ${IconColor}`} />,
      label: "Status",
      value: translateStatus(championshipInfo.status),
    },
  ];

  const rightColumnDetails = [
    {
      icon: <CalendarDays className={`w-5 h-5 ${IconColor}`} />,
      label: "Início do Campeonato",
      value: formatDate(championshipInfo.beginDate),
    },
    {
      icon: <CalendarDays className={`w-5 h-5 ${IconColor}`} />,
      label: "Término do Campeonato",
      value: formatDate(championshipInfo.endDate),
    },
    {
      icon: <CalendarDays className={`w-5 h-5 ${IconColor}`} />,
      label: "Criado em",
      value: formatDate(championshipInfo.createdAt),
    },
  ];

  return (
    <div className="bg-[#0F0F1B] text-white m-10 p-6 rounded-lg shadow-md w-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{championshipInfo.name}</h2>
      <p className="text-gray-300 mb-6">{championshipInfo.description}</p>

      <div className="grid grid-cols-2 divide-x divide-gray-700">
        <div className="pr-6 space-y-6">
          {leftColumnDetails.map((detail, index) => (
            <DetailItem
              key={index}
              icon={detail.icon}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </div>

        <div className="pl-6 space-y-6">
          {rightColumnDetails.map((detail, index) => (
            <DetailItem
              key={index}
              icon={detail.icon}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="border-b border-gray-700 pb-4">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <p className="text-red-500 font-semibold">{label}</p>
      </div>
      <p className="ml-7">{value}</p>
    </div>
  );
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function translateStatus(status: string) {
  switch (status) {
    case "IN_PROGRESS":
      return "Em andamento";
    case "FINISHED":
      return "Finalizado";
    case "CREATED":
      return "Criado";
    default:
      return status;
  }
}
