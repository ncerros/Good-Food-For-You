import React from "react";



const SavedGroceryDetails = (props) => {
  // console.log(props)
  return (
    <div className="container">
      <div className="right-align row col s12">
        <div className="center-align #1b5e20 green darken-4 white-text" style={{fontSize: "40px"}}>{props.name}</div><br/>
      </div>
      <div className="row">
        <img src={"https://spoonacular.com/cdn/ingredients_100x100/" + props.image} alt="items on a grocery list" className="row left-align circle" />
      <div className="right-align row"><button onClick={props.handleDelete} className="btn btn-primary #a5d6a7 green lighten-2"> Delete</button></div>
      </div>
    </div>
  
  );
}

export default SavedGroceryDetails;