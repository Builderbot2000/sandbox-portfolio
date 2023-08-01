import { Grid, Box } from "@mui/material";
import { RefObject } from "react";

import TeamAbout from "./TeamAbout";
import MemberAbout from "./MemberAbout";
import backgroundVideo from "../../../public/mountain_aerial.mp4";

const AboutDisplay = ({
  anchorRef,
}: {
  anchorRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={anchorRef}>
      <Box
        width="100vw"
        sx={{
          position: "absolute",
          aspectRatio: "16/9",
          top: 0,
          left: 0,
          border: 0,
          borderColor: "purple",
          zIndex: 2,
        }}
      >
        <video
          src={backgroundVideo}
          height="100%"
          width="100%"
          autoPlay
          loop
          muted
          style={{
            display: "block",
            objectFit: "cover",
            zIndex: 2,
          }}
        />
      </Box>
      <Box
        width="100vw"
        sx={{
          border: 0,
          borderColor: "yellow",
          background: "#254952",
          zIndex: 1,
        }}
      >
        <Grid
          container
          direction="row"
          sx={{
            width: 1,
            height: "inherit",
            backgroundColor: "#00000008",
            zIndex: 1000,
            border: 0,
            borderColor: "red",
          }}
        >
          <Grid
            item
            md={4}
            xs={12}
            sx={{ zIndex: "inherit", border: 0, borderColor: "white" }}
          >
            <TeamAbout />
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
            sx={{ zIndex: "inherit", border: 0, borderColor: "white" }}
          >
            <MemberAbout />
          </Grid>
        </Grid>
      </Box>
      <Box
        width="100vw"
        sx={{ mb: 5, aspectRatio: "17/1", border: 0, borderColor: "white" }}
      >
        <div className="about-curved-separator" style={{ height: "100%" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1600 100"
            preserveAspectRatio="none"
            style={{ border: 0, borderColor: "white" }}
          >
            <path
              d="M 0 0 
            L 1600 0 
            L 1600 50
            M 0 0            
            L 0 100
            C 800 100 800 50 1600 50"
              stroke="red"
              fill="#254952"
              strokeWidth="0"
              fillOpacity="1"
            />
          </svg>
        </div>
      </Box>
    </div>
  );
};

export default AboutDisplay;
