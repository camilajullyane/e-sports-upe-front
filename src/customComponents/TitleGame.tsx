import { getGameImage } from "@/utils/gameImages";

interface TitleGameProps {
  gameId: number;
  gameName?: string;
}

export function TitleGame({ gameId, gameName }: TitleGameProps) {
  return (
    <>
      <div className="flex items-center mb-4 p-4">
        <img
          src={getGameImage(gameId)}
          alt={gameName}
          className="w-12 h-12 mr-4"
        />

        <div className="h-15 border-l-[1px] border-zinc-700 mr-5" />

        <div className="text-3xl font-bold text-white">
          {gameName}
        </div>
      </div>
      <div className="border-b border-zinc-700 mt-2 ml-5 w-[95%]" />
    </>
  );
}
