import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import MemberInfoDisplay from "./components/About/MemberInfoDisplay.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="kevin" element={<MemberInfoDisplay />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
