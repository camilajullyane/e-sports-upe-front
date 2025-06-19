import { Routes, Route, Navigate } from "react-router";
import { PublicRoute } from "./PublicRoute";
import { LoginPage } from "../pages/Auth/LoginPage";
import { SignUpPage } from "../pages/Auth/SignUpPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { HomePage } from "../pages/Home";

export function Router() {
  const authRoutes = (
    <Route element={<PublicRoute />}>
      <Route index element={<Navigate to="login" />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
    </Route>
  );

  const protectedRoutes = (
    <Route element={<ProtectedRoute />}>
      <Route path="home" element={<HomePage />} />
    </Route>
  );

  return <Routes>{authRoutes}</Routes>;
}
