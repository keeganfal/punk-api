
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import FiltersList from './components/FiltersList/FiltersList';

import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [beers, setBeers] = useState();
  const [beerName, setBeerName] = useState("");
  const [alcohol, setAlcohol] = useState("");
  const [classic, setClassic] = useState("");
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    filterResults()
  }, [beerName, alcohol, classic])


  // getting the beers punk api
  const getBeers = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();
    const cardListJSX = data.map((beer) => (
      <CardList key={beer.id} beerName={beer.name} beerImg={beer.image_url} beerPh={beer.ph} beerTag={beer.tagline} firstBrewed={beer.first_brewed} beerAbv={beer.abv}/>
    ));

    setBeers(cardListJSX)
  };

  const filterResults =  async () => {
    console.log("filter starting");
    
    console.log(`https://api.punkapi.com/v2/beers?${beerName}${alcohol}${classic}`);
    const res = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=80&${beerName}${alcohol}${classic}`);
    const data = await res.json();
    const cardListJSX = data.map((beer) => (
      <CardList key={beer.id} beerName={beer.name} beerImg={beer.image_url} beerPh={beer.ph} beerTag={beer.tagline} firstBrewed={beer.first_brewed} beerAbv={beer.abv}/>
    ));
    setBeers(cardListJSX)
    setFilterData(data)
  };

  const handleBeerName = (name) => {
    if (name === ""){
      setBeerName("")
    }
    else{
      setBeerName(`beer_name=${name}&`);
    }
    filterResults()
  }

  const handleHighAlcohol = () => {
    if (alcohol !== "abv_gt=6&"){
      setAlcohol("abv_gt=6&");
    }
    else{
      setAlcohol("");
    }
  }

  const handleClassicRange = () => {
    if (classic !== "brewed_before=01-2010"){
      setClassic("brewed_before=01-2010");
    }
    else{
      setClassic("");
    }
  }

  const handleHighAcidity = () => {
    // const res = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80");
    // const data = await res.json();
    const data = filterData;
    const newArr = data.filter((beer) => {
        if (beer.ph < 4 && beer.ph) {
          return(beer)
        };
        return(null)
      }).map((beer) => (
        <CardList key={beer.id} beerName={beer.name} beerImg={beer.image_url} beerPh={beer.ph} beerTag={beer.tagline} firstBrewed={beer.first_brewed} beerAbv={beer.abv}/>
      ));
      setBeers(newArr)
  };

  return (
    <div className="App">
      <div className="title">PUNK API</div>

      <nav className='nav'>
        <SearchBar getBeers={getBeers} handleBeerName={handleBeerName}></SearchBar>
        <FiltersList handleHighAlcohol={handleHighAlcohol} handleClassicRange={handleClassicRange} handleHighAcidity={handleHighAcidity}></FiltersList>
      </nav>
      
      <div className="CardList-container">
        {beers}
      </div>

    </div>
  );
}

export default App;
