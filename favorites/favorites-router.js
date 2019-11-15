const express = require("express").Router();

const fav = require("./favorites-model");

express.get("/", (req, res) => {
    fav.getFavorites()
        .then(favorite => {
            res.status(200).json(favorite)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not retrieve favorite"})
        })
})

express.post("/", (req, res) => {
    fav.addFavorite(req.body, "id")
        .then(favorite => {
            res.status(200).json(favorite);
        })
        .catch(err => {
            res.status(500).json({ message: "Could not add new favorite"})
        })
})


module.exports = express;