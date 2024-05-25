import React from 'react';
import './CategoryGrid.css';


const CategoryGrid = ({ clothingItems, selectedCategory, imageSize }) => {
  // Check if the clothingItems data is available
  if (!clothingItems || !clothingItems[selectedCategory] || Object.keys(clothingItems[selectedCategory]).length === 0) {
    return <div>No items found for {selectedCategory}</div>;
  }

  // Get the items for the selected category
  const items = Object.values(clothingItems[selectedCategory]);
  
  // Get the number of items in the category
  //const itemCount = Object.keys(items).length;

  return (
    <div className="category-grid">
      <h2 className="subcategory-heading">{selectedCategory}</h2>
      <div className="image-grid">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            <img src={`/${item.Image}`} alt={item.Color} style={{ width: 'auto', height: imageSize }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;

