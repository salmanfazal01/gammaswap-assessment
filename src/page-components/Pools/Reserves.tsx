import React from "react";
import {
  Stack,
  Typography,
  LinearProgress,
  styled,
  TypographyProps,
  StackProps,
} from "@mui/material";

interface StyledTypographyProps extends TypographyProps {
  component?: "span";
}
const StyledTypography = styled(Typography)<StyledTypographyProps>({
  fontWeight: 700,
  fontSize: 15,
});

interface ReservesProps {
  percentage: number;
  primaryValue: string;
  primarySymbol: string;
  secondaryValue: string;
  secondarySymbol: string;
}

const Reserves: React.FC<ReservesProps & StackProps> = ({
  percentage,
  primaryValue,
  primarySymbol,
  secondaryValue,
  secondarySymbol,
  sx = {},
}) => {
  return (
    <Stack sx={{ ...sx }}>
      <Typography
        color="text.secondary"
        variant="body2"
        sx={{ fontWeight: 500, mb: 1 }}
      >
        Reserves
      </Typography>

      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{ height: "8px", borderRadius: "24px", mb: 1.25 }}
      />

      <Stack
        direction="row"
        rowGap={1}
        columnGap={1}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledTypography>
          {primaryValue}{" "}
          <StyledTypography component="span" color="text.secondary">
            {primarySymbol}
          </StyledTypography>
        </StyledTypography>

        <StyledTypography>
          {secondaryValue}{" "}
          <StyledTypography component="span" color="text.secondary">
            {secondarySymbol}
          </StyledTypography>
        </StyledTypography>
      </Stack>
    </Stack>
  );
};

export default Reserves;