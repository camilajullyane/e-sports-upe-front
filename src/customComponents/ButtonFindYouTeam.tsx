import { useNavigate } from "react-router";

export function ButtonFindYouTeam() {
  const navigate = useNavigate();

  return (
    <button
      className="bg-[#2F3751] border border-white/20 rounded-[4px] text-white font-bold px-4 py-2 text-lg cursor-pointer hover:bg-[#4a598a] duration-300 ease-in-out"
      onClick={() => navigate("/team")}
    >
      ENCONTRAR TIME
    </button>
  );
}