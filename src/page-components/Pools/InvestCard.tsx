import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
  IconButton,
  Paper,
  Stack,
  Typography,
  styled,
  Box,
} from "@mui/material";
import { yellow } from "@mui/material/colors";
import { useState } from "react";
import MainButton from "../../components/buttons/MainButton";
import OpenInNewTabButton from "../../components/buttons/OpenInNewTabButton";
import { cryptos } from "../../utils/cryptos";
import LiquidityAprInfo from "./LiquidityAprInfo";
import Reserves from "./Reserves";
import VolumeFees from "./VolumeFees";

const StyledLogo = styled("img")({
  height: 40,
  width: 40,
});

const InvestCard = () => {
  const [primary, setPrimary] = useState(cryptos[7]);
  const [secondary, setSecondary] = useState(cryptos[13]);
  const [favorited, setFavorited] = useState(false);

  const toggleFavorite = () => {
    setFavorited(!favorited);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "16px",
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <Stack spacing={5}>
        {/* Header */}
        <Stack spacing={0.5}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={1}
          >
            {/* Symbols */}
            <Stack spacing={2.5}>
              <Stack direction="row">
                <StyledLogo src={primary.image} />
                <StyledLogo src={secondary.image} sx={{ ml: -0.5 }} />
              </Stack>

              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {primary.symbol} / {secondary.symbol}
              </Typography>
            </Stack>

            {/* Favorite */}
            <IconButton onClick={toggleFavorite} size="small">
              {favorited ? (
                <StarIcon sx={{ color: yellow[700] }} />
              ) : (
                <StarBorderIcon sx={{ color: "text.secondary" }} />
              )}
            </IconButton>
          </Stack>

          {/* Links */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2 }}
          >
            <OpenInNewTabButton
              text="Uniswap v2"
              link="https://www.uniswap.com/"
            />

            <OpenInNewTabButton
              text="View on Etherscan"
              link="https://etherscan.io/"
            />
          </Stack>
        </Stack>

        {/* Liquidity + APR */}
        <Stack
          direction="row"
          columnGap={{ xs: 5, sm: 9 }}
          rowGap={3}
          flexWrap="wrap"
        >
          <LiquidityAprInfo
            title="Liquidity"
            value="$23.00M"
            change={2.38}
            caption="24h Change"
          />

          <LiquidityAprInfo
            title="APR"
            value="2.34%"
            caption="24h Performance"
          />
        </Stack>

        {/* Bottom */}
        <Box>
          {/* Reserves */}
          <Reserves
            percentage={45}
            primarySymbol={primary.symbol}
            secondarySymbol={secondary.symbol}
            primaryValue={"6598.00"}
            secondaryValue={"11,581,900"}
            sx={{ mb: 4 }}
          />

          {/* Volume + Fees */}
          <Stack spacing={1.5} sx={{ mb: 4 }}>
            <VolumeFees title="24h Volume" value="$15,00M" />

            <VolumeFees title="24h Fees" value="$50,000" />
          </Stack>

          {/* Invest */}
          <MainButton appearance="default" size="large" fullWidth>
            Invest in Pool
          </MainButton>
        </Box>
      </Stack>
    </Paper>
  );
};

export default InvestCard;
