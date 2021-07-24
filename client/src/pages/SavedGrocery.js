import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API"
import SavedGroceryDetails from "../components/SavedGroceryDetails";


const SavedGrocery = () => {
    const [grocery, setGrocery] = useState([]);

    useEffect(() => {
        loadGrocery()
    }, [])

    const loadGrocery = () => {
        API.getGroceryList()
            .then(res => {
                console.log(res)
                setGrocery(res.data)
            }

            )
        //  .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        API.deleteGrocery(id)
            .then(res => loadGrocery())
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div>
                <div size="12">
                    <Jumbotron >
                        <h2 className="center-align">Grocery List</h2>
                    </Jumbotron>
                </div>
            </div>
            <div>
                <div size="md-12">
                    {grocery.length ? (
                        <div heading="Saved Grocery List">
                            {grocery.map(daGrocery => (
                                <SavedGroceryDetails
                                    key={daGrocery._id}
                                    name={daGrocery.name}
                                    image={daGrocery.image}
                                    handleDelete={() => handleDelete(daGrocery._id)}
                                />

                            ))}
                        </div>
                    ) : (
                        <div heading="Saved Grocery List"></div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default SavedGrocery;