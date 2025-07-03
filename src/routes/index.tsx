import { Routes, Route, Navigate } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import { authStore } from "@/store/auth.store";
import { Suspense, lazy } from "react";
import { CircularProgress } from "@/customComponents/CircularProgress";
import { MainLayout } from "@/layout/MainLayout";

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
          <Route element={<MainLayout />}>{adminProtectedRoutes}</Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
