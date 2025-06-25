import { Button } from "@/components/ui/button";
import { InputComponent } from "@/customComponents/InputComponent";
import { LoginSchema, type LoginFields } from "@/types/authTypes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import logo from "@/assets/logo-sentinelas.png";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useSignInMutation } from "@/mutations/signIn.mutation";
import { authStore } from "@/store/auth.store";
import { toast } from "react-toastify";

export function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { mutateAsync: loginFn } = useSignInMutation({});
  const { authenticate } = authStore();

  const onSubmit: SubmitHandler<LoginFields> = (data) => {
<<<<<<< HEAD
    console.log(data);
    navigate("/home")
=======
    const loginRequest = { email: data.email, password: data.password.trim() };
    loginFn(loginRequest)
      .then((result) => {
        const { token, user } = result;
        authenticate(token, user);
        toast.success("Login realizado com sucesso!");
        navigate("/home");
      })
      .catch((error) => console.log("erro", error));
>>>>>>> origin/main
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({
    resolver: zodResolver(LoginSchema),
  });

  return (
    <div className="flex items-center justify-between w-full min-h-screen gap-2">
      <div className="flex min-h-screen w-full bg-[url(@/assets/art.svg)]"></div>
      <div className="flex flex-col items-center justify-center h-full min-w-150">
        <div className="flex flex-col gap-8 mb-4">
          <div>
            <img src={logo} alt="Logo Sentinelas" className="w-50 mb-4" />
          </div>
          <div className="flex justify-between">
            <button
              className="text-blue-500 font-bold border-b-2 border-blue-700 text-xl cursor-pointe p-2 "
              type="button"
              disabled
            >
              Entrar
            </button>
            <button
              className="text-white font bold text-xl cursor-pointer p-2"
              onClick={() => navigate("/signup")}
              type="button"
            >
              Cadastrar
            </button>
          </div>
        </div>
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
                  <EyeOff className="h-5 w-5 text-gray-400 cursor-pointer" />
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
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
