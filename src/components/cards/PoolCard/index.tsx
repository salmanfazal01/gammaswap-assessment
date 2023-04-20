import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
  Box,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { yellow } from "@mui/material/colors";
import React from "react";
import MainButton from "../../../components/buttons/MainButton";
import OpenInNewTabButton from "../../../components/buttons/OpenInNewTabButton";
import { useAppContext } from "../../../context/AppContext";
import { usePoolsContext } from "../../../context/PoolsContext";
import usePool from "../../../hooks/usePool";
import { PoolData } from "../../../types/appContext";
import LiquidityAprInfo from "./LiquidityAprInfo";
import Reserves from "./Reserves";
import VolumeFees from "./VolumeFees";

const StyledLogo = styled("img")({
  height: 40,
  width: 40,
});

const PoolCard: React.FC<{ id: number }> = ({ id }) => {
  const { period } = usePoolsContext();
  const { closeLoadingPopup, setLoadingPopup } = useAppContext();
  const { loading, data, favorited, toggleFavorite } = usePool(id);

  const {
    primaryCoin,
    secondaryCoin,
    primarySplit,
    secondarySplit,
    apr,
    change,
    fees,
    liquidity,
    split,
    volume,
  }: PoolData = data;

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
                {loading ? (
                  <Skeleton variant="circular" width={40} height={40} />
                ) : (
                  <StyledLogo src={primaryCoin.image} />
                )}

                {loading ? (
                  <Skeleton
                    variant="circular"
                    width={40}
                    height={40}
                    sx={{ ml: -0.5 }}
                  />
                ) : (
                  <StyledLogo src={secondaryCoin.image} sx={{ ml: -0.5 }} />
                )}
              </Stack>

              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {loading ? (
                  <Skeleton variant="text" />
                ) : (
                  `${primaryCoin.symbol} / ${secondaryCoin.symbol}`
                )}
              </Typography>
            </Stack>

            {/* Favorite */}
            {!loading && (
              <IconButton onClick={toggleFavorite} size="small">
                {favorited ? (
                  <StarIcon sx={{ color: yellow[700] }} />
                ) : (
                  <StarBorderIcon sx={{ color: "text.secondary" }} />
                )}
              </IconButton>
            )}
          </Stack>

          {/* Links */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2 }}
          >
            <OpenInNewTabButton
              text="Uniswap v2"
              link="https://www.uniswap.com/"
              loading={loading}
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
            value={liquidity}
            change={change}
            caption={`${period} Change`}
            loading={loading}
          />

          <LiquidityAprInfo
            title="APR"
            value={apr}
            caption={`${period} Performance`}
            loading={loading}
          />
        </Stack>

        {/* Bottom */}
        <Box>
          {/* Reserves */}
          <Reserves
            percentage={split}
            primarySymbol={primaryCoin.symbol}
            secondarySymbol={secondaryCoin.symbol}
            primaryValue={primarySplit}
            secondaryValue={secondarySplit}
            sx={{ mb: 4 }}
            loading={loading}
          />

          {/* Volume + Fees */}
          <Stack spacing={1.5} sx={{ mb: 4 }}>
            <VolumeFees
              title={`${period} Volume`}
              value={volume}
              loading={loading}
            />

            <VolumeFees
              title={`${period} Fees`}
              value={fees}
              loading={loading}
            />
          </Stack>

          {/* Invest */}
          <MainButton
            appearance="default"
            size="large"
            fullWidth
            onClick={handleInvest}
            disabled={loading}
          >
            Invest in Pool
          </MainButton>
        </Box>
      </Stack>
    </Paper>
  );
};

export default PoolCard;
