import React from "react";
import { Stack, Container, Box } from "@mui/material";
import PoolsHeader from "../page-components/Pools/PoolsHeader";
import InvestCard from "../page-components/Pools/InvestCard";
import Background from "../assets/images/background.svg";

const Pool = () => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <img
        src={Background}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />

      <Container sx={{ maxWidth: "480px!important" }}>
        <Stack
          justifyContent="center"
          sx={{ minHeight: "100vh", py: 5 }}
          spacing={4}
        >
          {/* Header */}
          <PoolsHeader />

          {/* Invest Component */}
          <InvestCard />
        </Stack>
      </Container>
    </Box>
  );
};

export default Pool;
