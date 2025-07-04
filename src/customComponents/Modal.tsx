import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InputComponent } from "./InputComponent";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTeamSchema, type CreateTeamFields } from "@/types/teamTypes";
import { useRegisterTeamMutation } from "@/mutations/registerTeam.mutation";
import type { ChampionshipType } from "@/types/championshipTypes";
import { toast } from "react-toastify";
import { QueryClientInstance } from "@/lib/tanstack";
// import { Championship } from "@/pages/Championship";

interface ModalProps {
  championshipInfo: ChampionshipType;
}

export function Modal({ championshipInfo }: ModalProps) {
  const { mutateAsync: registerTeamFn } = useRegisterTeamMutation({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateTeamFields>({
    resolver: zodResolver(CreateTeamSchema),
    defaultValues: {
      teamName: "",
      ...Object.fromEntries(
        Array.from({ length: championshipInfo.numPlayersByTeam }).map(
          (_, idx) => [`member${idx + 1}`, ""]
        )
      ),
    },
  });

  const onSubmit: SubmitHandler<CreateTeamFields> = (data) => {
    const { teamName, ...membersObj } = data;
    const teamMembers = Object.keys(membersObj)
      .filter((key) => key.startsWith("member"))
      .map((key) => membersObj[key])
      .filter(Boolean);

    const request = { name: teamName, teamMembers: teamMembers };

    registerTeamFn({ request, championshipId: championshipInfo.id })
      .then(() => {
        toast.success("Equipe inscrita com sucesso!");
        QueryClientInstance.invalidateQueries({
          queryKey: ["GET-CHAMPIONSHIP-INFO"],
        });
        reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer border-none">
          Inscreva sua equipe
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[95vh]">
        <DialogHeader>
          <DialogTitle className="text-zinc-50">
            Preencha as informações do seu time
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col justify-between items-center gap-4">
          <form
            className="flex flex-col items-center w-full justify-center gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputComponent
              label="Nome da equipe"
              placeholder="Digite o nome da equipe"
              {...register("teamName")}
              errorMessage={errors.teamName?.message}
            />

            {Array.from({ length: championshipInfo.numPlayersByTeam }).map(
              (_, idx) => (
                <InputComponent
                  label={`Jogador ${idx + 1}`}
                  placeholder="Digite o nome do jogador"
                  {...register(`member${idx + 1}`)}
                  errorMessage={errors[`member${idx + 1}`]?.message}
                />
              )
            )}

            <div className="flex gap-4 ">
              <Button
                type="submit"
                className="ext-zinc-50 cursor-pointer hover:bg-green-400 rounded-[4px]"
              >
                Salvar
              </Button>
              <DialogClose asChild>
                <Button className="text-zinc-50 cursor-pointer hover:bg-red-400">
                  Cancelar
                </Button>
              </DialogClose>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
