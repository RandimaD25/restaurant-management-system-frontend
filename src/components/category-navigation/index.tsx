"use client";

import Link from "next/link";

type Nav = {
  id: number;
  name: string;
  path: string;
};

const CategoryNavigationComponent: React.FC = () => {
  const nav: Nav[] = [
    {
      id: 1,
      name: "Meal Deals",
      path: "/meal-deals",
    },

    {
      id: 2,
      name: "Under 600 Calories",
      path: "/under-600-calories",
    },

    {
      id: 3,
      name: "Salads",
      path: "/salads",
    },

    {
      id: 4,
      name: "Gym Food",
      path: "/gym-food",
    },

    {
      id: 5,
      name: "Sides",
      path: "/sides",
    },

    {
      id: 6,
      name: "Rainbow Wraps",
      path: "/rainbow-wraps",
    },

    {
      id: 7,
      name: "Hot Power Bowls",
      path: "/hot-power-bowls",
    },
  ];

  return (
    <div className="py-4 px-10">
      {nav.map((item) => (
        <Link
          className="md:flex-row justify-between md:px-4 cursor-pointer"
          key={item.id}
          href={item.path}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryNavigationComponent;
