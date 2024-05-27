import React, { useState } from 'react';
import './App.css';
import CategoryGrid from './CategoryGrid';
import Outfit from './Outfit';
import clothingItemsData from './items.json';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Collapse } from 'react-collapse';

function App() {
  // State to manage the current view (outfit or grid)
  const [isGridView, setIsGridView] = useState(false);

  //State to manage selected colors for filtering
  const [selectedColors, setSelectedColors] = useState([]);

  //State to manage the visibility of the filter section
  const [filterOpen, setFilterOpen] = useState(false);

  // Function to toggle between outfit and grid view
  const toggleView = (targetView) => {
    if ((targetView === 'grid' && !isGridView) || (targetView === 'outfit' && isGridView)) {
      setIsGridView(!isGridView);
      setSelectedColors([]); //Resets the filter when switching views
    }
  };

  //Function to handle filter changes
  const handleColorChange = (color) => {
    setSelectedColors(prevColors => 
      prevColors.includes(color)
        ? prevColors.filter(c => c !== color)
        : [...prevColors, color]
    );
  };

  //Function to reset the filter
  const resetFilter = () => {
    setSelectedColors([]);
  };

  //Filters clothing items based selected colors
  const filteredClothingItems = {};
  for (const category in clothingItemsData.categories) {
    filteredClothingItems[category] = Object.fromEntries(
      Object.entries(clothingItemsData.categories[category]).filter(
        ([, item]) => selectedColors.length === 0 || selectedColors.includes(item.Color)
      )
    );
  }

  return (
    <div className="app">
      <h1>A Catalog.</h1>
      <div className="view-switcher">
        <img src="/icons/Outfit.png" alt="Outfit" className="view-icon" onClick={() => toggleView('outfit')}/>
        <span>/</span>
        <img src="/icons/Grid.png" alt="Grid" className="view-icon" onClick={() => toggleView('grid')}/>
      </div>
      <div className="filter-toggle" onClick={() => setFilterOpen(!filterOpen)}>
        {filterOpen ? <FaArrowLeft size={20} /> : <FaArrowRight size={20} />}
      </div>
      <Collapse isOpened={filterOpen}>
        <div className="filter-section">
          <h2>Filter by Color</h2>
          {["White", "Black", "Brown", "Blue", "Red"].map(color => (
            <label key={color}>
              <input
                type="checkbox"
                value={color}
                onChange={() => handleColorChange(color)}
                checked={selectedColors.includes(color)}
              />
              {color}
            </label>
          ))}
          <button onClick={resetFilter}>Reset Filter</button>
        </div>
      </Collapse>
      {/* Conditional rendering based on the current view */}
      {isGridView ? (
        <div>
          {/* Calls to CategoryGrid to create a grid for the category specified */}
          <CategoryGrid clothingItems={filteredClothingItems} selectedCategory="Tops" imageSize={150} />
          <CategoryGrid clothingItems={filteredClothingItems} selectedCategory="Bottoms" imageSize={300} />
          <CategoryGrid clothingItems={filteredClothingItems} selectedCategory="Shoes" imageSize={140} />
        </div>
      ) : (
        <div className="outfit-view">
          {/* Calls to Outfit.js to create a item picker for the category specified */}
          <Outfit category="Tops" clothingItems={filteredClothingItems} imageSize={150} />
          <Outfit category="Bottoms" clothingItems={filteredClothingItems} imageSize={300} />
          <Outfit category="Shoes" clothingItems={filteredClothingItems} imageSize={150} />
        </div>
      )}

      <footer className="footer">
        This is a footer.
      </footer>
    </div>
  );
}

export default App;
