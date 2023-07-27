import { RefObject } from "react";
import { Grid } from "@mui/material";

import GadgetCard from "./GadgetCard";

const GadgetsDisplay = ({
  anchorRef,
}: {
  anchorRef: RefObject<HTMLDivElement>;
}) => {
  return (
    <div ref={anchorRef}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        sx={{ mt: 0 }}
      >
        <Grid item>
          <GadgetCard
            title="job filter"
            description="Web scraper that filters down postings from job boards based on user set parameters"
            link="http://www.google.com"
            imagePath="/static/images/job-boards.png"
          />
        </Grid>
        <Grid item>
          <GadgetCard
            title="map master"
            description="Roleplay map management system that automatically handles player request for map changes"
            link="http://www.google.com"
            imagePath="/static/images/tutoriala.jpg"
            disabled
          />
        </Grid>
        <Grid item>
          <GadgetCard blank />
        </Grid>
      </Grid>
    </div>
  );
};

export default GadgetsDisplay;
