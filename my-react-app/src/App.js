import React, { useState } from 'react';
import './App.css';
import CategoryGrid from './CategoryGrid'; 
import Outfit from './Outfit';
import clothingItemsData from './items.json';

function App() {
  // State to manage the current view (outfit or grid)
  const [isGridView, setIsGridView] = useState(false);

  // Function to toggle between outfit and grid view
  const toggleView = (targerView) => {
    if ((targerView === 'grid' && !isGridView) || (targerView === 'outfit' && isGridView)) {
      setIsGridView(!isGridView);
    }
  };

  return (
    <div className="app">
      <h1>A Catalog.</h1>
      <div className="view-switcher">
        <img src="/icons/Outfit.png" alt="Outfit" className="view-icon" onClick={() => toggleView('outfit')}></img>
        <span>/</span>
        <img src="/icons/Grid.png" alt="Grid" className="view-icon" onClick={() => toggleView('grid')}></img>
      </div>
      {/* Conditional rendering based on the current view */}
      {isGridView ? (
        <div>
          {/* Calls to CategoryGrid to create a grid for the category specified */}
          <CategoryGrid clothingItems={clothingItemsData.categories} selectedCategory={"Tops"} imageSize={150} />
          <CategoryGrid clothingItems={clothingItemsData.categories} selectedCategory={"Bottoms"} imageSize={300} />
          <CategoryGrid clothingItems={clothingItemsData.categories} selectedCategory={"Shoes"} imageSize={140} />
        </div>
      ) : (
        <div className="outfit-view">
          {/* Calls to Outfit.js to create a item picker for the category specified */}
          <Outfit category="Tops" clothingItems={clothingItemsData.categories} imageSize={150} />
          <Outfit category="Bottoms" clothingItems={clothingItemsData.categories} imageSize={300} />
          <Outfit category="Shoes" clothingItems={clothingItemsData.categories} imageSize={150} />
        </div>
      )}

      <footer className="footer">
        This is a footer.
      </footer>
    </div>
  );
}

export default App;
