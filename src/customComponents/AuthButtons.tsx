import { useNavigate } from "react-router";
import { twMerge } from "tailwind-merge";
interface AuthButtonsProps {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  buttonClassName?: React.HTMLAttributes<HTMLButtonElement>["className"];
}

export function AuthButtons(props: AuthButtonsProps) {
  const navigate = useNavigate();
  // const sizeClasses = size === "sm"
  // ? "px-3 py-1.5 text-sm"
  // : "px-4 py-2 text-base";

  return (
    <div className={twMerge("ml-auto flex gap-2 my-15 pr-5", props.className)}>
      <button
        className={twMerge(
          `bg-[#2F3751] border border-white/20 rounded-[4px]  text-white font-bold px-4 py-2 text-2xl cursor-pointer hover:bg-[#4a598a] duration-300 ease-in-out`,
          props.buttonClassName
        )}
        onClick={() => navigate("/signin")}
      >
        ENTRAR
      </button>
      <button
        className={twMerge(
          `bg-[#8cd226] border border-white/20 rounded-[4px] text-white font-bold px-4 py-2 text-2xl cursor-pointer hover:bg-[#7f9b56] duration-300 ease-in-out`,
          props.buttonClassName
        )}
        onClick={() => navigate("/signup")}
      >
        CRIAR CONTA
      </button>
    </div>
  );
}
