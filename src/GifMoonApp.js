import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifMoonApp = () => {
  const [categories, setCategories] = useState(["hello", "goku"]);

  return (
    <div className="">
      <AddCategory setCategories={setCategories} />
      <ul>
        {categories.map((category, i) => (
          <GifGrid 
            key={i} 
            category={category} 
          />
        ))}
      </ul>
    </div>
  );
};

export default GifMoonApp;
