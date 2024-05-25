import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

document.addEventListener("DOMContentLoaded", () => {
  const queryClient = new QueryClient();
  ReactDOM.createRoot(document.getElementById("reactMountPoint")).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
});
