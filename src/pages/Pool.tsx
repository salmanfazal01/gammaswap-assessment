import { Box, Container, Stack } from "@mui/material";
import Background from "../assets/images/background.svg";
import PoolCard from "../components/cards/PoolCard";
import withLoadingScreen from "../hoc/withLoadingScreen";
import PoolsHeader from "../page-components/Pools/PoolsHeader";

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
          <PoolCard id={1} />
        </Stack>
      </Container>
    </Box>
  );
};

export default withLoadingScreen(Pool);
