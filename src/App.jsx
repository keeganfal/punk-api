
import './App.css';
import CardList from './components/CardList/CardList';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';

function App() {

  const [beers, setBeers] = useState();

  // getting the beers punk api
  const getBeers = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();

    const cardListJSX = data.map((beer) => (
      <CardList key={beer.id} beerName={beer.name} beerTag={beer.tagline}/>
    ));

    setBeers(cardListJSX)
  };

  // static beers.js data file
  // const cardListJSX = data.map((beer) => (
  //   <CardList key={beer.id} beerName={beer.name} beerTag={beer.tagline}/>
  // ));

  return (
    <div className="App">
      <div className="title">PUNK API BREWERY</div>
      <button onClick={getBeers}>GET BEERS</button>
      <Nav></Nav>
      <div className="CardList-container">
      
      {beers}
      </div>
    </div>
  );
}

export default App;
