import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SaasStyle } from "./screens/SaasStyle";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <SaasStyle />
  </StrictMode>,
);
