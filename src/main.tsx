import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { Router } from "./routes/index.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClientInstance } from "./lib/tanstack.ts";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={QueryClientInstance}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
    <ToastContainer className="text-14px" />
  </StrictMode>
);
