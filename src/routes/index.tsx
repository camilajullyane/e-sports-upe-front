import { Routes, Route, Navigate } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import { authStore } from "@/store/auth.store";
import { Suspense, lazy } from "react";
import { CircularProgress } from "@/customComponents/CircularProgress";

const HomePageRouter = lazy(() =>
  import("@/pages/Home/Router").then((module) => ({
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

export function Router() {
  const { logged } = authStore().load();
  // const credetentials = authStore().getCredentials();

  const authRoutes = (
    <Route element={<PublicRoute />}>
      <Route index element={<Navigate to="signin" />} />
      <Route path="signin/*" element={<LoginPageRouter />} />
      <Route path="signup/*" element={<SignUpPageRouter />} />
    </Route>
  );

  const protectedRoutes = (
    <Route element={<ProtectedRoute />}>
      <Route path="home/*" element={<HomePageRouter />} />
      <Route path="championship/*" element={<ChampionshipPageRouter />} />
      <Route path="team/*" element={<TeamPageRouter />} />
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
          {protectedRoutes}
        </Route>
      </Routes>
    </Suspense>
  );
}
