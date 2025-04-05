"use client";

import FoodCardComponent from "./food-card";
const PopularWithOtherPeopleSection: React.FC = () => {
  return (
    <>
      <FoodCardComponent
        foodName="Mighty Maxican"
        image="../../../public/blue-circles.jpg"
        calories={350}
        price={400}
      />
    </>
  );
};

export default PopularWithOtherPeopleSection;
