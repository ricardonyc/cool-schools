import React from "react";

interface PropType {
  id?: number;
  address?: string;
  name?: string;
  reviews?: string[];
}

const SchoolAverage = (info: PropType) => {
  console.log(info);
  return (
    <div>
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
    </div>
  );
};
export default SchoolAverage;
