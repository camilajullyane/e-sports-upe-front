import { useNavigate } from "react-router"

export function AuthButtons({ size = "md" }) {
    const navigate = useNavigate();
    const sizeClasses = size === "sm"
    ? "px-3 py-1.5 text-sm"
    : "px-4 py-2 text-base";

    return(
        <div className="ml-auto flex gap-2 my-15 pr-5">
        <button
          className={`bg-[#2F3751] border border-white/20 rounded-[4px]  text-white font-bold px-4 py-2 ${sizeClasses}`}
          onClick={() => navigate("/signin")}
        >
          ENTRAR
        </button>
        <button
          className={`bg-[#8cd226] border border-white/20 rounded-[4px] text-white font-bold px-4 py-2 ${sizeClasses}`}
          onClick={() => navigate("/signup")}
        >
          CRIAR CONTA
        </button>
      </div>
    )  
}