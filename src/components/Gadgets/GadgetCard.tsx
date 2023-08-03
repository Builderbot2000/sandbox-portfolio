import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Slide,
  IconButton,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import GitHubIcon from "@mui/icons-material/GitHub";

import DisabledGadgetOverlay from "./DisabledGadgetOverlay";
import { GadgetProps } from "../../types/types";

const GadgetCard = ({
  name,
  description,
  demoLink,
  githubLink,
  pictureSrc,
  disabled = false,
  blank = false,
  threshold,
}: GadgetProps) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
  });

  const handlePlayClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!disabled && !blank) {
      event.preventDefault();
      window.open(demoLink);
    }
  };

  const handleGithubClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!disabled && !blank) {
      event.preventDefault();
      window.open(githubLink);
    }
  };

  if (blank)
    return (
      <Box
        width={window.innerWidth > 1000 ? "60vw" : "80vw"}
        sx={{
          aspectRatio: "24/9",
          boxShadow: 3,
          transition: "transform 0.15s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }}
      >
        <Slide direction="right" in={trigger} timeout={1000}>
          <Card
            className="gadget-card"
            sx={{
              position: "relative",
              borderRadius: 0,
              width: 1,
              height: 1,
            }}
          >
            <Grid container sx={{ height: 1 }}>
              <Grid item xs={6}></Grid>
              {disabled ? <DisabledGadgetOverlay /> : null}
              <Grid item xs={6}>
                <CardContent
                  sx={{ backgroundColor: "silver", height: 1 }}
                ></CardContent>
              </Grid>
            </Grid>
          </Card>
        </Slide>
      </Box>
    );
  if (pictureSrc)
    return (
      <Box
        width={window.innerWidth > 1000 ? "60vw" : "80vw"}
        sx={{
          aspectRatio: "24/9",
          boxShadow: 3,
          transition: "transform 0.15s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }}
      >
        <Slide direction="right" in={trigger} timeout={1000}>
          <Card
            className="gadget-card"
            sx={{
              height: 1,
              maxWidth: 1,
              position: "relative",
              borderRadius: 0,
              border: 0,
              borderColor: "yellow",
            }}
          >
            <Grid
              container
              direction="row"
              sx={{ width: 1, height: 1, border: 0, borderColor: "green" }}
            >
              <Grid item xs={6} sx={{ border: 0, borderColor: "blue" }}>
                <CardMedia
                  component="img"
                  image={`${import.meta.env.BASE_URL}${pictureSrc}`}
                  alt="N/A"
                  sx={{ width: 1, height: 1 }}
                />
              </Grid>
              {disabled ? <DisabledGadgetOverlay /> : null}
              <Grid
                item
                container
                direction="column"
                justifyContent="space-evenly"
                xs={6}
                sx={{
                  border: 0,
                  borderColor: "green",
                  height: 1,
                  width: 1,
                  px: "5%",
                  backgroundColor: "silver",
                }}
              >
                <Grid item sx={{ border: 0 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      display: { md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "white",
                      textDecoration: "none",
                      textTransform: "uppercase",
                      wordWrap: "break-word",
                      justifyContent: "center",
                    }}
                  >
                    {name}
                  </Typography>
                </Grid>
                <Grid item sx={{ border: 0 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      display: { md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".1rem",
                      color: "black",
                      textDecoration: "none",
                      wordWrap: "break-word",
                    }}
                  >
                    {description}
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignContent="flex-end"
                  sx={{ border: 0 }}
                >
                  <Grid item>
                    <IconButton
                      className="github-button"
                      onClick={handleGithubClick}
                    >
                      <GitHubIcon fontSize="large" />
                    </IconButton>
                    <b>
                      <i>Github</i>
                    </b>
                  </Grid>
                  <Grid item>
                    <b>
                      <i>Demo</i>
                    </b>
                    <IconButton
                      className="play-button"
                      onClick={handlePlayClick}
                    >
                      <PlayCircleOutlineIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Slide>
      </Box>
    );
};

export default GadgetCard;
