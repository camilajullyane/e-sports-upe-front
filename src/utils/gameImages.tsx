export const gameImages: Record<number, string> = {
    1: "https://api.gamersclub.gg/v1/games/valorant/icon?color=%23F51D1D",
    2: "https://api.gamersclub.gg/v1/games/csgo/icon?color=%2331D1F5",
    4: "https://api.gamersclub.gg/v1/games/fortnite/icon?color=%2372D8A7",
    5: "https://api.gamersclub.gg/v1/games/lol/icon?color=%23BD2AF5"    
}

export const gameImagesWhite: Record<number, string> = {
    1: "https://api.gamersclub.gg/v1/games/valorant/icon?color=%23DDDDDD",
    2: "https://api.gamersclub.gg/v1/games/csgo/icon?color=%23DDDDDD",
    4: "https://api.gamersclub.gg/v1/games/fortnite/icon?color=%23DDDDDD",
    5: "https://api.gamersclub.gg/v1/games/lol/icon?color=%23DDDDDD"    
}

export const getGameImage = (gameId: number): string => {
    return gameImages[gameId];
};

export const getGameImageWhite = (gameId: number): string => {
    return gameImagesWhite[gameId];
};