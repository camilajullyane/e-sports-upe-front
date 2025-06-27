import { useState } from "react";
import { ToolTip } from "./ToolTip";

export function Sidebar() {
  const [bgHover, setBgHover] = useState("");
  const [bgColor, setBgColor] = useState("");

  const gamesInfo = [
    {
      id: 1,
      name: "Valorant",
      img: "https://api.gamersclub.gg/v1/games/valorant/icon?color=%23FFFFFF",
      color: "#FB4B56",
    },
    {
      id: 2,
      name: "League of Legends",
      img: "https://api.gamersclub.gg/v1/games/lol/icon?color=%23FFFFFF",
      color: "#AE6CF9",
    },
    {
      id: 3,
      name: "Fortnite",
      img: "https://api.gamersclub.gg/v1/games/fortnite/icon?color=%23FFFFFF",
      color: "#3FE8AE",
    },
    {
      id: 4,
      name: "Counter-Strike",
      img: "https://api.gamersclub.gg/v1/games/csgo/icon?color=%23FFFFFF",
      color: "#0BC8D5",
    },
  ];

  return (
    <div
      className={`flex flex-col min-h-screen w-full p-2 items-center gap-4 bg-${bgColor}`}
      style={{ backgroundColor: bgHover }}
    >
      {gamesInfo.map((game) => {
        return (
          <ToolTip label={game.name}>
            <div
              key={game.id}
              className="flex items-center justify-center w-16 h-16  hover:bg-gray-800/70 rounded-[4px] duration-300 ease-in cursor-pointer"
              onMouseOver={() => setBgHover(game.color)}
              onClick={() => setBgColor(game.color)}
            >
              <img src={game.img} className="w-8 h-8" />
            </div>
          </ToolTip>
        );
      })}
    </div>
  );
}
