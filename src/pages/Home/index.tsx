import { useGetGameInfo } from "@/query/getGamesInfo.query";
import { useParams } from "react-router";

export function HomePage() {
  const params = useParams();
  const gameId = Number(params.gameId);

  const { data: gameInfo } = useGetGameInfo(gameId);

  return (
    <>
      <div>{gameInfo?.id}</div>
      <div>{gameInfo?.description}</div>
      <div>{gameInfo?.developer}</div>
      <div>{gameInfo?.name}</div>
    </>
  );
}
