import React from 'react';
import './beerCard.css'; // Import the CSS file

const BeerCard = ({ beer }) => {
  return (
    <div className="beer-card">
      <figure><img src={beer.image_url} alt={beer.name} className="beer-image" /></figure>
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
    </div>
    );
};

export default BeerCard;
