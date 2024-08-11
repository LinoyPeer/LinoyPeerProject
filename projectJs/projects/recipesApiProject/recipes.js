const app_id = "e7b02371";
const app_key = "c4f0fcdcbf33b7f2f9927373cfc6e43f";
let query = "chicken";


const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`);

    const data = await response.json();
    // console.log(data);
    return data;
}
const recipesFull = await getRecipes();
let recipes = [...recipesFull.hits].map(hit => hit.recipe);
const search = (text) => {
    recipes = recipes.filter((recipe) => {

        let name = recipe.label.toLowerCase();
        console.log(name);
        return name.includes(text.toLowerCase());
    })
    // בדקי מה מכיל המערך של המתכונים
}


const reset = () => {
    recipes = [...recipesFull.hits].map(hit => hit.recipe);
}

export { getRecipes, recipes, search, reset };
