export function Sidebar() {
  const games = [
    {
      icon: "https://img.icons8.com/color/512/valorant.png",
      name: "valorant",
    },
    {
      icon: "https://img.icons8.com/color/512/valorant.png",
      name: "valorant",
    },
    {
      icon: "https://img.icons8.com/color/512/valorant.png",
      name: "valorant",
    },
    {
      icon: "https://img.icons8.com/color/512/valorant.png",
      name: "valorant",
    },
  ];

  return (
    <div className="flex bg-[##FB4B56] g-8 min-h-screen">
      <div className="flex flex-col">
        {games.map((game) => {
          return <img src={game.icon} className="w-8 h-8" />;
        })}
      </div>

      <div className="flex flex-col g-4">
        <p>Nome do jogo</p>

        <div>
          <p>League</p>
        </div>
        <div>
          <p>CS2</p>
        </div>
        <div>
          <p>Brawhalla</p>
        </div>
      </div>
    </div>
  );
}
