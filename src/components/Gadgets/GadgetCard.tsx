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

const GadgetCard = ({
  title,
  description,
  link,
  githubLink,
  imagePath,
  disabled = false,
  blank = false,
  threshold,
}: {
  title?: string;
  description?: string;
  link?: string;
  githubLink?: string;
  imagePath?: string;
  disabled?: boolean;
  blank?: boolean;
  threshold: number;
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
  });

  const handlePlayClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!disabled && !blank) {
      event.preventDefault();
      window.open(link);
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
      <Slide direction="left" in={trigger} timeout={1000}>
        <Card
          className="gadget-card"
          sx={{
            position: "relative",
            borderRadius: 0,
            maxWidth: 1000,
            transition: "transform 0.15s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
          }}
        >
          <Box sx={{ width: 1000, height: 300 }}>
            <Grid container>
              <Grid item xs={6}></Grid>
              {disabled ? <DisabledGadgetOverlay /> : null}
              <Grid item xs={6}>
                <CardContent
                  sx={{ backgroundColor: "silver", height: 300 }}
                ></CardContent>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Slide>
    );

  return (
    <Slide direction="left" in={trigger} timeout={1000}>
      <Card
        className="gadget-card"
        sx={{
          position: "relative",
          borderRadius: 0,
          maxWidth: 1000,
          transition: "transform 0.15s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              height="300"
              image={imagePath}
              alt="N/A"
            />
          </Grid>
          {disabled ? <DisabledGadgetOverlay /> : null}
          <Grid item xs={6}>
            <CardContent sx={{ backgroundColor: "silver", height: 1 }}>
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                sx={{ height: 0.9 }}
              >
                <Grid item>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      display: { xs: "none", md: "flex" },
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
                    {title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    sx={{
                      ml: 2,
                      mb: 2,
                      display: { xs: "none", md: "flex" },
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
                      <GitHubIcon sx={{ fontSize: 70 }} />
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
                      <PlayCircleOutlineIcon sx={{ fontSize: 70 }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Slide>
  );
};

export default GadgetCard;
