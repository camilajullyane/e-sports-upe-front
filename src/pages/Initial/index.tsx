import { NavBar } from "@/customComponents/NavBar";
import { AuthButtons } from "@/customComponents/AuthButtons";
import { GamesIcons } from "@/customComponents/GamesIcons";

export function InitialPage() {
  return (
    <>
      <NavBar />
      <div className="relative w-full h-full mt-15">
        <div className="flex h-screen w-full bg-[url(@/assets/art-two.jpg)] bg-cover bg-center bg-no-repeat items-center justify-center">
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
                <GamesIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
