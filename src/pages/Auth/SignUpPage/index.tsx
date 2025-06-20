import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { SignUpSchema, type SignUpFields } from "@/types/authTypes";
import { InputComponent } from "@/customComponents/InputComponent";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-sentinelas.png";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit: SubmitHandler<SignUpFields> = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFields>({
    resolver: zodResolver(SignUpSchema),
  });

  return (
    <div className="flex items-center justify-between w-full min-h-screen gap-2">
      <div className="flex min-h-screen min-w-300 bg-[url(@/assets/art.svg)]"></div>
      <div className="flex items-center justify-center h-full w-full">
        <form
          className="flex flex-col items-center justify-center gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <img src={logo} alt="Logo Sentinelas" className="w-50 mb-4" />
          <div className="flex gap-8 mb-4">
            <button
              className="text-white font-bold text-xl"
              type="button"
              onClick={() => navigate("/signin")}
            >
              Entrar
            </button>
            <button
              className="text-blue-500 font-bold border-b-2 border-blue-700 text-xl"
              type="button"
              disabled
            >
              Cadastrar
            </button>
          </div>

          <InputComponent
            label="Nome"
            placeholder="Digite seu nome"
            {...register("name")}
            errorMessage={errors.name?.message}
          />
          <InputComponent
            label="Email"
            placeholder="Digite seu email"
            {...register("email")}
            errorMessage={errors.email?.message}
          />
          <InputComponent
            label="Senha"
            placeholder="Digite sua senha"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            errorMessage={errors.password?.message}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-white" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            }
          />
          <InputComponent
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword")}
            errorMessage={errors.confirmPassword?.message}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowConfirmPassword((v) => !v)}
                tabIndex={-1}
                aria-label={
                  showConfirmPassword ? "Ocultar senha" : "Mostrar senha"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-white" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            }
          />
          <Button className="bg-blue-700 w-full p-0" type="submit">
            Criar Conta
          </Button>
        </form>
      </div>
    </div>
  );
}
