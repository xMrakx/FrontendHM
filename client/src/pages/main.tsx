import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ExchangerTable from "../components/ExchangerTable/ExchangerTable";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExchangerTable />
  </StrictMode>,
);
