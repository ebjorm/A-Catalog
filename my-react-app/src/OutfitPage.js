import React from "react";
import Outfit from "./Outfit";

const OutfitPage = ({ clothingItems, filteredClothingItems}) => (
    <div className="outfit-view">
    {/* Calls to Outfit.js to create a item picker for the category specified */}
    <Outfit category="Tops" clothingItems={filteredClothingItems} imageSize={150} />
    <Outfit category="Bottoms" clothingItems={filteredClothingItems} imageSize={300} />
    <Outfit category="Shoes" clothingItems={filteredClothingItems} imageSize={150} />
  </div>
);

export default OutfitPage;