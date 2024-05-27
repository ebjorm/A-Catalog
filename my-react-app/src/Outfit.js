import React, { useState } from 'react';
import './Outfit.css'; 

const Outfit = ({ category, clothingItems, imageSize }) => {
  // State to keep track of the currently displayed item index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check if the clothingItems data is available
  if (!clothingItems || !clothingItems[category] || Object.keys(clothingItems[category]).length === 0) {
    return <div>No items found for {category}</div>;
  }

  const items = Object.values(clothingItems[category]); //Puts items into an Array
  const currentItem = items[currentIndex]; //Gets the current item to be displayed based on currentIndex

  //Informs user that there are no items of that color in that specific category
  if(!currentItem) {
    return <div>No items found
    
    for {category}</div>;
  }
  //Handel showing the next item
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  //Handel showing the previous item
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="category-outfit">
      <h2 style={{ visibility: 'hidden' }}>here to fix padding issue</h2> 
      <div className="outfit-item">
        <button className="arrow-button left-arrow" onClick={handlePrevious}>
          <img src="/icons/ArrowL.png" alt="Previous" className="left-arrow" />
        </button>
        <img src={`/${currentItem.Image}`} alt={currentItem.Color} style={{ width: 'auto', height: imageSize }} />
        <button className="arrow-button" onClick={handleNext}>
          <img src="/icons/ArrowR.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Outfit;
