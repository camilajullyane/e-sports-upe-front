import { Routes, Route, Navigate } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { LoginPage } from "../pages/Auth/LoginPage";
import { SignUpPage } from "../pages/Auth/SignUpPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { HomePage } from "../pages/Home";
import { authStore } from "@/store/auth.store";
import { Championship } from "@/pages/Championship";
import { Team } from "@/pages/Team";

export function Router() {
  const { logged } = authStore().load();
  const credetentials = authStore().getCredentials();

  const authRoutes = (
    <Route element={<PublicRoute />}>
      <Route index element={<Navigate to="signin" />} />
      <Route path="signin" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
    </Route>
  );

  const protectedRoutes = (
    <Route element={<ProtectedRoute />}>
      <Route path="home" element={<HomePage />} />
      <Route path="championship" element={<Championship />} />
      <Route path="team" element={<Team />} />
    </Route>
  );

  return (
    <Routes>
      {authRoutes}

      <Route
        element={logged ? <ProtectedRoute /> : <Navigate to={"/signin"} />}
      >
        {protectedRoutes}
      </Route>
    </Routes>
  );
}
