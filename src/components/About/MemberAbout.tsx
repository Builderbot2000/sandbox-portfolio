import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const MemberAbout = () => {
  return (
    <Box
      sx={{
        pt: 25,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default MemberAbout;
