import { Box, Container, Stack, keyframes } from "@mui/material";
import LoadingLogo from "../../assets/images/logo-large.svg";

const animate = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0deg) scale(1.2, 1.2);
  }

  50% {
    opacity: 1;
    transform: rotate(180deg) scale(0.3, 0.3);
  }

  100% {
    opacity: 1;
    transform: rotate(360deg) scale(1.5, 1.5);
  }
`;

const LoadingScreen = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "background.dark",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            animation: `${animate} 3s infinite ease`,
          }}
        >
          <img
            src={LoadingLogo}
            style={{
              maxHeight: "300px",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Container>
    </Stack>
  );
};

export default LoadingScreen;
