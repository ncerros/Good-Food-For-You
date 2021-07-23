import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import foodList from "../../foods/foodList";
import API from "../../utils/API";
//import { FormBtn } from "../../components/Form";

function Grocery () {
    const [groceryList, setGroceryList] = useState([]);
    const [groceryObject, setGroceryObject] = useState({})

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {
        }
    };

    useEffect(() => {
        makeList()
    }, [])

    const makeList = () => {
        API.getGrocery()
            .then(res =>
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
        setGroceryObject({ ...groceryObject, [name]: value })
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(groceryObject)
        if (groceryObject.name) {
            API.spoonGrocery(groceryObject.name.trim()).then(pullGrocery => {  setGroceryList(pullGrocery.data) })
        }
    };

    const handleSave = (item) => {
        API.saveGrocery(item).then(data => {
            console.log(data);
        });

    }

    return (
        <>
            <h1>Grocery List</h1>
            
            <form>
                <a class="waves-effect waves-light btn #2e7d32 green darken-3">View List</a>
                 <div class="input-field col s6" >
                    <input onChange={handleInputChange} name="name" placeholder="Enter Grocery Item" id="first_name" type="text" class="validate" />
                    <label for="name"></label>
                    <button onClick={handleFormSubmit}>Grocery Search</button>
                </div>  
                {/* <FormBtn
                    disabled={!(groceryObject.title)}
                > Enter Grocery
                </FormBtn> */}
            </form>
            { groceryList.length > 0 ?
                groceryList.map(foodLists => (
                    
                    <div class="row basic-card">
                        <div class="col s12 m6">
                            <div class="#a5d6a7 green lighten-3">
                                <div class="card-content white-text" style={{ display: "flex", margin: 1 }}>
                                    <span class="card-title" style={{
                                        color: "black",
                                        flex: 1,
                                        alignSelf: "center",
                                        fontSize: 30,

                                    }}>{foodLists.name}</span>


                                    <p style={{ margin: 10 }}></p>
                                    <div>

                                    </div>
                                </div>
                                <img  src= {"https://spoonacular.com/cdn/ingredients_100x100/" + foodLists.image} alt="grocery items"/>
                                <div class="card-action">
                                    <a class="waves-effect waves-light btn #2e7d32 green darken-3" style={{ margin: 5, marginLeft: 400 }} onClick={() => handleSave(foodLists)} >Save</a>
                                    
                                    {/* 
                                    <a href="#">This is a link</a>
                                    <a href="#">This is a link</a>
                                     */}
                                </div>
                            </div>
                        </div>
                        <div class="card-content">

                        </div>

                    </div>
                ))
                :"No search found"
            }


        </>
    )
};

export default Grocery;