import { RefObject } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
  Grid,
} from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";

function ResponsiveAppBar({
  refs,
}: {
  refs: Array<RefObject<HTMLDivElement>>;
}) {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100vw",
        zIndex: 100,
        border: 0,
        borderColor: "white",
      }}
    >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "#05472A",
          border: 0,
          borderColor: "red",
        }}
      >
        <Container maxWidth="xl" sx={{ border: 0, borderColor: "blue" }}>
          <Toolbar disableGutters sx={{ border: 0, borderColor: "blue" }}>
            <ForestIcon fontSize="large" />
            <Typography
              variant="h6"
              component="a"
              sx={{
                ml: 5,
                mr: 2,
                width: "fit-content",
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                textTransform: "uppercase",
                border: 0,
                borderColor: "brown",
              }}
            >
              Project Evergreen
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              sx={{
                flexGrow: 1,
                border: 0,
                borderColor: "white",
              }}
            >
              <Grid item>
                <Button
                  sx={{ color: "white", display: "block" }}
                  onClick={() =>
                    refs[0].current?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                >
                  <Typography
                    sx={{
                      display: "flex",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "white",
                      textDecoration: "none",
                      wordWrap: "break-word",
                    }}
                  >
                    Gadgets
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{ color: "white", display: "block" }}
                  onClick={() =>
                    refs[1].current?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                >
                  <Typography
                    sx={{
                      display: "flex",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "white",
                      textDecoration: "none",
                      wordWrap: "break-word",
                    }}
                  >
                    About
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="appbar-curved-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 1600 50"
        >
          <path
            d="M 0 0 
            L 1600 0 
            L 1600 50
            C 800 50 800 0 0 0"
            stroke="red"
            fill="#05472A"
            strokeWidth="0"
            fillOpacity="1"
          />
        </svg>
      </div>
    </Box>
  );
}
export default ResponsiveAppBar;
