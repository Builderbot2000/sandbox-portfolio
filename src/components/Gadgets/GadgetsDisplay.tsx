import { RefObject } from "react";
import { Box, Grid } from "@mui/material";

import GadgetCard from "./GadgetCard";
import { projectProfiles } from "../../configs/data-config";

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
          {projectProfiles.map((curr, i) => {
            if (!curr)
              return (
                <Grid item key={i}>
                  <GadgetCard blank threshold={calculateThreshold(i)} />
                </Grid>
              );
            return (
              <Grid item key={i}>
                <GadgetCard
                  name={curr.name}
                  disabled={curr.disabled}
                  description={curr.description}
                  pictureSrc={curr.pictureSrc}
                  githubLink={curr.githubLink}
                  demoLink={curr.demoLink}
                  threshold={calculateThreshold(i)}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default GadgetsDisplay;
