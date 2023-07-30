import { Avatar, Box, Fade, Grid, Link, Typography } from "@mui/material";
import StackIcon from "./StackIcon";

const BuildersInfoDisplay = () => {
  return (
    <div>
      <Fade in mountOnEnter unmountOnExit timeout={1000}>
        <Box sx={{ width: 500, height: 600 }}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ width: 1, height: 1 }}
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
                    alt="Adam Smith"
                    src="/static/images/adventure-avatar.jpg"
                    sx={{
                      width: 120,
                      height: 120,
                      border: 5,
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
                        Adam Smith
                      </Typography>
                    </Grid>
                    <Grid item>
                      {" "}
                      <Typography
                        sx={{
                          ml: 2,
                          mb: 2,
                          width: 200,
                          display: { xs: "none", md: "flex" },
                          fontFamily: "monospace",
                          fontWeight: 700,
                          letterSpacing: ".1rem",
                          color: "white",
                          textDecoration: "none",
                          wordWrap: "break-word",
                        }}
                      >
                        Freelancer
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
                  height: 1,
                  backgroundColor: "white",
                  boxShadow: 3,
                }}
              >
                <Grid item>
                  <Typography
                    variant="h6"
                    sx={{
                      display: "flex",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".1rem",
                      color: "black",
                      textDecoration: "none",
                      wordWrap: "break-word",
                      width: 500,
                      direction: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    "Hello World!"
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component={Link}
                    href="mailto: johndoe1337@outlook.com"
                    underline="hover"
                    sx={{
                      display: { xs: "none", md: "flex" },
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
              xs={6}
              sx={{
                width: 0.9,
                borderBottomLeftRadius: 45,
                borderBottomRightRadius: 45,
                backgroundColor: "rgba(255,255,255,0.3)",
                boxShadow: 3,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  my: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "black",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  wordWrap: "break-word",
                  justifyContent: "center",
                }}
              >
                Tech Stack
              </Typography>
              <Grid
                container
                direction="column"
                alignItems="center"
                sx={{
                  width: 1,
                }}
              >
                <Grid
                  item
                  container
                  spacing={2}
                  direction="row"
                  justifyContent="space-around"
                  sx={{ width: 1 }}
                >
                  <Grid item>
                    <StackIcon
                      iconSrc="skill-icons:javascript"
                      iconName="Javascript"
                    />
                  </Grid>
                  <Grid item>
                    <StackIcon iconSrc="logos:nodejs" iconName="NodeJS" />
                  </Grid>
                  <Grid item>
                    <StackIcon
                      iconSrc="skill-icons:react-dark"
                      iconName="React"
                    />
                  </Grid>
                  <Grid item>
                    <StackIcon iconSrc="skill-icons:redux" iconName="Redux" />
                  </Grid>
                  <Grid item>
                    <StackIcon
                      iconSrc="skill-icons:expressjs-dark"
                      iconName="Express"
                    />
                  </Grid>
                  <Grid
                    item
                    container
                    justifyContent="space-around"
                    spacing={2}
                    direction="row"
                  >
                    <Grid item>
                      <StackIcon
                        iconSrc="skill-icons:typescript"
                        iconName="Typescript"
                      />
                    </Grid>
                    <Grid item>
                      <StackIcon
                        iconSrc="skill-icons:mongodb"
                        iconName="MongoDB"
                      />
                    </Grid>
                    <Grid item>
                      <StackIcon
                        iconSrc="skill-icons:materialui-dark"
                        iconName="MaterialUI"
                      />
                    </Grid>
                    <Grid item>
                      <StackIcon iconSrc="skill-icons:html" iconName="HTML" />
                    </Grid>
                    <Grid item>
                      <StackIcon iconSrc="skill-icons:css" iconName="CSS" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </div>
  );
};

export default BuildersInfoDisplay;
