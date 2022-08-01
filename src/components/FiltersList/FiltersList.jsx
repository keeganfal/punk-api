import "./ListItem.scss";
import { useState } from "react";

const FiltersList = ({ listName, handleDelete }) => {
  const [done, setDone] = useState("listItem");

  const handleCheckbox = () => {
    if (done == "listItem") {
        setDone("listItem--done")
    }
    else{
        setDone("listItem")
    }
  }

  // https://api.punkapi.com/v2/beers?abv_gt=6

  return (
    <>
      <label htmlFor="">Greater than 6%</label>
      <input type="checkbox" onClick={handleCheckbox} />
      <label htmlFor="">Calssic</label>
      <input type="checkbox" onClick={handleCheckbox} />
      <label htmlFor="">Greater than 6%</label>
      <input type="checkbox" onClick={handleCheckbox} />
    </>
   
  );
};

export default FiltersList;
