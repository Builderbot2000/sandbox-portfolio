import { Avatar, Box, Grid, Link, Slide, Typography } from "@mui/material";

import StackIcon from "./StackIcon";
import { MemberProfile } from "../../types/types";

const MemberInfoDisplay = ({
  name,
  avatarSrc,
  position,
  quote,
  email,
  stack,
}: Omit<MemberProfile, "entryPath">) => {
  return (
    <div>
      <Slide
        appear
        in
        mountOnEnter
        unmountOnExit
        direction="down"
        timeout={800}
      >
        <Box>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              width: { xs: "90vw", md: "40vw" },
              border: 0,
            }}
          >
            <Grid item sx={{ width: 1 }}>
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Grid item>
                  <Avatar
                    alt="John Doe"
                    src={`${import.meta.env.BASE_URL}${avatarSrc}`}
                    sx={{
                      width: 120,
                      height: 120,
                      border: 0,
                      borderColor: "#05472A",
                      boxShadow: 3,
                    }}
                  />
                </Grid>
                <Grid
                  item
                  sx={{
                    backgroundColor: "black",
                    borderRadius: 3,
                    boxShadow: 3,
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                  >
                    <Grid item>
                      {" "}
                      <Typography
                        variant="h5"
                        sx={{
                          my: 2,
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
                        {name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      {" "}
                      <Typography
                        sx={{
                          ml: 2,
                          mb: 2,
                          width: 200,
                          display: "flex",
                          fontFamily: "monospace",
                          fontWeight: 700,
                          letterSpacing: ".1rem",
                          color: "white",
                          textDecoration: "none",
                          wordWrap: "break-word",
                        }}
                      >
                        {position}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                  mt: 2,
                  borderRadius: 3,
                  width: 1,
                  backgroundColor: "white",
                  boxShadow: 3,
                  p: 1,
                }}
              >
                <Grid item>
                  <Typography
                    variant="h6"
                    textAlign="center"
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".1rem",
                      color: "black",
                      textDecoration: "none",
                      wordWrap: "break-word",
                      border: 0,
                      px: 1,
                    }}
                  >
                    "{quote}"
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component={Link}
                    href={`mailto: ${email}`}
                    underline="hover"
                    sx={{
                      display: "flex",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".1rem",
                      color: "blue",
                      textDecoration: "none",
                      wordWrap: "break-word",
                      direction: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {`< Contact Me >`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              xs={6}
              sx={{
                width: 0.9,
                borderBottomLeftRadius: 45,
                borderBottomRightRadius: 45,
                backgroundColor: "rgba(255,255,255,0.3)",
                boxShadow: 3,
                border: 0,
              }}
            >
              <Grid item>
                <Typography
                  variant="h5"
                  sx={{
                    mt: 2,
                    display: "flex",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "black",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    wordWrap: "break-word",
                    justifyContent: "center",
                    border: 0,
                  }}
                >
                  Tech Stack
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                alignItems="center"
                sx={{
                  width: 1,
                  p: 2,
                  border: 0,
                }}
              >
                {stack.map((curr, i) => {
                  return (
                    <Grid item key={i}>
                      <StackIcon iconName={curr.name} iconSrc={curr.iconSrc} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Slide>
    </div>
  );
};

export default MemberInfoDisplay;
