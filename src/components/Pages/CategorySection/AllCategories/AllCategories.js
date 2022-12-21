import React from "react";
import AllCategory from "../AllCategory/AllCategory";
import { useQuery } from "@tanstack/react-query";
import UseTitle from "../../../Hooks/UseTitle";

const AllCategories = () => {
  UseTitle("All Categories");
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        "https://byte-code-velocity.vercel.app/threeCollection"
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className='justify-between my-24 lg:px-20 px-3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mb-6'>
        {categories?.map((category) => (
          <AllCategory key={category._id} category={category}></AllCategory>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
