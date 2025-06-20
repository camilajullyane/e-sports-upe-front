import { Button } from "@/components/ui/button";
import { InputComponent } from "@/customComponents/InputComponent";
import { LoginSchema, type LoginFields } from "@/types/authTypes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";

export function LoginPage() {
  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  return (
    <div className="flex items-center justify-between w-full min-h-screen gap-2">
      <div className="flex min-h-screen min-w-300 bg-[url(@/assets/art.svg)]"></div>
      <div className="flex items-center justify-center h-full w-full">
        <form
          className="flex flex-col items-center justify-center gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputComponent
            label="Email"
            placeholder="Digite seu email"
            {...register("email")}
            errorMessage={errors.email?.message}
          />
          <InputComponent
            label="Senha"
            placeholder="Digite sua senha"
            {...register("password")}
            errorMessage={errors.password?.message}
          />

          <Button className="bg-blue-700 w-full p-0" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}
