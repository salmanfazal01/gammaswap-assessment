import React from "react";
import { Paper, Stack } from "@mui/material";
import MainButton from "../../components/buttons/MainButton";

const Invest = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "16px",
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.06)",
        height: "500px",
      }}
    >
      <Stack spacing={1} direction="row">
        <MainButton size="small" appearance="primary">
          Small
        </MainButton>

        <MainButton size="medium" appearance="default">
          Medium
        </MainButton>

        <MainButton size="large" appearance="border">
          Large
        </MainButton>
      </Stack>
    </Paper>
  );
};

export default Invest;
