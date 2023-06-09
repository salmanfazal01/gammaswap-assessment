import { Stack, Typography, Skeleton } from "@mui/material";
import React from "react";

interface LiquidityAprProps {
  title: string;
  value: string;
  change?: number;
  caption: string;
  loading?: boolean;
}

const LiquidityAprInfo: React.FC<LiquidityAprProps> = ({
  title,
  value,
  change,
  caption,
  loading,
}) => (
  <Stack>
    <Typography
      variant="body2"
      sx={{ fotnWeight: 500, mb: 0.25, lineHeight: "15px" }}
      color="text.secondary"
    >
      {title}
    </Typography>

    <Typography variant="h2" sx={{ lineHeight: "38px" }}>
      {loading ? <Skeleton variant="text" height={38} /> : value}
    </Typography>

    <Stack direction="row" spacing={0.5} alignItems="center">
      {change && (
        <Typography
          sx={{
            fontWeight: 500,
            color: change >= 0 ? "success.light" : "error.light",
          }}
        >
          {loading ? (
            <Skeleton variant="text" width={30} />
          ) : (
            `${change >= 0 ? "+" : "-"}${change}%`
          )}
        </Typography>
      )}

      <Typography
        variant="body2"
        sx={{ fontWeight: 500 }}
        color="text.secondary"
      >
        {caption}
      </Typography>
    </Stack>
  </Stack>
);

export default LiquidityAprInfo;
