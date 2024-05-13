import React from 'react';
import './CategoryGrid.css';


const CategoryGrid = ({ clothingItems, selectedCategory, imageSize }) => {
  // Check if the clothingItems data is available
  if (!clothingItems || !clothingItems[selectedCategory]) {
    return <div>No items found for {selectedCategory}</div>;
  }

  // Get the items for the selected category
  const items = clothingItems[selectedCategory];
  
  // Get the number of items in the category
  const itemCount = Object.keys(items).length;

  return (
    <div className="category-grid">
      {/* Category title */}
      <h2 className="subcategory-heading">{selectedCategory}</h2>
      <div className="image-grid">
        {/* Goes though all the items in category and displays their image */}
      {Object.values(items).map((item, index) => (
        <div key={index} className="grid-item">
          <img src={require(`./${item.Image}`)} alt={item.Color} style={{ width: 'auto', height: imageSize }} />
        </div>
      ))}
    </div>
    </div>

  );
};

export default CategoryGrid;

