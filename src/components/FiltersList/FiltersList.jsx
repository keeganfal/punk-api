import "./FiltersList.scss";

const FiltersList = ({handleHighAlcohol, handleClassicRange, handleHighAcidity}) => {

  return (
    <>
      <label htmlFor="">High Alcohol (ABV value greater than 6%)</label>
      <input type="checkbox" onClick={handleHighAlcohol} />
      <br />
      <label htmlFor="">Classic Range (Was first brewed before 2010)</label>
      <input type="checkbox" onClick={handleClassicRange} />
      <br />
      <label htmlFor="">High Acidity (pH lower than 4)</label>
      <input type="checkbox" onClick={handleHighAcidity} />
    </>
   
  );
};

export default FiltersList;
