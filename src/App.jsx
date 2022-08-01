
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import FiltersList from './components/FiltersList/FiltersList';

import { useState } from 'react';

function App() {

  const [beers, setBeers] = useState();

  // getting the beers punk api
  const getBeers = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();
    console.log("getting beers");
    console.log(data);
    const cardListJSX = data.map((beer) => (
      <CardList key={beer.id} beerName={beer.name} beerImg={beer.image_url} beerTag={beer.tagline}/>
    ));

    setBeers(cardListJSX)
  };

  const filterResults =  async (beerName) => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();
    if (beerName === "") {
      getBeers()
    };
    const newArr = data.filter((beer) => {
        
        if (beer.name === beerName) {
          return(setBeers(<CardList key={beer.id} beerName={beer.name} beerImg={beer.image_url} beerTag={beer.tagline}/>))
        };
        return(null)
      })
  };

  const handleHighAlcohol = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers?abv_gt=6");
    const data = await res.json();

    const cardListJSX = data.map((beer) => (
      <CardList key={beer.id} beerName={beer.name} beerImg={beer.image_url} beerTag={beer.tagline}/>
    ));

    setBeers(cardListJSX)
  }

  const handleClassicRange = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers?brewed_before=10");
    const data = await res.json();

    const cardListJSX = data.map((beer) => (
      <CardList key={beer.id} beerName={beer.name} beerImg={beer.image_url} beerTag={beer.tagline}/>
    ));

    setBeers(cardListJSX)
  }

  const handleHighAcidity = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();

    const newArr = data.filter((beer) => {
        if (beer.ph > 4) {
          return(beer)
        };
        return(null)
      }).map((beer) => (
        <CardList key={beer.id} beerName={beer.name} beerImg={beer.image_url} beerTag={beer.tagline} beerPh={beer.ph}/>
      ));
      setBeers(newArr)
  };

  return (
    <div className="App">
      <div className="title">PUNK API BREWERY</div>

      <nav className='nav'>
        <SearchBar getBeers={getBeers} filterResults={filterResults}></SearchBar>
        <FiltersList handleHighAlcohol={handleHighAlcohol} handleClassicRange={handleClassicRange} handleHighAcidity={handleHighAcidity}></FiltersList>
      </nav>
      
      <div className="CardList-container">
        {beers}
      </div>

    </div>
  );
}

export default App;
