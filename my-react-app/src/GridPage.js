import React from "react";
import CategoryGrid from "./CategoryGrid";

const GridPage = ({ clothingItems, filteredClothingItems }) => (
    <div>
    {/* Calls to CategoryGrid to create a grid for the category specified */}
    <CategoryGrid clothingItems={filteredClothingItems} selectedCategory="Tops" imageSize={150} />
    <CategoryGrid clothingItems={filteredClothingItems} selectedCategory="Bottoms" imageSize={300} />
    <CategoryGrid clothingItems={filteredClothingItems} selectedCategory="Shoes" imageSize={140} />
  </div>
);

export default GridPage;