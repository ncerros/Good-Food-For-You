import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Col } from "../components/Grid";
//import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Details(props) {
  const [product, setProduct] = useState({});

  // When this component mounts, grab the product with the _id of props.match.params.id
  // e.g. localhost:3000/product/1756356
  const { id } = useParams()
  useEffect(() => {
    API.getProduct(id)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  })

  return (
      <div className="container">
        <div className="row">
          <div className="col s8">
            <div>
              <h4>{product.title}</h4> 
              <img src={product.image} alt={product.title} /> 
              <p><strong>Price: </strong>{product.price}</p>
              <p><strong>Decription: </strong>{product.description}</p>
              <p><strong>Ingredient List: </strong>{product.ingredientList}</p> 
            </div> 
            <p></p>
          </div>
        </div>
        
        <div className="row">
          <div className="col s2">
            <Link to="/product">← Click For Product Search</Link>
          </div>
        </div>
      </div>
    );
  }


export default Details;
