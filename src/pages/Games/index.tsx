import { ChampionshipCard } from "@/customComponents/ChampionshipCard";
import { CircularProgress } from "@/customComponents/CircularProgress";
import { TitleGame } from "@/customComponents/TitleGame";
import { useGetGameInfo } from "@/query/getGamesInfo.query";
import { useNavigate, useParams } from "react-router";
import { UserCircle } from "lucide-react"; 

export function GamesPage() {
  const params = useParams();
  const gameId = Number(params.gameId);

  const { data: gameInfo, isLoading } = useGetGameInfo(gameId);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <TitleGame gameId={gameId} gameName={gameInfo?.name} />
      
    <div className="w-full flex flex-col gap-4 max-w-[1000px] mt-6 p-4 m-5 bg-gray-800 rounded-2xl shadow-md border border-gray-600">
      <h2 className="text-xl font-semibold text-gray-200">Sobre o jogo</h2>
      <p className="text-gray-300 text-justify">{gameInfo?.description || "Descrição não disponível."}</p>
    
      <div className="flex items-center gap-2 mt-4">
        <span className="text-sm font-medium text-gray-400">Desenvolvedor:</span>
        <span className="text-base text-gray-200">{gameInfo?.developer || "Desconhecido"}</span>
      </div>
  </div>

      <div className="flex w-full">
        {gameInfo?.championships?.map((c) => {
          return (
            <ChampionshipCard
              gameName={c.name}
              status={c.status}
              date={c.beginDate}
              description={c.description}
              format={c.format}
              numberOfMatches={c.numbersOfMatches}
              key={c.id}
              onClick={() => {
                navigate(`/championship/${c.id}`);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
