import { Grid } from "@mui/material";
import { RefObject } from "react";
import TeamAbout from "./TeamAbout";
import MemberAbout from "./MemberAbout";

const AboutDisplay = ({
  anchorRef,
}: {
  anchorRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={anchorRef}>
      <Grid
        container
        direction="row"
        sx={{ mb: 0, height: 800, backgroundColor: "#254952" }}
      >
        <Grid item xs={4} sx={{ border: 0, borderColor: "white" }}>
          <TeamAbout />
        </Grid>
        <Grid item xs={8} sx={{ border: 0, borderColor: "white" }}>
          <MemberAbout />
        </Grid>
      </Grid>
      <div className="about-curved-separator" style={{ height: 50 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <path
            d="M 300 0 
            L 1300 0
            L 1300 50
            L 300 50"
            stroke="red"
            fill="white"
            strokeWidth="0"
            fillOpacity="1"
          />
          <path
            d="M 0 0 
            L 1600 0 
            M 0 0
            L 0 50
            C 800 50 800 0 1600 0"
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
