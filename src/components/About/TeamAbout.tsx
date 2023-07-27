import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const TeamAbout = () => {
  return (
    <Box sx={{ pt: 15 }}>
      <Paper
        elevation={6}
        sx={{
          m: 5,
          p: 5,
          borderRadius: 5,
          backgroundColor: "silver",
          minHeight: 400,
        }}
      >
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
          Team Evergreen
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
          We are a ...
        </Typography>
      </Paper>
    </Box>
  );
};

export default TeamAbout;
