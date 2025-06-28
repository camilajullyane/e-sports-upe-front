import { useEffect, useState } from "react";
import { ToolTip } from "./ToolTip";
import { useNavigate } from "react-router";

const gamesInfo = [
  {
    id: 1,
    name: "Valorant",
    img: "https://api.gamersclub.gg/v1/games/valorant/icon?color=%23FFFFFF",
    color: "#FB4B56",
  },
  {
    id: 5,
    name: "League of Legends",
    img: "https://api.gamersclub.gg/v1/games/lol/icon?color=%23FFFFFF",
    color: "#AE6CF9",
  },
  {
    id: 4,
    name: "Fortnite",
    img: "https://api.gamersclub.gg/v1/games/fortnite/icon?color=%23FFFFFF",
    color: "#3FE8AE",
  },
  {
    id: 2,
    name: "Counter-Strike",
    img: "https://api.gamersclub.gg/v1/games/csgo/icon?color=%23FFFFFF",
    color: "#0BC8D5",
  },
];

export function Sidebar() {
  const [bgHover, setBgHover] = useState("");
  const [bgColor, setBgColor] = useState("#FB4B56");
  const [selectedGame, setSelectedGame] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/game/1");
  }, []);

  return (
    <div
      className={`flex flex-col min-h-screen w-full p-2 items-center gap-4  duration-300 ease-in`}
      style={{ backgroundColor: bgHover != "" ? bgHover : bgColor }}
    >
      {gamesInfo.map((game) => {
        const isSelected = selectedGame === game.id;
        return (
          <ToolTip label={game.name} key={game.id}>
            <div
              className={`flex items-center justify-center w-16 h-16  hover:bg-gray-700/60 rounded-[4px] duration-300 ease-in cursor-pointer ${
                isSelected ? "bg-gray-800/80" : ""
              }`}
              onMouseOver={() => setBgHover(game.color)}
              onClick={() => {
                navigate(`/game/${game.id}`);
                setBgColor(game.color);
                setSelectedGame(game.id);
              }}
            >
              <img src={game.img} className="w-8 h-8" />
            </div>
          </ToolTip>
        );
      })}
    </div>
  );
}
