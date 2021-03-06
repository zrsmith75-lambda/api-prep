const router = require("express").Router();
// const express = require('express)
// const router = express.Router()
const showsDB = require("../helpers/showsModel.js");

// GET shows
router.get("/", (req, res) => {
  showsDB
    .get()
    .then(shows => {
      res.status(200).json(shows);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `There is an error of ${err}`
      });
    });
});

// GET /:id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  showsDB
    .get(id)
    .then(show => {
      res.status(200).json(show);
    })
    .catch(err => {
      message: `Error: ${err}`;
    });
});

// GET shows' characters ?/:id?
router.get("/:id/characters", (req, res) => {
  const { id } = req.params;
  showsDB
    .getShowsCharacters(id)
    .then(characters => {
      res.status(200).json(characters);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `There was an error: ${err}`
      });
    });
});

// POST
router.post("/", (req, res) => {
  // const shows = req.body;
  showsDB
    .insert(req.body)
    .then(() => {
      res.status(201).json(req.body);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `There is an error of ${err}` });
    });
});

// DELETE /:id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  showsDB
    .remove(id)
    .then(deleteShow => {
      res.status(200).json(deleteShow);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `Error ${err}` });
    });
});

// PUT / PATCH /:id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updateShow = req.body;
  showsDB
    .update(id, updateShow)
    .then(updateShow => {
      res.status(200).json(updateShow);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `Error of ${err}` });
    });
});

module.exports = router;
