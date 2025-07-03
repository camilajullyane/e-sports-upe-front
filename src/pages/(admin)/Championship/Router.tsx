import { RouteNotFound } from "@/routes/error/RouteNotFound";
import type { ReactElement } from "react";
import { Route, Routes } from "react-router";
import { ChampionshipAdmin } from ".";

export function Router(): ReactElement {
  return (
    <Routes>
      <Route index element={<ChampionshipAdmin />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
}
