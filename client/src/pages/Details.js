import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
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
      <Container fluid>
        <Row>
          <Col size="s8">
            <Jumbotron>
              <h3>{product.title}</h3> 
              <img src={product.image} alt={product.title} /> 
              <p><strong>Price: </strong>{product.price}</p>
              <p><strong>Decription: </strong>{product.description}</p>
              <p><strong>Ingredient List: </strong>{product.ingredientList}</p> 
            </Jumbotron> 
            <p></p>
          </Col>
        </Row>
        <Row>
          <Col size="s10 offset-s1">
            {/* <article>
              <h1>Details</h1>
              <p>
                {foods.details}
              </p>
            </article> */}
          </Col>
        </Row>
        <Row>
          <Col size="s2">
            <Link to="/">← Back to Grocery List</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Details;
