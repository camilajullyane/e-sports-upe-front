import { ChampionshipCard } from "@/customComponents/ChampionshipCard";
import { useGetGameInfo } from "@/query/getGamesInfo.query";
import { useNavigate, useParams } from "react-router";

export function GamesPage() {
  const params = useParams();
  const gameId = Number(params.gameId);

  const { data: gameInfo } = useGetGameInfo(gameId);
  const navigate = useNavigate();

  return (
    <>
      // <div>{gameInfo?.id}</div>
      // <div>{gameInfo?.description}</div>
      // <div>{gameInfo?.developer}</div>
      // <div>{gameInfo?.name}</div>
      <div className="flex w-full">
        {gameInfo?.championships.map((c) => {
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
