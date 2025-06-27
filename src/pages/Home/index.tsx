import { authStore } from "@/store/auth.store";
import { NavBar } from "@/customComponents/navBar";
import artTwo from "@/assets/art-two.jpg";
import { AuthButtons } from "@/customComponents/AuthButtons";
import { GamesIcons } from "@/customComponents/GamesIcons";

export function HomePage() {
  const credentials = authStore().getCredentials();
  console.log("credenciais: ", credentials);

  return (
    <>
      <NavBar />
      <div className="relative w-full h-[calc(100vh-48px)]">
        <img
          src={artTwo}
          alt="Art Two"
          className="w-screen h-[calc(110vh-48px)] object-cover block mx-0"
          style={{ display: "block" }}
        />
        <div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-4xl font-extrabold drop-shadow-2xl text-center"
          style={{ textShadow: "2px 2px 8px #000, 0 0 10px #000" }}
        >
          <div className="flex flex-col items-center">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            A GAMERS CLUB É A MAIOR <br /> PLATAFORMA DE ESPORTS DO BRASIL.
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
    </>
  );
}
