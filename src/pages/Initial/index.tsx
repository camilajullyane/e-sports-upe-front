import { NavBar } from "@/customComponents/NavBar";
import { AuthButtons } from "@/customComponents/AuthButtons";
import { GameIcons } from "@/customComponents/GameIcons";
import { useNavigate } from "react-router";

export function InitialPage() {
  const navigate = useNavigate();

  const handleGameClick = (gameId: number) => {
    navigate(`/games/${gameId}`);
  };

  return (
    <>
      <NavBar />
      <div className="relative w-full h-full mt-15">
        <div
          className="flex h-[75vh] w-full bg-[url(@/assets/valorant.jpg)] bg-cover bg-center bg-no-repeat items-end justify-center pb-8"
          style={{
            boxShadow: "inset 0 40px 120px 40px rgba(0,0,0,0.7)",
          }}
        >
          <div
            className=" text-white text-4xl font-extrabold drop-shadow-2xl text-center"
            style={{ textShadow: "2px 2px 8px #000, 0 0 10px #000" }}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
                BEM VINDO A PLATAFORMA <br /> DE ESPORTS DA UPE CARUARU.
              </h1>
              <div className="-my-6">
                <AuthButtons />
              </div>
              <div className="flex justify-center gap-4">
                <GameIcons onClick={handleGameClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
