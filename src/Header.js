import React, {useState} from 'react';
import './Header.css'; // Import the CSS file

const Header = ({ setSearchTerm }) => {
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="head">
    <h1>ProductX</h1>
    <input type="text"
        placeholder="Search beers..."
        name="find"
        onChange={handleChange}
        className="search-bar"
      />
    </div>
  );
};

export default Header;
