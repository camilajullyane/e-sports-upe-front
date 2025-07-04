import { ChampionshipDetails } from "@/customComponents/ChampionshipDetails";
import { useGetChampionshipInfo } from "@/query/getChampionshipInfo.query";
import { useParams } from "react-router";

export function Championship() {
  const params = useParams();
  const id = params.championshipId;

  const { data: championshipInfo, isLoading } = useGetChampionshipInfo(
    Number(id)
  );

  if (isLoading || !championshipInfo) return <p>Carregando</p>;

  return (
    <div className="flex justify-center items-center w-full">
      <ChampionshipDetails championshipInfo={championshipInfo} />
    </div>
  );
}
