import { Route, Routes } from "react-router";
import { GamesPage } from ".";
import { RouteNotFound } from "@/routes/error/RouteNotFound";

export function Router() {
  return (
    <Routes>
      <Route index element={<GamesPage />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
}
