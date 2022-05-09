import React from "react";

interface PropType {
  id?: number;
  address?: string;
  name?: string;
  reviews?: string[];
}

const SchoolAverage = (info: PropType) => {
  return (
    <>
      {info?.reviews?.reduce(
        (
          previousValue: number,
          currentValue: any,
          _: number,
          { length }: any
        ) =>
          Math.round(
            (previousValue + currentValue?.ratingOutOf5 / length) * 10
          ) / 10,
        0
      )}
    </>
  );
};
export default SchoolAverage;
