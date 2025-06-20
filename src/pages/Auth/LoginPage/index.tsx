import { Button } from "@/components/ui/button";
import { InputComponent } from "@/customComponents/InputComponent";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

export function LoginPage() {
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="flex items-center justify-between w-full min-h-screen gap-2">
      <div className="flex min-h-screen min-w-300 bg-[url(@/assets/art.svg)]"></div>
      <div className="flex items-center justify-center h-full w-full">
        <form
          className="flex flex-col items-center justify-center gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputComponent
            label="Nome"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          <InputComponent
            label="Senha"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <Button className="bg-blue-700 w-100 p-0">Enviar</Button>
        </form>
      </div>
    </div>
  );
}
