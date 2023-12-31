import { useCallback, useRef } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import { loadSlim } from "tsparticles-slim";

import ResponsiveAppBar from "./components/ResponsiveAppBar";
import particlesConfig from "./configs/particles-config";
import GadgetsDisplay from "./components/Gadgets/GadgetsDisplay";
import AboutDisplay from "./components/About/AboutDisplay";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

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
    async (_container: Container | undefined) => {
      // eslint-disable-next-line @typescript-eslint/await-thenable
      // await console.log(container);
    },
    []
  );

  const aboutRef = useRef(null);
  const gadgetsRef = useRef(null);

  let theme = createTheme();
  // console.log("before: ", theme.typography.body1.fontSize);
  theme = responsiveFontSizes(theme);
  // console.log("after: ", theme.typography.body1.fontSize);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar refs={[gadgetsRef, aboutRef]} />
        <AboutDisplay anchorRef={aboutRef} />
        <GadgetsDisplay anchorRef={gadgetsRef} />
      </ThemeProvider>
    </>
  );
};

export default App;
