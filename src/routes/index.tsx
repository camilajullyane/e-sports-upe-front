import { Routes, Route, Navigate, useNavigate } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import { authStore } from "@/store/auth.store";
import { Suspense, lazy, useEffect } from "react";
import { CircularProgress } from "@/customComponents/CircularProgress";
import { MainLayout } from "@/layout/MainLayout";
import { api } from "@/lib/axios";
import { AxiosError, isAxiosError } from "axios";
import { toast } from "react-toastify";

const InitialPageRouter = lazy(() =>
  import("@/pages/Initial/Router").then((module) => ({
    default: module.Router,
  }))
);

const GamesPageRouter = lazy(() =>
  import("@/pages/Games/Router").then((module) => ({
    default: module.Router,
  }))
);

const ChampionshipPageRouter = lazy(() =>
  import("@/pages/Championship/Router").then((module) => ({
    default: module.Router,
  }))
);

const TeamPageRouter = lazy(() =>
  import("@/pages/Team/Router").then((module) => ({
    default: module.Router,
  }))
);

const LoginPageRouter = lazy(() =>
  import("@/pages/Auth/LoginPage/Router").then((module) => ({
    default: module.Router,
  }))
);

const SignUpPageRouter = lazy(() =>
  import("@/pages/Auth/SignUpPage/Router").then((module) => ({
    default: module.Router,
  }))
);

const ChampionshipAdmin = lazy(() =>
  import("@/pages/(admin)/Championship/Router").then((module) => ({
    default: module.Router,
  }))
);

export function Router() {
  const { logged } = authStore().load();
  const user = authStore().user;

  const navigate = useNavigate();

  useEffect(() => {
    const responseInterceptor = api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: Error | AxiosError) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;

          if (status === 401) {
            toast.error("Você não tem autorização para acessar essa página.");
            sessionStorage.clear();
            navigate("/login", { replace: true });
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate]);

  const authRoutes = (
    <Route element={<PublicRoute />}>
      <Route index element={<InitialPageRouter />} />
      <Route path="signin/*" element={<LoginPageRouter />} />
      <Route path="signup/*" element={<SignUpPageRouter />} />
    </Route>
  );

  const studentProtectedRoutes = (
    <Route element={<ProtectedRoute />}>
      <Route path="game/:gameId/*" element={<GamesPageRouter />} />
      <Route
        path="championship/:championshipId/*"
        element={<ChampionshipPageRouter />}
      />
      <Route path="team/*" element={<TeamPageRouter />} />
    </Route>
  );

  const adminProtectedRoutes = (
    <Route path="admin" element={<ProtectedRoute />}>
      <Route path="campeonato/*" element={<ChampionshipAdmin />} />
    </Route>
  );

  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex items-center justify-center">
          <CircularProgress />
        </div>
      }
    >
      <Routes>
        {authRoutes}

        <Route
          element={logged ? <ProtectedRoute /> : <Navigate to={"/signin"} />}
        >
          <Route element={<MainLayout />}>
            {user && user.role == "STUDENT"
              ? studentProtectedRoutes
              : adminProtectedRoutes}
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
