import { useGetGameInfo } from "@/query/getGamesInfo.query";
import { useParams } from "react-router";

export function GamesPage() {
  const params = useParams();
  const gameId = Number(params.gameId);

  const { data: gameInfo } = useGetGameInfo(gameId);

  return (
    <>
      <div>{gameInfo?.id}</div>
      <div>{gameInfo?.description}</div>
      <div>{gameInfo?.developer}</div>
      <div>{gameInfo?.name}</div>

      {gameInfo?.championships.map((c) => {
        return (
          <>
            <div>{c.name}</div>
            <div>{c.description}</div>
            <div>{c.format}</div>
            <div>{c.status}</div>
          </>
        );
      })}
      {/* <div>{gameInfo?.championships}</div> */}
    </>
  );
}
