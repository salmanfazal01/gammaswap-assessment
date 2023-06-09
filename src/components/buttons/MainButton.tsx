import React from "react";
import { Button, ButtonProps, styled } from "@mui/material";
import { MainButtonProps } from "../../types/common";

const StyledButton = styled(Button)<MainButtonProps>(
  ({ theme, appearance, size }) => ({
    borderRadius: "12px",
    color: appearance === "primary" ? "auto" : theme.palette.text.primary,
    fontWeight: 600,
    lineHeight: "unset",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    ...(size === "small" && {
      height: "32px",
      fontSize: 13,
      gap: "4px",
      p: "8px, 12px, 8px, 12px",
    }),

    ...(size === "medium" && {
      height: "36px",
      fontSize: 15,
      gap: "8px",
      p: "12px",
    }),

    ...(size === "large" && {
      height: "43px",
      fontSize: 15,
      gap: "8px",
      p: "14px, 16px, 14px, 16px",
    }),

    ...(appearance === "primary" && {
      backgroundColor: theme.palette.primary.main,
      ":hover": {
        backgroundColor: theme.palette.primary.light,
      },
      ":active": {
        backgroundColor: theme.palette.primary.dark,
      },
    }),

    ...(appearance === "default" && {
      backgroundColor: theme.palette.secondary.main,
      ":hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
      ":active": {
        backgroundColor: theme.palette.secondary.dark,
        boxShadow: "inset 0px 4px 16px rgba(0, 0, 0, 0.06)",
      },
    }),

    ...(appearance === "border" && {
      backgroundColor: theme.palette.common.white,
      border: `1px solid ${theme.palette.secondary.dark}`,
      boxShadow: theme.shadows[1],
      ":hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
      ":active": {
        backgroundColor: theme.palette.secondary.dark,
      },
    }),
  })
);

const MainButton: React.FC<ButtonProps & MainButtonProps> = ({
  appearance = "primary",
  sx = {},
  children,
  ...props
}) => {
  return (
    <StyledButton
      appearance={appearance}
      variant="contained"
      disableElevation
      sx={{ ...sx }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default MainButton;
