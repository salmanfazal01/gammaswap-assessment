import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { yellow } from "@mui/material/colors";
import { useEffect, useState } from "react";
import MainButton from "../../components/buttons/MainButton";
import OpenInNewTabButton from "../../components/buttons/OpenInNewTabButton";
import { useAppContext } from "../../context/AppContext";
import { usePoolsContext } from "../../context/PoolsContext";
import LiquidityAprInfo from "./LiquidityAprInfo";
import Reserves from "./Reserves";
import VolumeFees from "./VolumeFees";

const StyledLogo = styled("img")({
  height: 40,
  width: 40,
});

const InvestCard = () => {
  const { period, primaryCoin, secondaryCoin } = usePoolsContext();
  const [favorited, setFavorited] = useState(false);

  const poolId = "gammaswapPoolIdFavorited";

  const { closeLoadingPopup, setLoadingPopup } = useAppContext();

  useEffect(() => {
    const isFavorited = localStorage.getItem(poolId) === "true";

    setFavorited(isFavorited);
  }, []);

  const toggleFavorite = () => {
    const _fav = !favorited;
    setFavorited(_fav);
    localStorage.setItem(poolId, String(_fav));
  };

  const handleInvest = () => {
    setLoadingPopup({
      title: "Investing",
      message: "Please wait while your transaction is processing...",
    });

    setTimeout(() => {
      closeLoadingPopup();
    }, 4000);
  };

  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        p: 4,
        borderRadius: "16px",
        boxShadow: theme.shadows[1],
      })}
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
                <StyledLogo src={primaryCoin.image} />
                <StyledLogo src={secondaryCoin.image} sx={{ ml: -0.5 }} />
              </Stack>

              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {primaryCoin.symbol} / {secondaryCoin.symbol}
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
            caption={`${period} Change`}
          />

          <LiquidityAprInfo
            title="APR"
            value="2.34%"
            caption={`${period} Performance`}
          />
        </Stack>

        {/* Bottom */}
        <Box>
          {/* Reserves */}
          <Reserves
            percentage={45}
            primarySymbol={primaryCoin.symbol}
            secondarySymbol={secondaryCoin.symbol}
            primaryValue={"6598.00"}
            secondaryValue={"11,581,900"}
            sx={{ mb: 4 }}
          />

          {/* Volume + Fees */}
          <Stack spacing={1.5} sx={{ mb: 4 }}>
            <VolumeFees title={`${period} Volume`} value="$15,00M" />

            <VolumeFees title={`${period} Fees`} value="$50,000" />
          </Stack>

          {/* Invest */}
          <MainButton
            appearance="default"
            size="large"
            fullWidth
            onClick={handleInvest}
          >
            Invest in Pool
          </MainButton>
        </Box>
      </Stack>
    </Paper>
  );
};

export default InvestCard;
