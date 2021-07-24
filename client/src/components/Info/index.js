import React from "react";

const Info = (props) => {
    return (
        <div className="row basic-card container">
            <div className="col s12 m6">
                <div className="#a5d6a7 green lighten-3">
                    <div className="card-content white-text" style={{ display: "flex", margin: 1 }}>
                        <span className="card-title" style={{
                            color: "black",
                            flex: 1,
                            alignSelf: "center",
                            fontSize: 30,
                        }}>{props.name}</span>
                        <p style={{ margin: 10 }}></p>
                        <div>
                        </div>
                    </div>
                    <img src={"https://spoonacular.com/cdn/ingredients_100x100/" + props.image} alt="grocery items" />
                    <div className="card-action">
                        <a className="waves-effect waves-light btn #2e7d32 green darken-3" style={{ margin: 5, marginLeft: 400 }} onClick={props.handleSave} >Save Item</a>
                    </div>
                </div>
            </div>
            <div className="card-content">
            </div>
        </div>

    )
}
export default Info;