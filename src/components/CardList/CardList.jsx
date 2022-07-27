
import "./CardList.scss"
const CardList = ({beerName, beerTag}) => {

    return (
      <div className="CardList">
        <h2 className="CardList__heading">{beerName}</h2>
        <h2 className="CardList__heading">{beerTag}</h2>
      </div>
    );
  };
  
  export default CardList;
  