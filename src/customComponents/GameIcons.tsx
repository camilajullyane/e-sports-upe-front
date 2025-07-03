import { gameImagesWhite } from "@/utils/gameImages";

interface GameIconsProps {
  onClick?: (gameId: number) => void;
}

export function GameIcons({ onClick }: GameIconsProps) {

  const gameColors: Record<number, string> = {
    1: "bg-red-500", // valorant - vermelho
    2: "bg-blue-500", // cs - azul
    4: "bg-green-500", // fortnite - verde
    5: "bg-purple-500" // lol - roxo
  };

  return (
    <div className="flex gap-4">
      {Object.keys(gameImagesWhite).map((gameIdStr) => {
        const gameId = Number(gameIdStr);
        const colorClass = gameColors[gameId];
        
        return (
          <div
            key={gameId}
            className={`w-16 h-16 rounded-full ${colorClass} p-3 cursor-pointer hover:scale-110 transition-transform duration-200 flex items-center justify-center`}
            onClick={() => onClick?.(gameId)}
          >
            <img
              src={gameImagesWhite[gameId]}
              alt={`Game ${gameId}`}
              className="w-full h-full object-contain"
            />
          </div>
        );
      })}
    </div>
  );
}
