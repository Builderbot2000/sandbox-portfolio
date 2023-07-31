import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Grid, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { members } from "../../configs/data-config";

const MemberAbout = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState("template");

  const handleBackward = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let prevMemberIndex = members.findIndex((name) => name === current) - 1;
    if (prevMemberIndex < 0) prevMemberIndex = members.length - 1;
    const prevMember = members[prevMemberIndex];
    setCurrent(prevMember);
    navigate(`/${prevMember}`);
  };

  const handleForward = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let nextMemberIndex = members.findIndex((name) => name === current) + 1;
    if (nextMemberIndex >= members.length) nextMemberIndex = 0;
    const nextMember = members[nextMemberIndex];
    setCurrent(nextMember);
    navigate(`/${nextMember}`);
  };

  return (
    <Box
      sx={{
        pt: 15,
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
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={1}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
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
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconButton onClick={handleForward}>
            <ArrowForwardIosIcon
              sx={{ fontSize: { xs: "300%", md: "500%" }, color: "black" }}
            />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MemberAbout;
