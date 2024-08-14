import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { Suspense } from "react";
import LoadingPages from "./components/LoadingPages/LoadingPages";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <Suspense
      fallback={
        <>
          <LoadingPages />
        </>
      }
    >
      <App />
    </Suspense>
  </HelmetProvider>
);
