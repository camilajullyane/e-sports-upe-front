import { DatePicker } from "@/customComponents/DatePicker";
import { InputComponent } from "@/customComponents/InputComponent";

export function ChampionshipAdmin() {
  return (
    <main className="">
      <h1 className="text-center text-zinc-50 text-3xl">Campeonatos</h1>
      <section className="flex justify-center w-full">
        <div className="w-[50%]">
          <h2 className="text-zinc-50 text-2xl text-center">Cadastrar</h2>
          <form className="flex items-center flex-col gap-5">
            <InputComponent label="Nome" placeholder="Digite o nome" />
            <InputComponent
              label="Descrição"
              placeholder="Digite a descrição"
            />
            <InputComponent
              label="Descrição"
              placeholder="Digite a descrição"
            />
            <InputComponent
              label="Número de partidas"
              placeholder="Digite "
              type="number"
            />
            <DatePicker label="Data de inicio" />
            <DatePicker label="Data de fim" />
          </form>
        </div>
        <div className="w-[50%]">tabela</div>
      </section>
    </main>
  );
}
