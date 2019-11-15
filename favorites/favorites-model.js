
const db = require("../data/db-config.js");

const getFavorites = () => {
    return db("favorites");
}

const addFavorite = (favorite) => {
    return db("favorites").insert(favorite)
}

module.exports = {
    getFavorites, 
    addFavorite
}