import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import MainButton from "../../components/buttons/MainButton";
import OptionsButton from "../../components/buttons/OptionsButton";
import { PERIOD_MENU_OPTIONS } from "../../constants";
import { cryptos } from "../../utils/cryptos";

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
  const [period, setPeriod] = useState(PERIOD_MENU_OPTIONS[0].value);
  const arbitrum = cryptos.find((i) => i.symbol === "ARB");

  const changePeriod = (val: any): void => {
    setPeriod(val);
  };

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
        <OptionsButton
          size="small"
          appearance="border"
          menuItems={PERIOD_MENU_OPTIONS}
          value={period}
          handleChange={changePeriod}
        >
          {period}
          <KeyboardArrowDownIcon fontSize="small" sx={{ mr: -0.5 }} />
        </OptionsButton>

        <MainButton size="small" appearance="border">
          <img
            src={arbitrum?.image}
            style={{ height: 20, objectFit: "contain" }}
          />
          Arbitrum
        </MainButton>
      </Stack>
    </Stack>
  );
};

export default PoolsHeader;
