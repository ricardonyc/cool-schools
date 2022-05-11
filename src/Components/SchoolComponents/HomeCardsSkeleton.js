import Skeleton from "@mui/material/Skeleton";

const HomeCardsSkeleton = () => {
  return (
    <div>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"90%"}
        height={24}
      />
      <Skeleton
        animation="wave"
        style={{ margin: ".5rem 0" }}
        variant="rectangular"
        width={"55%"}
        height={18}
      />
      <Skeleton
        animation="wave"
        style={{ margin: ".5rem 0" }}
        variant="rectangular"
        width={"25%"}
        height={18}
      />
      <Skeleton
        animation="wave"
        style={{ margin: "2rem 0" }}
        variant="rectangular"
        width={"100%"}
        height={200}
      />
      <Skeleton
        animation="wave"
        style={{ position: "absolute", bottom: "5px", right: "10px" }}
        variant="rectangular"
        width={"25%"}
        height={23}
      />
    </div>
  );
};

export default HomeCardsSkeleton;
