import { Box, Paper, Typography } from "@mui/material";

const TeamAbout = () => {
  return (
    <Box
      sx={{
        pt: 10,
        border: 0,
        borderColor: "white",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          m: 5,
          p: 2,
          borderRadius: 5,
          backgroundColor: "silver",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            display: "flex",
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
            display: "flex",
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
