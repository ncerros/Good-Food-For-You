import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Product() {
  const [products, setProducts] = useState([]);
  const [productsObject, setProductsObject] = useState({});

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = () => {
    API.getProducts()
      .then(res =>
        setProducts(res.data)
        //console.log(res)
        )
        .catch(err => console.log(err));
  };

  const deleteProduct = (id) => {
    API.deleteProduct(id)
      .then(res => loadProducts())
      .catch(err => console.log(err));
  }

  // useEffect(() => {
  //   API.findRecipeProduct().then((pull) => {
  //     setFoods(pull.data.products)
  //     setProduct(pull.data.products)
  //     console.log(pull.data.products)

  //   })
  // }, [setProduct]);

  // Handles updating component state when the user types into the input field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductsObject({...productsObject, [name]: value})
  };

  // When the form is submitted, use the API.saveFood method to save the food data
  // Then reload foods from the database
  
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   if(productsObject.title) {
  //     API.spoonPull (productsObject.title.trim()).then(pullProduct => {
  //       API.saveProduct ({
  //       title: productsObject.title,
  //       image: productsObject.image
  //     })
  //       .then(res => loadProducts())
  //       .catch(err => console.log(err));
  //     })
      
  //   }
  // };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(productsObject.title) {
      API.spoonPull (productsObject.title.trim()).then(pullProduct => { saveProducts(pullProduct)})
    }
  };
  const saveProducts = (products) => {
    console.log(products)
    console.log(products.data.products)
    products.data.products.forEach(async (product) => {
        await API.saveProduct ({
          ...product
          // title: productsObject.title,
          // image: productsObject.image,
        });
      })
      loadProducts();
  }

  return (
   
      <Container fluid >
        <Row>
          <Col size="s12 m5">
            <Jumbotron>
              <h4 className="z-depth-5">Enter Food Product</h4> 
            </Jumbotron>
            <br></br>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Grocery Product Name (required)"
              />
              {/* <Input
                onChange={handleInputChange}
                name="image"
                placeholder="Product Photo (optional)"
              /> */}
              <FormBtn
                disabled={!(productsObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Product
              </FormBtn>
            </form>
            <br/><br/>
            
          </Col>
        
          <Col size="s12 m7">
               <Jumbotron>
                <h4 className="z-depth-5">Product List Items</h4>
              </Jumbotron>
              <br></br>
                {products.length ? (
                <List>
                  {products.map(product => (
                    <ListItem key={product._id}>
                      <Link to={"/product/" + product._id}>
                        <strong>
                          {product.title}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => deleteProduct(product._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h4 className="z-depth-5">No Results to Display</h4>
              )}
              
          </Col>
        </Row>
      </Container>

  );
};




export default Product;


