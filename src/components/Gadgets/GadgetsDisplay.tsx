import { RefObject } from "react";
import { Box, Grid } from "@mui/material";

import GadgetCard from "./GadgetCard";
import { projectProfiles } from "../../configs/data-config";
import FooterDisplay from "../Footer/FooterDisplay";

const GadgetsDisplay = ({
  anchorRef,
}: {
  anchorRef: RefObject<HTMLDivElement>;
}) => {
  const thresholdStart =
    window.innerWidth > 1000
      ? window.innerWidth / (16 / 9) / 2
      : window.innerWidth / (16 / 9);
  const thresholdStepSize =
    window.innerWidth > 1000 ? 200 : window.innerWidth / (24 / 9);
  // console.log("start:", thresholdStart, " step:", thresholdStepSize);
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
      <FooterDisplay threshold={calculateThreshold(projectProfiles.length)} />
    </div>
  );
};

export default GadgetsDisplay;
