import { ChampionshipCard } from "@/customComponents/ChampionshipCard";
import { CircularProgress } from "@/customComponents/CircularProgress";
import { TitleGame } from "@/customComponents/TitleGame";
import { useGetGameInfo } from "@/query/getGamesInfo.query";
import { useNavigate, useParams } from "react-router";

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
      
      <div>{gameInfo?.id}</div>
      <div>{gameInfo?.description}</div>
      <div>{gameInfo?.developer}</div>
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
