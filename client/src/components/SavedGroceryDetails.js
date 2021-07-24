import React from "react";

const SavedGroceryDetails = (props) => {
  console.log(props)
  return (
    <ul className="collection container">
      <li className="collection-item avatar right-align row col s12">
        <div className="title center-align">{props.name}</div> <br/>
      </li>
      <li className="row">
        <img src={"https://spoonacular.com/cdn/ingredients_100x100/" + props.image} alt="items on a grocery list" className="row left-align circle" />
        <div className="right-align row"><button onClick={props.handleDelete} className="btn btn-primary"> Delete</button></div>
      </li>
    </ul>
  
  );
}

export default SavedGroceryDetails;