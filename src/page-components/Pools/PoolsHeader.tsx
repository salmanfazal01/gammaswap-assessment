import InfoIcon from "@mui/icons-material/Info";
import { MenuItem, Select, Stack, Typography } from "@mui/material";
import React from "react";
import MainButton from "../../components/buttons/MainButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ARBITRUM } from "../../utils/cryptoIcons";

const InfoText: React.FC<{ title: string }> = ({ title }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.5}
    sx={{ color: "text.secondary" }}
  >
    <Typography variant="body2">{title}</Typography>
    <InfoIcon sx={{ fontSize: "12px" }} />
  </Stack>
);

const PoolsHeader = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent="space-between"
      spacing={1}
    >
      <Typography sx={{ flex: 1, fontWeight: 700, fontSize: 28 }}>
        Pools
      </Typography>

      <InfoText title="Performance Range" />

      <Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap">
        <MainButton size="small" appearance="border">
          24h
          <KeyboardArrowDownIcon fontSize="small" sx={{ mr: -0.5 }} />
        </MainButton>

        <MainButton size="small" appearance="border">
          <img src={ARBITRUM} style={{ height: 20, objectFit: "contain" }} />
          Arbitrum
        </MainButton>
      </Stack>
    </Stack>
  );
};

export default PoolsHeader;
