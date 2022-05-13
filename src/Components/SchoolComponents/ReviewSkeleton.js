import React from "react";
import { Skeleton } from "@mui/material";

function ReviewSkeleton({ darkMode }) {
  const reviewBg = {
    backgroundColor: darkMode
      ? "var(--reviewbox-navy)"
      : "var(--reviewbox-white)",
    borderRadius: "var(--border-radius)",
    padding: "1rem",
    margin: "1rem 0",
    position: "relative",
  };

  return (
    <div style={reviewBg}>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"25%"}
        height={20}
      />
      <Skeleton
        animation="wave"
        style={{ margin: ".5rem 0" }}
        variant="rectangular"
        width={"7%"}
        height={18}
      />
      <Skeleton
        animation="wave"
        style={{ margin: "2rem 0" }}
        variant="rectangular"
        width={"100%"}
        height={150}
      />
      <Skeleton
        animation="wave"
        style={{ margin: "2rem 0" }}
        variant="rectangular"
        width={"13%"}
        height={20}
      />
      <Skeleton
        animation="wave"
        style={{
          position: "absolute",
          right: "10px",
          bottom: "0",
          margin: "2rem 0",
        }}
        variant="rectangular"
        width={"10%"}
        height={25}
      />
    </div>
  );
}

export default ReviewSkeleton;
