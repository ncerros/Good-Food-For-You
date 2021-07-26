import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import foodList from "../../foods/foodList";
import API from "../../utils/API";
//import { FormBtn } from "../../components/Form";
import Info from "../../components/Info";

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
        // console.log(groceryObject)
        if (groceryObject.name) {
            API.spoonGrocery(groceryObject.name.trim()).then(pullGrocery => {  setGroceryList(pullGrocery.data) })
        }
    };

    const handleSave = (item) => {
        API.saveGrocery(item).then(data => {
            // console.log(data);
        });

    }

    return (
            <div className="container">
                <h1>Grocery List</h1>
                <form>
                    <div className="input-field col s4" >
                        <input onChange={handleInputChange} name="name" placeholder="Enter Grocery Item" id="first_name" type="text" className="validate" />
                        <label htmlFor="name"></label>
                        <button className="btn btn-primary #a5d6a7 green lighten-1" onClick={handleFormSubmit}>Grocery Search</button>
                    </div>  
                    
                </form>
                { groceryList.length > 0 ?
                    groceryList.map(foodLists => (
                    <Info
                        key={foodLists.id}
                        name={foodLists.name}
                        image={foodLists.image}
                        handleSave = {() => handleSave({
                            name: foodLists.name,
                            image: foodLists.image
                        })}
                        
                    />

                    ))
                    :"No search found"
                }
            </div>
    )
};

export default Grocery;