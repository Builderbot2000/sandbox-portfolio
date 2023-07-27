import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ForestIcon from "@mui/icons-material/Forest";
import { RefObject } from "react";

function ResponsiveAppBar({
  refs,
}: {
  refs: Array<RefObject<HTMLDivElement>>;
}) {
  return (
    <Box sx={{ position: "fixed", width: 1, height: 150, zIndex: 100 }}>
      <AppBar position="sticky" elevation={0} sx={{ background: "#05472A" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ForestIcon sx={{ fontSize: "400%" }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                ml: 5,
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <pre style={{ fontFamily: "inherit" }}>
                <div>PROJECT</div>
                <div>EVERGREEN</div>
              </pre>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{ ml: 5, my: 2, color: "white", display: "block" }}
                onClick={() => refs[0].current?.scrollIntoView()}
              >
                <Typography
                  variant="h6"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "white",
                    textDecoration: "none",
                    wordWrap: "break-word",
                  }}
                >
                  {" "}
                  Gadgets{" "}
                </Typography>
              </Button>
              <Button
                sx={{ ml: 5, my: 2, color: "white", display: "block" }}
                onClick={() => refs[1].current?.scrollIntoView()}
              >
                <Typography
                  variant="h6"
                  sx={{
                    display: { xs: "none", md: "flex" },
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
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="appbar-curved-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="50"
          preserveAspectRatio="none"
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
