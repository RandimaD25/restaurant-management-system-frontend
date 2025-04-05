"use client";

import { FC } from "react";

const FoodCardComponent: FC<{
  image: string;
  foodName: string;
  calories: number;
  price: number;
}> = ({ image, foodName, calories, price }) => {
  return (
    <div>
      {image}
      <div>
        <p>{foodName}</p>
        <p>{calories}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default FoodCardComponent;
