import { useState } from "react"
import valorant from "@/assets/game-icons/valorant.png";
import lol from "@/assets/game-icons/lol.png";
import cs from "@/assets/game-icons/cs.png";
import fortnite from "@/assets/game-icons/fortnite.png";
import pubg from "@/assets/game-icons/pubg.png";

export function GamesIcons() {
    const gameIcons = [cs, lol, pubg, fortnite, valorant];

    interface GameIconProps {
        icon: string;
        index: number;
    }

    return(
        <>
            {gameIcons.map((icon, i) => (
                <div
                    key={i}
                    className="w-15 h-15 rounded-full shadow-lg overflow-hidden bg-transparent p-0">
                    <img 
                    src={icon} 
                    alt={`Game ${i}`} 
                    className="w-full h-full object-cover" />
                </div>
            ))}
        </>
    )
}