import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CompanyForm from "./CompanyForm.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CompanyForm />
  </StrictMode>
);
