import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import DisabledGadgetOverlay from "./DisabledGadgetOverlay";

const GadgetCard = ({
  title,
  description,
  link,
  imagePath,
  disabled = false,
  blank = false,
}: {
  title?: string;
  description?: string;
  link?: string;
  imagePath?: string;
  disabled?: boolean;
  blank?: boolean;
}) => {
  const handleCardClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!disabled && !blank) {
      event.preventDefault();
      window.open(link);
    }
  };

  if (blank)
    return (
      <>
        <Card
          sx={{
            position: "relative",
            borderRadius: 0,
            maxWidth: 1000,
            transition: "transform 0.15s ease-in-out",
            "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
          }}
        >
          <CardActionArea sx={{ width: 1000, height: 300 }}>
            <Grid container>
              <Grid item xs={6}></Grid>
              {disabled ? <DisabledGadgetOverlay /> : null}
              <Grid item xs={6}>
                <CardContent
                  sx={{ backgroundColor: "silver", height: 300 }}
                ></CardContent>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </>
    );

  return (
    <>
      <Card
        sx={{
          position: "relative",
          borderRadius: 0,
          maxWidth: 1000,
          transition: "transform 0.15s ease-in-out",
          "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        }}
        onClick={handleCardClick}
      >
        <CardActionArea>
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
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </>
  );
};

export default GadgetCard;
