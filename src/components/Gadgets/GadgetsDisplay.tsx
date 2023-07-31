import { RefObject } from "react";
import { Box, Grid } from "@mui/material";

import GadgetCard from "./GadgetCard";

const GadgetsDisplay = ({
  anchorRef,
}: {
  anchorRef: RefObject<HTMLDivElement>;
}) => {
  const thresholdStart = 300;
  const thresholdStepSize = 300;
  const calculateThreshold = (index: number) => {
    return thresholdStart + index * thresholdStepSize;
  };

  return (
    <div ref={anchorRef}>
      <Box sx={{ width: "100%", border: 0, borderColor: "white" }}>
        <Grid container spacing={0} direction="column" alignItems="center">
          <Grid item>
            <GadgetCard
              title="job filter"
              description="Web scraper that filters down postings from job boards based on user set parameters"
              link="http://www.google.com"
              githubLink="https://github.com/Builderbot2000/job-scraper"
              imagePath="/static/images/job-boards.png"
              threshold={calculateThreshold(0)}
            />
          </Grid>
          <Grid item>
            <GadgetCard
              title="map master"
              description="Roleplay map management system that automatically handles player request for map changes"
              link="http://www.google.com"
              imagePath="/static/images/tutoriala.jpg"
              disabled
              threshold={calculateThreshold(1)}
            />
          </Grid>
          <Grid item>
            <GadgetCard blank threshold={calculateThreshold(2)} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default GadgetsDisplay;
