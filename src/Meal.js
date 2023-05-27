import React, { useState, useEffect } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/random.php";

const Meal = () => {
  const [food, setFood] = useState([]);
  const fetchFood = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setFood(data.meals);
  };

  useEffect(() => {
    fetchFood();
  }, []);

  return (
    <>
      <div className="button">
        <button onClick={() => fetchFood()} className="btn">
          Lets Cook!
        </button>
      </div>

      <section className="meals">
        {food.map((e) => {
          const { idMeal, strMeal, strInstructions, strMealThumb } = e;

          return (
            <article key={idMeal}>
              <div>
                <h2>{strMeal}</h2>
                <img src={strMealThumb} alt={strMeal} />
              </div>
              <div>
                <h3>Step by Step</h3>
                <p>{strInstructions}</p>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Meal;
