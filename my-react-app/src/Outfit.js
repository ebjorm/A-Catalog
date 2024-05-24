import React, { useState } from 'react';
import './Outfit.css'; 

const Outfit = ({ category, clothingItems, imageSize }) => {
  // State to keep track of the currently displayed item index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check if the clothingItems data is available
  if (!clothingItems || !clothingItems[category] || clothingItems[category].length === 0) {
    return <div>No items found for {category}</div>;
  }

  const items = Object.values(clothingItems[category]); //Puts items into an Array
  const currentItem = items[currentIndex]; //Gets the current item to be displayed based on currentIndex

  //handels showing next item
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  //handels showing previous item
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="category-outfit">
      <h2>/n</h2>
      <div className="outfit-item">
        <button className="arrow-button" onClick={handlePrevious}>
          <img src="/icons/Arrow.png" alt="Previous" className="left-arrow" />
        </button>
        <img src={`/${currentItem.Image}`} alt={currentItem.Color} style={{ width: 'auto', height: imageSize }} />
        <button className="arrow-button" onClick={handleNext}>
          <img src="/icons/Arrow.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Outfit;
