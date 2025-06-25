import { authStore } from "@/store/auth.store";
import { NavBar } from "@/customComponents/navBar";
import artTwo from "@/assets/art-two.jpg";

export function HomePage() {
  const credentials = authStore().getCredentials();
  console.log("credenciais: ", credentials);
  return (
    <main className="min-h-screen bg-black">
      <NavBar />
      <div className="pt-12 relative w-full h-[calc(100vh-48px)]">
        <img
          src={artTwo}
          alt="Art Two"
          className="w-screen h-[calc(110vh-48px)] object-cover block mx-0"
          style={{ display: "block" }}
        />
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-4xl font-extrabold drop-shadow-2xl text-center"
          style={{ textShadow: "2px 2px 8px #000, 0 0 10px #000" }}>
        MELHOR PLATAFORMA DE E-SPORTS DO BRASIL
      </div>
      </div>
    </main>
  );
}
