import { recipes, search, reset } from "./recipes.js";
import { getDataFromLocalStorage, likedCards, updateDataLocalStorage } from "./recipesStorage.js";
const cardsDiv = document.getElementById("cards");

const searchInput = document.querySelector("#search");
searchInput.addEventListener("keyup", (event) => {
    reset();
    cardsDiv.innerHTML = "";
    if (!event.target.value || event.target.value == "") {
        cardsDiv.innerHTML = ""

        console.log("Search term:", event.target.value.trim());

        return createCardList();
    }
    search(event.target.value);
    createCardList();
});


export const createCard = (recipe) => {
    const card = document.createElement("div");
    card.className = "card shadow m-2 col-md-4 col-sm-12";

    const cardImg = document.createElement("img");
    cardImg.className = "card-img-top mt-2 border-rounded";
    cardImg.src = recipe.image;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = recipe.label;

    const calories = document.createElement("p");
    calories.className = "card-text";
    calories.textContent = `Calories: ${Math.floor(recipe.calories).toLocaleString()}`;

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer d-flex";

    const heart = document.createElement("i");
    heart.className = "bi bi-heart";

    // טעינת הלייקים מה-localStorage




    // בדיקה אם הכרטיס כבר נמצא בלייקים
    if (likedCards.some(item => item.uri === recipe.uri)) {
        heart.className = "bi bi-heart-fill";
    }

    heart.addEventListener("click", () => {
        updateDataLocalStorage(recipe.label);
        if (heart.className === "bi bi-heart") {
            heart.className = "bi bi-heart-fill";

            // הוספת הכרטיס למערך ושמירה באחסון מקומי
            // likedCards.push(recipe.label);
            // localStorage.setItem('cardsLikes', JSON.stringify(likedCards));

        } else {
            heart.className = "bi bi-heart";

            // הסרת הכרטיס מהמועדפים ושמירה מחדש באחסון מקומי
            // likedCards = likedCards.filter(item => item.uri !== recipe.uri);
            // localStorage.setItem('cardsLikes', JSON.stringify(likedCards));
        }

    });

    let isLiked = false;
    getDataFromLocalStorage();;
    if (likedCards.includes(recipe.label)) {
        isLiked = true
    }

    heart.className = `${isLiked ? "bi bi-heart-fill" : "bi bi-heart"}`
    card.appendChild(cardImg);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(calories);
    cardFooter.appendChild(heart);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    cardsDiv.appendChild(card);
};

export const createCardList = () => {
    // יצירת כרטיסים לכל המתכונים
    for (const recipe of recipes) {
        createCard(recipe);
    }

    // עדכון הלייקים באחסון מקומי
    // updateLocalStorage();
};

// const updateLocalStorage = () => {
//     const likedCards = JSON.parse(localStorage.getItem('cardsLikes')) || [];
//     const currentLikes = [];

//     // מעבר על כל הכרטיסים
//     const cards = document.querySelectorAll('.card');
//     cards.forEach(card => {
//         const heart = card.querySelector('i.bi-heart, i.bi-heart-fill');
//         const recipeLabel = card.querySelector('.card-title').textContent;

//         if (heart && heart.className === 'bi bi-heart-fill') {
//             const recipe = recipes.find(r => r.label === recipeLabel);
//             currentLikes.push(recipe);
//         }
//     });

//     // עדכון באחסון מקומי רק אם יש שינוי
//     if (JSON.stringify(currentLikes) !== JSON.stringify(likedCards)) {
//         localStorage.setItem('cardsLikes', JSON.stringify(currentLikes));
//     }
// };
