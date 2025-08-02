import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function SkeletonLoader() {
  return (
    <Box sx={{ width: "100%", padding: "2rem" }}>
      <Skeleton
        animation="wave"
        width="100%"
        sx={{
          bgcolor: "#e0e0e0",
          "&::after": {
            animationDuration: "0.8s",
            backgroundImage:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
          },
        }}
      />
      <Skeleton
        animation="wave"
        width="80%"
        sx={{
          bgcolor: "#e0e0e0",
          "&::after": {
            animationDuration: "1.2s",
            backgroundImage:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
          },
        }}
      />
      <Skeleton
        animation="wave"
        width="90%"
        sx={{
          bgcolor: "#e0e0e0",
          "&::after": {
            animationDuration: "1.5s",
            backgroundImage:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
          },
        }}
      />
      <Skeleton
        animation="wave"
        width="70%"
        sx={{
          bgcolor: "#e0e0e0",
          "&::after": {
            animationDuration: "2s",
            backgroundImage:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
          },
        }}
      />
    </Box>
  );
}
