import { useGetChampionshipInfo } from "@/query/getChampionshipInfo.query";
import { useParams } from "react-router";

export function Championship() {
  const params = useParams();

  const id = params.championshipId;

  const { data: championshipInfo } = useGetChampionshipInfo(Number(id));
  console.log(championshipInfo);

  return <div>CHAMPIONSHIP</div>;
  //Essa é a pagina que mostra as informações detalhadas de um campeonato
}
