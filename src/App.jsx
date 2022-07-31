
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBar from './components/SearchBar/SearchBar.jsx';
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

  // const filterResults =  async (e) => {
  //   const res = await fetch("https://api.punkapi.com/v2/beers");
  //   const data = await res.json();

  //   const newStr = data.filter((beer) => {
  //       if (beerName == beer.name) {
  //         <CardList key={beer.id} beerName={beer.name} beerImg={beer.image_url} beerTag={beer.tagline}/>
  //       }}
        
  // )};

  return (
    <div className="App">
      <div className="title">PUNK API BREWERY</div>

      <nav className='nav'>
        <SearchBar getBeers={getBeers}></SearchBar>
      </nav>
      
      <div className="CardList-container">
        {beers}
      </div>

    </div>
  );
}

export default App;
