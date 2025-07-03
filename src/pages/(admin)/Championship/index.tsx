import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { CustomSelect } from "@/customComponents/CustomSelect";
import { DatePicker } from "@/customComponents/DatePicker";
import { InputComponent } from "@/customComponents/InputComponent";
import { useCreateChampionship } from "@/mutations/createChampionship";
import { useGetAllGames } from "@/query/getAllGames.query";
import {
  CreateChampionshipSchema,
  type CreateChampionship,
} from "@/types/championshipTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

export function ChampionshipAdmin() {
  const { data } = useGetAllGames();
  const form = useForm<CreateChampionship>({
    resolver: zodResolver(CreateChampionshipSchema),
  });

  const { mutate: createChampionship } = useCreateChampionship({
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      toast.success("Campeonato criado!");
    },
  });

  const submit: SubmitHandler<CreateChampionship> = (data) => {
    console.log(data);
    createChampionship({ ...data });
  };

  return (
    <main className="">
      <h1 className="text-center text-zinc-50 text-3xl">Campeonatos</h1>
      <section className="flex justify-center w-full">
        <div className="w-[50%] flex flex-col items-center">
          <h2 className="text-zinc-50 text-2xl text-center">Cadastrar</h2>
          <Form {...form}>
            <form
              className="flex items-center flex-col gap-3 w-fit"
              onSubmit={form.handleSubmit(submit)}
            >
              <InputComponent
                label="Nome"
                placeholder="Digite o nome"
                {...form.register("name")}
              />

              <InputComponent
                label="Descrição"
                placeholder="Digite a descrição"
                {...form.register("description")}
              />
              <InputComponent
                label="Formato"
                placeholder="Digite a formato"
                {...form.register("format")}
              />
              <InputComponent
                label="Número de partidas"
                placeholder="Digite"
                type="number"
                {...form.register("numbersOfMatches")}
              />
              <FormField
                control={form.control}
                name="beginDate"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <DatePicker label="Data de inicio" {...field} />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <DatePicker label="Data de fim" {...field} />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gameId"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <CustomSelect
                      placeholder="Selecione o jogo"
                      label="Jogo"
                      data={data || []}
                      {...field}
                    />
                  </FormItem>
                )}
              />

              <Button type="submit">Criar</Button>
            </form>
          </Form>
        </div>
        <div className="w-[50%]">tabela</div>
      </section>
    </main>
  );
}
