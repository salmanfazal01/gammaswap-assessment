import { ButtonProps, Menu, MenuItem, useTheme } from "@mui/material";
import React from "react";
import { OptionsButtonProps } from "../../types/common";
import MainButton from "./MainButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const OptionsButton: React.FC<ButtonProps & OptionsButtonProps> = ({
  value,
  handleChange: _handleChange,
  appearance = "primary",
  sx = {},
  children,
  menuItems,
  ...props
}) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (val: any) => {
    _handleChange?.(val);
    handleClose();
  };

  return (
    <>
      <MainButton
        appearance={appearance}
        onClick={(e) => setAnchorEl(e.currentTarget)}
        {...props}
      >
        {children}
      </MainButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            p: 1.5,
            border: `1px solid ${theme.palette.secondary.dark}`,
            boxShadow: theme.shadows[1],
            mt: 1.5,
            width: 225,
            borderRadius: "12px",
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menuItems.map((item, i) => {
          const selected = item.value === value;

          return (
            <MenuItem
              onClick={() => handleChange(item.value)}
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontWeight: 700,
                fontSize: 14,
                borderRadius: "8px",
                "&.Mui-selected": {
                  bgcolor: "background.default",
                },
              }}
              selected={selected}
            >
              {item.name}

              {selected && (
                <CheckCircleIcon
                  fontSize="small"
                  sx={{ color: "primary.main" }}
                />
              )}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default OptionsButton;
