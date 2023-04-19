import React from "react";
import {
  Stack,
  Typography,
  Box,
  Paper,
  styled,
  Container,
} from "@mui/material";
import MainButton from "../components/buttons/MainButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link, useNavigate } from "react-router-dom";

const todos = [
  "Create a sick homepage with animations!",
  "Animated loading screen when changing pages",
  "Select field with options (24H, 1D, 1W...)",
  "Ability to change symbols (add to context API)",
  "Liquidity and APR number count up animation",
  "Reserves progess bar change color to match Figma",
  "Invest in pool button should imitate a real click handler",
];

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Stack
        sx={{ height: "100vh" }}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h2">HOME PAGE COMING SOON ...</Typography>

        <Typography color="text.secondary">
          Notice how we are using a dark theme only on the homepage
        </Typography>

        <Box sx={{ my: 5 }}>
          <Typography sx={{ mb: 1 }}>Remaining TODOs:</Typography>

          {todos.map((item, i) => (
            <Typography key={i} color="text.secondary">
              {i + 1}. {item}
            </Typography>
          ))}
        </Box>

        <MainButton size="large" onClick={() => navigate("/pool")}>
          <Typography>Go to Pools Page</Typography>
          <KeyboardArrowRightIcon fontSize="small" />
        </MainButton>

        <Paper sx={{ mt: 5, p: 3 }}>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 2, fontWeight: 600 }}
          >
            To see my 1inch network aggregator clone that has an amazing
            homepage + functioning swapping features:
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap">
            <StyledLink
              to="https://web3-1inch-clone.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </StyledLink>

            <StyledLink
              to="https://github.com/salmanfazal01/web3-1inch-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </StyledLink>

            <StyledLink
              to="https://youtu.be/4MrDn0ClJDQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </StyledLink>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};

export default Home;
