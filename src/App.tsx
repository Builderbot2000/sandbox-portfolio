import { useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import { loadSlim } from "tsparticles-slim";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import particlesConfig from "./configs/particles-config";

const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    // await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (container: Container | undefined) => {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      // await console.log(container);
    },
    []
  );

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<div>discover</div>} />
          <Route path="/gadgets" element={<div>gadgets</div>} />
          <Route path="/about" element={<div>about</div>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
