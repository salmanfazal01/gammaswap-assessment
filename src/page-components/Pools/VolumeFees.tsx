import React from "react";
import { Stack, StackProps, Typography } from "@mui/material";

interface VolumeFeesProps {
  title: string;
  value: string;
}

const VolumeFees: React.FC<VolumeFeesProps & StackProps> = ({
  title,
  value,
}) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontWeight: 500 }}
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        sx={{ fontWeight: 700, letterSpacing: "0.02em" }}
      >
        {value}
      </Typography>
    </Stack>
  );
};

export default VolumeFees;
