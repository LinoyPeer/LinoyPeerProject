let likedCards = [];
const getDataFromLocalStorage = () => {
    let data = localStorage.getItem("cardsLikes");
    if (!data) {
        localStorage.setItem("cardsLikes", JSON.stringify(likedCards));
        data = localStorage.getItem("cardsLikes");
    }
    likedCards = JSON.parse(data);
}

const updateDataLocalStorage = (cardName) => {
    if (likedCards.includes(cardName)) {
        let filterd = likedCards.filter((item) => {
            return item != cardName
        })
        likedCards = filterd;
    } else {
        likedCards.push(cardName);
    }
    localStorage.setItem("cardsLikes", JSON.stringify(likedCards))
}
export { likedCards, getDataFromLocalStorage, updateDataLocalStorage }