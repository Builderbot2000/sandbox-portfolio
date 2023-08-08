import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import MemberInfoDisplay from "./components/About/MemberInfoDisplay.tsx";
import OtherInfoDisplay from "./components/About/OtherInfoDisplay.tsx";
import { memberProfiles } from "./configs/data-config.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path=""
            element={
              <MemberInfoDisplay
                name={memberProfiles[0].name}
                avatarSrc={memberProfiles[0].avatarSrc}
                position={memberProfiles[0].position}
                quote={memberProfiles[0].quote}
                email={memberProfiles[0].email}
                stack={memberProfiles[0].stack}
              />
            }
          />
          {memberProfiles.map((curr, i) => {
            if (i % 2 == 0)
              return (
                <Route
                  key={i}
                  path={`${curr.entryPath}`}
                  element={
                    <MemberInfoDisplay
                      name={curr.name}
                      avatarSrc={curr.avatarSrc}
                      position={curr.position}
                      quote={curr.quote}
                      email={curr.email}
                      stack={curr.stack}
                    />
                  }
                />
              );
            else
              return (
                <Route
                  key={i}
                  path={`${curr.entryPath}`}
                  element={
                    <OtherInfoDisplay
                      name={curr.name}
                      avatarSrc={curr.avatarSrc}
                      position={curr.position}
                      quote={curr.quote}
                      email={curr.email}
                      stack={curr.stack}
                    />
                  }
                />
              );
          })}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
