const router = require("express").Router();

const charactersDB = require("../helpers/charactersModel.js");

// GET the characters
router.get("/", (req, res) => {
  charactersDB
    .get()
    .then(characters => {
      res.status(200).json(characters);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: `Error in ${err}` });
    });
});

// GET a character by :id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  charactersDB
    .get(id)
    .then(character => {
      res.status(200).json(character);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `Errors of ${err}`
      });
    });
});

// POST character
router.post("/", (req, res) => {
  const newCharacter = req.body;
  charactersDB
    .insert(newCharacter)
    .then(newCharacter => {
      res.status(201).json(newCharacter);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `Error of ${err}`
      });
    });
});

// DELETE /:id
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  charactersDB
    .remove(id)
    .then(deleteCharacter => {
      res.status(201).json(deleteCharacter);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `Error from ${err}`
      });
    });
});

// PUT /:id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updateCharacter = req.body;

  charactersDB
    .update(id, updateCharacter)
    .then(updateCharacter => {
      res.status(200).json(updateCharacter);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `Error from ${err}`
      });
    });
});

module.exports = router;
