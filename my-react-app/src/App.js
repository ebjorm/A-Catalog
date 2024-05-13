import React, { useState } from 'react';
import './App.css';
import CategoryGrid from './CategoryGrid'; 
import clothingItemsData from './items.json';

function App() {
  // State to manage the current view (outfit or grid)
  const [isGridView, setIsGridView] = useState(false);

  // Function to toggle between outfit and grid views
  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <div className="app">
      <h1>A Catalog.</h1>
      <div className="view-switcher">
        <button onClick={toggleView}>Outfit</button>
        <span>/</span>
        <button onClick={toggleView}>Grid</button>
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
          <h2>Outfit View</h2>
          <img src={require('./images/image1.png')} alt="Outfit" />
        </div>
      )}

      <footer className="footer">
        This is a footer.
      </footer>
    </div>
  );
}

export default App;
