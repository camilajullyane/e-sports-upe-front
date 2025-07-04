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
import { useSingUpMutation } from "@/mutations/signup.mutation";
import { toast } from "react-toastify";

export function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { mutateAsync: signUp } = useSingUpMutation({});

  const onSubmit: SubmitHandler<SignUpFields> = (data) => {
    console.log("Dados enviados:", data);
    const signUpRequest = {
      name: data.name.trim(),
      email: data.email,
      password: data.password.trim(),
    };
    console.log("submit");

    signUp(signUpRequest)
      .then(() => {
        toast.success("Cadastro realizado com sucesso! Faça login");
        navigate("/signin");
      })
      .catch((error) => {
        console.log("Deu erro", error);
        toast.error("Erro ao cadastrar: " + (error?.message || "Erro desconhecido"));
      });
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
      <div
        className="flex min-h-screen w-full bg-[url(@/assets/art.svg)]"
        style={{
          boxShadow: "inset 0 40px 180px 40px rgba(0,0,0,0.7)",
        }}
      ></div>
      <div className="flex flex-col items-center justify-center h-full min-w-150">
        <div className="flex flex-col gap-2 mb-4">
          <div>
            <img src={logo} alt="Logo Sentinelas" className="w-50" />
          </div>
          <div className="flex justify-between">
            <button
              className="text-white font bold text-xl cursor-pointer p-2"
              type="button"
              onClick={() => navigate("/signin")}
            >
              Entrar
            </button>
            <button
              className="text-blue-500 font-bold border-b-2 border-blue-700 text-xl cursor-pointe p-2 "
              type="button"
              disabled
            >
              Cadastrar
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center h-full min-w-150">
          <form
            className="flex flex-col items-center justify-center gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                    <EyeOff className="h-5 w-5 text-white cursor-pointer" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 cursor-pointer" />
                  )}
                </button>
              }
            />

            <Button
              className="bg-blue-700 w-full p-0 cursor-pointer hover:bg-blue-800"
              type="submit"
            >
              Criar conta
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
