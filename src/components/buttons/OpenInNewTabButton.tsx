import { Stack, Typography, Skeleton } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  text: string;
  loading?: boolean;
}

const OpenInNewTabButton: React.FC<Props> = ({ link, text, loading }) => (
  <Link
    to={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none" }}
  >
    <Stack
      direction="row"
      alignItems="center"
      spacing={"5px"}
      sx={{
        cursor: "pointer",
        color: "text.secondary",
        "&:hover": {
          color: "text.primary",
        },
      }}
    >
      <Typography
        variant="body2"
        sx={{ letterSpacing: "0.02em", fontWeight: 500 }}
      >
        {loading ? <Skeleton width={100} /> : text}
      </Typography>

      <OpenInNewIcon sx={{ fontSize: "13px" }} />
    </Stack>
  </Link>
);

export default OpenInNewTabButton;
