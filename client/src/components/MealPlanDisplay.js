import React, { useState, useRef, useEffect } from "react";

function MealPlanDisplay({ data }) {
  
  const [cardWidth, setCardWidth] = useState();
  const [activeTab, setActiveTab] = useState(false);
  const [left, setLeft] = useState();
  const [right, setRight] = useState();
  const cardRef = useRef();

  useEffect(() => {
    const { current } = cardRef;
    if (current) {
      const cardRect = current.getBoundingClientRect();
      const { width } = cardRect;
      setCardWidth(width);
    }
  }, [])

  const setIndicator = (tabNum) => {
    switch (tabNum) {
      case 1:
        setLeft(0);
        setRight((cardWidth * 2) / 3);
        break;
      case 2:
        setLeft(cardWidth / 3);
        setRight(cardWidth / 3);
        break;
      case 3:
        setLeft((cardWidth * 2) / 3);
        setRight(0);
        break;
      default:
        break;
    }
  }

  return (
    <div className="card" ref={cardRef}>
      <div className="card-content">
        <p>Nutrient Info:</p>
        <div>
          <p>Calories: {data.nutrients.calories}</p>
          <p>Protein: {data.nutrients.protein}g</p>
          <p>Fat: {data.nutrients.fat}g</p>
          <p>Carbs: {data.nutrients.carbohydrates}g</p>
        </div>
      </div>
      <div className="card-tabs">
        <ul className="tabs tabs-fixed-width" data-ol-has-click-handler="">
          <li className="tab">
            <a
              href="#1"
              onClick={(e) => {
                setActiveTab(1)
                setIndicator(1);
              }}
            >
              Meal One
            </a>
          </li>
          <li className="tab">
            <a
              href="#2"
              onClick={(e) => {
                setActiveTab(2)
                setIndicator(2);
              }}
            >
              Meal Two
            </a>
          </li>
          <li className="tab">
            <a
              href="#3"
              onClick={(e) => {
                setActiveTab(3)
                setIndicator(3);
              }}
            >
              Meal Three
            </a>
          </li>
          <li className="indicator" style={{ left: `${left}px`, right: `${right}px` }}></li></ul>
      </div>
      <div className="card-content grey lighten-4">
        <div
          id="1"
          style={activeTab === 1 ? {} : { display: "none" }}
        >
          <p>
            <a href={data.meals[0].sourceUrl} target="_blank">{data.meals[0].title} (External Site)</a>
          </p>
          <p>
            Time to prepare: {data.meals[0].readyInMinutes} minutes.
          </p>
          <p>
            Serves {data.meals[0].servings} people.
          </p>
        </div>
        <div
          id="2"
          style={activeTab === 2 ? {} : { display: "none" }}
        >
          <p>
            <a href={data.meals[1].sourceUrl} target="_blank">{data.meals[1].title} (External Site)</a>
          </p>
          <p>
            Time to prepare: {data.meals[1].readyInMinutes} minutes.
          </p>
          <p>
            Serves {data.meals[1].servings} people.
          </p>
        </div>
        <div
          id="3"
          style={activeTab === 3 ? {} : { display: "none" }}
        >
          <p>
            <a href={data.meals[2].sourceUrl} target="_blank">{data.meals[2].title} (External Site)</a>
          </p>
          <p>
            Time to prepare: {data.meals[2].readyInMinutes} minutes.
          </p>
          <p>
            Serves {data.meals[2].servings} people.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MealPlanDisplay;