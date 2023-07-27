import { Card, CardContent, Grid, Typography } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";

const DisabledGadgetOverlay = () => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bgcolor: "rgba(0, 0, 0, 0.54)",
        color: "white",
        padding: "0px",
      }}
    >
      <CardContent sx={{ height: 0.95 }}>
        <Grid
          container
          display="flex"
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ height: 1 }}
        >
          <Grid item>
            <ConstructionIcon sx={{ fontSize: "500%" }} />
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              sx={{
                ml: 2,
                mb: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
                wordWrap: "break-word",
              }}
            >
              This gadget is still under development...
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DisabledGadgetOverlay;
