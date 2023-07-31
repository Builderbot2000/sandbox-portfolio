import { Box, Grow, Typography, useScrollTrigger } from "@mui/material";
import { version } from "../../configs/data-config";

const FooterDisplay = ({ threshold }: { threshold: number }) => {
  const trigger = useScrollTrigger({ threshold: threshold });

  return (
    <Grow in={trigger} timeout={1000}>
      <Box
        width="100vw"
        sx={{ mt: 5, aspectRatio: "17/1", border: 0, borderColor: "white" }}
      >
        <div className="footer-curved-separator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1600 100"
            style={{ verticalAlign: "top", display: "block" }}
          >
            <path
              d="M 0 80
            C 100 70 150 20 200 10
            C 250 5 300 70 400 50
            C 500 20 600 40 700 60
            C 870 95 900 98 1000 50
            C 1050 30 1070 15 1100 10
            C 1200 0 1300 45 1400 80
            C 1440 100 1500 70 1520 60
            C 1550 50 1580 20 1600 30
            L 1600 100
            L 0 100"
              stroke="red"
              fill="#A14A21"
              strokeWidth="0"
              fillOpacity="1"
            />
          </svg>
          <Box
            sx={{
              width: 1,
              height: 30,
              backgroundColor: "#A14A21",
              display: "flex",
              direction: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
                wordWrap: "break-word",
              }}
            >
              {`v${version.toPrecision(2)}`}
            </Typography>
          </Box>
        </div>
      </Box>
    </Grow>
  );
};

export default FooterDisplay;
