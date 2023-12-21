import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Route } from "./Routes/Route";
import AuthProviders from "./Providers/AuthProviders";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="font-workSans">
      <HelmetProvider>
        <AuthProviders>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={Route}></RouterProvider>
          </QueryClientProvider>
        </AuthProviders>
      </HelmetProvider>
    </div>
  </React.StrictMode>
);
