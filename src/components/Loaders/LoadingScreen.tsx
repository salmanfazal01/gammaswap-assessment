import { Box, Container, Stack, keyframes, ThemeProvider } from "@mui/material";
import LoadingLogo from "../../assets/images/logo-large.svg";
import darkTheme from "../../config/theme/dark";

const animate = keyframes`
  0% {
    opacity: 0;
    transform: rotate(180deg) scale(1.2, 1.2);
  }

  40% {
    opacity: 1;
    transform: rotate(0deg) scale(0.3, 0.3);
  }

  100% {
    opacity: 1;
    transform: rotate(-500deg) scale(1.8, 1.8);
  }
`;

const LoadingScreen = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "100vh",
          width: "100vw",
          bgcolor: "background.default",
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
    </ThemeProvider>
  );
};

export default LoadingScreen;
