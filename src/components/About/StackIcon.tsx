import { Icon } from "@iconify/react";
import { Card } from "@mui/material";

const StackIcon = ({
  iconSrc,
  iconName,
}: {
  iconSrc: string;
  iconName: string;
}) => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        boxShadow: 0,
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
        backgroundColor: "transparent",
      }}
    >
      <div>
        <Icon
          icon={iconSrc}
          style={{
            fontSize: "56px",
          }}
        />
      </div>
      <center>
        <div style={{ color: "white" }}>{iconName}</div>
      </center>
    </Card>
  );
};

export default StackIcon;
