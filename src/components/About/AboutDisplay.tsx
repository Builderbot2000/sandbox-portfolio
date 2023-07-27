import { Grid } from "@mui/material";
import { RefObject } from "react";

import TeamAbout from "./TeamAbout";
import MemberAbout from "./MemberAbout";
import backgroundVideo from "../../../static/videos/mountain_aerial.mp4";

const AboutDisplay = ({
  anchorRef,
}: {
  anchorRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={anchorRef}>
      <video
        src={backgroundVideo}
        height={800}
        width={1600}
        autoPlay
        loop
        muted
        style={{ display: "block", objectFit: "cover" }}
      />
      <Grid
        container
        direction="row"
        sx={{
          height: 800,
          backgroundColor: "#00000008",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Grid item xs={4} sx={{ border: 0, borderColor: "white" }}>
          <TeamAbout />
        </Grid>
        <Grid item xs={8} sx={{ border: 0, borderColor: "white" }}>
          <MemberAbout />
        </Grid>
      </Grid>
      <div className="about-curved-separator" style={{ height: 100 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <path
            d="M 300 50 
            L 1300 50
            L 1300 100
            L 300 100"
            stroke="red"
            fill="white"
            strokeWidth="0"
            fillOpacity="1"
          />
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
    </div>
  );
};

export default AboutDisplay;
