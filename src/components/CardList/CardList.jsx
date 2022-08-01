
import "./CardList.scss"
const CardList = ({beerName, beerImg, beerTag, beerPh, beerAbv, firstBrewed}) => {

    return (
      <div className="CardList">
        <h2 className="CardList__heading">{beerName}</h2>
        <img src={beerImg} alt="" />
        <h3 className="CardList__heading">{beerTag}</h3>
        <h3 className="CardList__heading">PH: {beerPh}</h3>
        <h3 className="CardList__heading">ABV: {beerAbv}</h3>
        <h3 className="CardList__heading">First Brewed: {firstBrewed}</h3>
      </div>
    );
  };
  
  export default CardList;
  