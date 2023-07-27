import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import KevinInfoDisplay from "./components/About/KevinInfoDisplay.tsx";
import TemplateInfoDisplay from "./components/About/TemplateInfoDisplay.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<TemplateInfoDisplay />} />
          <Route path="kevin" element={<KevinInfoDisplay />} />
          <Route path="template" element={<TemplateInfoDisplay />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
