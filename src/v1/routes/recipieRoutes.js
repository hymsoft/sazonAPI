const express = require("express");
const recipieController = require('../../controllers/recipieController')
const router = express.Router();

router.get("/", recipieController.getAllRecipies);
router.get("/:recipieId", recipieController.getOneRecipie);
router.post("/", recipieController.createNewRecipie);
router.patch("/:recetaId", recipieController.updateOneRecipie);
router.delete("/:recetatId", recipieController.deleteOneRecipie);

module.exports = router;