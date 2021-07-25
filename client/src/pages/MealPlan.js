import React, { useState, useEffect } from "react";
import MealPlanDisplay from "../components/MealPlanDisplay";
import API from "../utils/API";

function MealPlan() {

  const [mpData, setMPData] = useState(null);
  const [mealPlans, setMealPlans] = useState([]);

  useEffect(() => {
    (async function getMealData() {
      const response = await API.getMealPlans();
      setMealPlans(response.data)
    })()
  }, [])

  const formSubmit = async (event) => {
    event.preventDefault();
    let exclusion = '';
    const nutsCB = document.getElementById('nuts');
    const shellfishCB = document.getElementById('shellfish');
    if (nutsCB.checked) {
      exclusion = nutsCB.id;
    }
    if (shellfishCB.checked) {
      exclusion
        ? exclusion = `${exclusion},${shellfishCB.id}`
        : exclusion = shellfishCB.id
        ;
    }
    const daysNode = document.getElementById('days');
    const caloriesNode = document.getElementById('calories');
    const dietNode = document.getElementById('diet');
    const days = daysNode.value;
    const calories = caloriesNode.value;
    const diet = dietNode.value;

    const query = `${days ? `timeFrame=${days}` : ''}${calories ? `&targetCalories=${calories}` : ''}${diet ? `&diet=${diet}` : ''}${exclusion ? `&exclude=${exclusion}` : ''}`;
    // console.log(query);
    const response = await API.generateMealPlan(query);
    // console.log(response.data);
    setMPData(response.data);
  }

  const handleSave = async () => {
    const newMealPlan = await API.saveMealPlan(mpData);
    // console.log(newMealPlan)
    setMealPlans([...mealPlans, newMealPlan.data]);
    // console.log(mealPlans)
  }

  return (

    <div className="row" style={{ margin: "30px" }}>
      <div className="col s6">
        <div className="row">
          <form className="col s12 #81c784 green lighten-4" style={{paddingTop: "10px", paddingLeft: "30px"}}>
            <div className="row">
              <div className="col s12">
                <div className="input-field col s8" >
                  <select
                    className="browser-default"
                    style={{ marginTop: "15px" }}
                    id="days"
                  >
                    <option value="day">One Day</option>
                    <option value="week">Full Week</option>
                  </select>
                  <label className="active" style={{color: "black"}}>Number Of Days To Generate Meal Plan For</label>
                </div>
              </div>
              <div className="col s12">
                <div className="input-field col s8">
                  <input
                    type="text"
                    id="calories"
                  ></input>
                  <label className="active" style={{color: "black"}}>Caloric Target Per Day</label>
                </div>
              </div>
              <div className="col s12">
                <div className="input-field col s8">
                  <select
                    className="browser-default"
                    style={{ marginTop: "15px" }}
                    id="diet"
                  >
                    <option value="vegan">Vegan</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="glutenfree">Gluten Free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="paleo">Paleo</option>
                  </select>
                  <label className="active" style={{color: "black"}}>Diet Type</label>
                </div>
              </div>
              <div className="input-field col s12">
                <p>
                  <label>
                    <input type="checkbox" id="nuts" />
                    <span style={{color: "black"}}>Nuts</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" id="shellfish" />
                    <span style={{color: "black"}}>Shellfish</span>
                  </label>
                </p>
                <button
                  className="btn #81c784 green lighten-1 z-depth-2"
                  style={{ marginTop: "15px", marginLeft: "15px" }}
                  onClick={(e) => formSubmit(e)}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          {mpData
            ? <div>
              <MealPlanDisplay
                data={mpData}
              />
              <button
                className="btn #81c784 green lighten-1 z-depth-5"
                style={{ marginTop: "15px", marginLeft: "15px" }}
                onClick={() => handleSave()}
              >
                Save
              </button>
            </div>
            : "Meal plan data will show here once you press 'Submit' above."}
        </div>
      </div>
      <div className="col s6" style={{overflow: "scroll", overflowX: "hidden", maxHeight: "900px"}}>
        {mealPlans.length > 0
          ? mealPlans.map(mealPlan => {
            return (<MealPlanDisplay
              data={mealPlan}
              key={mealPlan._id}
            />)
          })
          : "Your saved meal plans will show here."}
      </div>
    </div>



  )
}

export default MealPlan;