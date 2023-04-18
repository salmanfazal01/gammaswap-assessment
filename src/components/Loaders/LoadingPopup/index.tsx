import {
  Button,
  CircularProgress,
  Dialog,
  Stack,
  Typography,
} from "@mui/material";
import { useAppContext } from "../../../context/AppContext";

const LoadingPopup = () => {
  const { loadingPopup, closeLoadingPopup } = useAppContext();

  return (
    <Dialog
      onClose={closeLoadingPopup}
      open={!!loadingPopup}
      PaperProps={{
        elevation: 0,
        sx: { borderRadius: 5, p: 2, width: 420 },
      }}
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(3px)",
          },
        },
      }}
    >
      <Stack alignItems="center">
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          {loadingPopup?.title}
        </Typography>

        <CircularProgress size="90px" thickness={1} sx={{ my: 6 }} />

        <Typography sx={{ mb: 5 }} color="text.secondary">
          {loadingPopup?.message}
        </Typography>

        <Button
          onClick={closeLoadingPopup}
          fullWidth
          sx={{
            borderRadius: 3,
            height: 48,
            color: "primary.main",
          }}
        >
          Close
        </Button>
      </Stack>
    </Dialog>
  );
};

export default LoadingPopup;
