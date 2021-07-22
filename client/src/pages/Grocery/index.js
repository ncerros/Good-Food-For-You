import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import foodList from "../../foods/foodList";
import API from "../../utils/API";
import { FormBtn } from "../../components/Form";

const Grocery = () => {
    const [groceryList, setGroceryList] = useState([]);
    const [groceryObject, setGroceryObject] = useState({})

    // const deleteHandler = (id) => {
    //     if (window.confirm("Are you sure?")) {
    //     }
    // };

    useEffect(() => {
        makeList()
    }, [])

    const makeList = () => {
        API.getGrocery()
        .then (res =>
            setGroceryList(res.data)
            )
            .catch(err => console.log(err));
    };

    const deleteGrocery = (id) => {
        API.deleteGrocery(id)
        .then(res => makeList())
        .catch(err => console.log(err));
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGroceryObject({...groceryObject, [name]: value})
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(groceryObject.title) {
          API.spoonPulling (groceryObject.title.trim()).then(pullGrocery => { saveGrocery(pullGrocery)})
        }
      };

      const saveGrocery = (groceryList) => {
        console.log(groceryList)
        console.log(groceryList.data.groceryList)
        groceryList.data.groceryList.forEach(async (groceryLists) => {
            await API.saveGrocery ({
              ...groceryLists
              // title: productsObject.title,
              // image: productsObject.image,
            });
          })
          makeList();
      }



    return (
        <>
            <h1>The Real Grocery List</h1>
            <Link to="foods">
               <a class="waves-effect waves-light btn #2e7d32 green darken-3">Make List</a>
            </Link>
            <form>
                <div class="input-field col s6">
                    <input onChange={handleInputChange}placeholder="Grocery" id="first_name" type="text" class="validate" />
                    <label for="name">Grocery Item</label>
                </div>
                <FormBtn
                disabled={!(groceryObject.title)}
                onClick={handleFormSubmit}
                > Enter Grocery
                </FormBtn>   
            </form>
               {
                   foodList.map(foodLists => (
                   <div class="row basic-card">
                    <div class="col s12 m6">
                    <div class="#a5d6a7 green lighten-3">
                        <div class="card-content white-text" style={{display: "flex", margin: 1}}>
                        <span class="card-title" style={{
                            color: "black",
                            flex: 1,
                            alignSelf: "center",
                            fontSize: 30,
                                             
                       }}>{foodLists.title}</span>
                        
                        
                       <p style={{margin: 10}}></p>
                         <div> 
                            <a href={`/foods/${foodList._id}`} class="waves-effect waves-light btn #2e7d32 green darken-3" style={{margin: 5, marginLeft: 400}}>Edit</a>
                            <a class="waves-effect waves-light btn #2e7d32 green darken-3" onClick={() => deleteGrocery(foodList._id)}>Delete</a>
                          
                        </div>
                        </div>
                        <p>{foodLists.content}</p>
                        {/* <div class="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                        </div> */}
                    </div>
                    </div>
                    <div class="card-content">
                        
                    </div>

                </div>
                   ))
               }
                
            
        </>
    ) 
};

export default Grocery;