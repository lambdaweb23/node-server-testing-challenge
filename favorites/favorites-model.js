
const db = require("../data/db-config.js");

const getFavorites = () => {
    return db("favorites");
}

const addFavorite = (item) => {
    return db("favorites").insert(item)
}

module.exports = {
    getFavorites, 
    addFavorite
}