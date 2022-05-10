import Rating from "@mui/material/Rating";

const RatingStars = ({ school }) => {
  return (
    <Rating
      name="read-only"
      size="large"
      precision={0.1}
      value={school?.reviews?.reduce(
        (previousValue, currentValue, _, { length }) =>
          Math.round(
            (previousValue + currentValue?.ratingOutOf5 / length) * 10
          ) / 10,
        0
      )}
      readOnly
    />
  );
};

export default RatingStars;
