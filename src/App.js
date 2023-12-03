import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCard from './beerCard';
import Header from './Header';
import Footer from './Footer';
import './App.css'; // Import the CSS file

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(response => setBeers(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header setSearchTerm={setSearchTerm} />
      <div className="beer-list">
        {filteredBeers.map(beer => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
