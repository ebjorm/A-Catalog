import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import OutfitPage from './pages/OutfitPage';
import GridPage from './pages/GridPage';
import clothingItemsData from './items.json';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Collapse } from 'react-collapse';
import { useNavigate } from 'react-router-dom';

function App() {

  //State to manage navigation
  const navigate = useNavigate();

  // State to manage the current view (outfit or grid)
  const [isGridView, setIsGridView] = useState(false);

  //State to manage selected colors for filtering
  const [selectedColors, setSelectedColors] = useState([]);

  //State to manage the visibility of the filter section
  const [filterOpen, setFilterOpen] = useState(false);

  // Function to toggle between outfit and grid view
  const toggleView = (targetView) => {
    if (targetView === 'grid') {
      navigate('/grid');
    } else {
      navigate('/');
    }
    setIsGridView(targetView === 'grid');
    setSelectedColors([]); //Resets filters
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
      <br></br>
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
      <Routes>
        <Route path='/' element= {<OutfitPage clothingItems={clothingItemsData} filteredClothingItems={filteredClothingItems} />} />
        <Route path='/grid' element= {<GridPage clothingItems={clothingItemsData} filteredClothingItems={filteredClothingItems} />} /> 
      </Routes>
      <footer className="footer">
        Have a nice day ☺
      </footer>
    </div>
  );
}

export default App;
