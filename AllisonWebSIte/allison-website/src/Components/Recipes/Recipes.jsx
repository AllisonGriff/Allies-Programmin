import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard/RecipeCard';

const Recipes = () => {
    const [list, setList] = useState([]);
    const [entry, setEntry] = useState("");

    function findRecipe(searchTerm) {
        var ourLink = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchTerm;

        fetch(ourLink)
            .then(response => response.json())
            .then(data => {
                if (data.meals) {
                    setList(data.meals);
                } else {
                    setList([{
                        strMeal: "¯\_(ツ)_/¯",
                        strMealThumb: "https://media.tenor.com/damu8hbJ19YAAAAi/shrug-emoji.gif",
                        strInstructions: "Sorry! :( No Matches were found, Please try checking your spelling and try again!",
                    }]);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                setList([{
                    strMeal: "¯\\_(ツ)_/¯    Sorry! :( No Matches were found, Please try checking your spelling and try again!     ¯\\_(ツ)_/¯"
                }]);
            });
    }

    useEffect(() => {
        var nextLink = "https://www.themealdb.com/api/json/v1/1/categories.php";
        fetch(nextLink)
            .then(response => response.json())
            .then(data => setList(data.categories));
    }, []);

    useEffect(() => {
        if (entry) {
            findRecipe(entry);
        }
    }, [entry]);

    return (
        <div>
            <h1>Find a recipe!</h1>
            <br></br>
            <h2>Input the protein you want to work with below. After, Sit back and relax as we show you some options to spice up dinner tonight!</h2>
            <input onChange={(user) => { setEntry(user.target.value) }} type="text"></input>
            <div style={{ display: "grid", gap: "10px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                {list.map((card) => {
                    return (
                        <button key={card.strCategory || card.strMeal} onClick={() => setEntry(card.strCategory)}>
                            <RecipeCard
                                title={card.strMeal ? card.strMeal : card.strCategory}
                                pic={card.strMealThumb ? card.strMealThumb : card.strCategoryThumb}
                                description={card.strInstructions ? card.strInstructions : card.strCategoryDescription}
                                link={card.strYoutube}
                            />
                        </button>
                    )
                })}
            </div>
        </div>
    );
}

export default Recipes;
