import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CompanyForm from "../CompanyForm.jsx";

// import CompanyForm from "./CompanyForm.jsx";

// import "/form.css";
// import Signup from "./Signup.jsx";
// import Post from "./Post.jsx";
// import ForLogin from "./ForLogin.jsx";
// import Users from "./Users.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/company" element={<CompanyForm />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/post" element={<Post />} /> */}
        {/* <Route path="/login" element={<ForLogin />} /> */}
        {/* <Route path="/users" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
