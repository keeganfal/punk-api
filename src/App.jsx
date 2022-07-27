
import './App.css';
import CardList from './components/CardList/CardList';
import Nav from './components/Nav/Nav.jsx';

import beers from "./data/beers.js"

function App() {

  const cardListJSX = beers.map((beer) => (
    <CardList key={beer.id} beerName={beer.name} beerTag={beer.tagline}/>
  ));

  console.log(cardListJSX);
  return (
    <div className="App">
      <div className="title">PUNK API BREWERY</div>
      <Nav></Nav>
      <div className="CardList-container">
      {cardListJSX}
      </div>
    </div>
  );
}

export default App;
