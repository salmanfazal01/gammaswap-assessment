import React from "react";
import { Stack, Container, Box } from "@mui/material";
import PoolsHeader from "../page-components/Pools/PoolsHeader";
import Invest from "../page-components/Pools/Invest";

const Swap = () => {
  return (
    <Container sx={{ maxWidth: "480px!important", height: "100vh" }}>
      <Stack justifyContent="center" sx={{ height: "100%" }} spacing={4}>
        {/* Header */}
        <PoolsHeader />

        {/* Invest Component */}
        <Invest />
      </Stack>
    </Container>
  );
};

export default Swap;
