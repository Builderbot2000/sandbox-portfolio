import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Grid, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { memberProfiles } from "../../configs/data-config";

const MemberAbout = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(memberProfiles[0].entryPath);

  const handleBackward = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let prevMemberIndex =
      memberProfiles.findIndex((member) => member.entryPath === current) - 1;
    if (prevMemberIndex < 0) prevMemberIndex = memberProfiles.length - 1;
    const prevMember = memberProfiles[prevMemberIndex];
    setCurrent(prevMember.entryPath);
    navigate(`${prevMember.entryPath}`);
  };

  const handleForward = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let nextMemberIndex =
      memberProfiles.findIndex((member) => member.entryPath === current) + 1;
    if (nextMemberIndex >= memberProfiles.length) nextMemberIndex = 0;
    const nextMember = memberProfiles[nextMemberIndex];
    setCurrent(nextMember.entryPath);
    navigate(`${nextMember.entryPath}`);
  };

  return (
    <Box
      sx={{
        pt: { sm: 0, md: 15 },
        px: 10,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        border: 0,
        borderColor: "blue",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ flexDirection: { xs: "column", md: "row" }, border: 0 }}
      >
        <Grid
          item
          xs={1}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
          }}
        >
          <IconButton onClick={handleBackward}>
            <ArrowBackIosNewIcon
              sx={{ fontSize: { xs: "300%", md: "500%" }, color: "black" }}
            />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Outlet />
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
          }}
        >
          <IconButton onClick={handleForward}>
            <ArrowForwardIosIcon
              sx={{ fontSize: { xs: "300%", md: "500%" }, color: "black" }}
            />
          </IconButton>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="space-evenly"
          sx={{ display: { sx: "flex", md: "none" }, border: 0 }}
        >
          <Grid item>
            <IconButton onClick={handleBackward}>
              <ArrowBackIosNewIcon
                sx={{ fontSize: { xs: "300%", md: "500%" }, color: "black" }}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={handleForward}>
              <ArrowForwardIosIcon
                sx={{ fontSize: { xs: "300%", md: "500%" }, color: "black" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MemberAbout;
