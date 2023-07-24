import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ForestIcon from "@mui/icons-material/Forest";
import { Link } from "react-router-dom";

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ForestIcon />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 3,
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
              component={Link}
              to="/"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Discover
            </Button>
            <Button
              component={Link}
              to="/gadgets"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Gadgets
            </Button>
            <Button
              component={Link}
              to="/about"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
