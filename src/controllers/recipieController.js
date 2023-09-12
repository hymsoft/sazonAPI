const recipieService = require('../services/recipieService')
const info = { api: "sazonAPI", creador: "Hugo Antonio Segura", empresa: "HyM Soft" }

const getAllRecipies = (req, res) => {
  const { ingredient } = req.query
  try {
    const allRecipies = recipieService.getAllRecipies({ ingredient })
    res.send({ status: 'OK', info: info, data: allRecipies });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Error", info: info, data: { error: error?.message || error } });
  }
};

const getOneRecipie = (req, res) => {
  const {
    params: { recipieId },
  } = req;
  if (!recipieId) {
    res
      .status(400)
      .send({
        status: "Error",
        data: { error: "Parametros ':recipieId' no puede estar vacio" },
      });
  }
  try {
    const recipie = recipieService.getOneRecipie(recipieId);
    res.send({ status: "OK", info: info, data: recipie });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "Error", info: info, data: { error: error?.message || error } });
  }

};

const createNewRecipie = (req, res) => {
  const createdRecipie = recipieService.createNewRecipie()
  res.send("Agregar receta, función no implementada");
};

const updateOneRecipie = (req, res) => {
  const updatedRecipie = recipieService.updateOneRecipie()
  res.send("Actualizar receta, función no implementada ");
};

const deleteOneRecipie = (req, res) => {
  recipieService.deleteOneRecipie();
  res.send("Borrar receta, función no implementada");
};

module.exports = {
  getAllRecipies,
  getOneRecipie,
  createNewRecipie,
  updateOneRecipie,
  deleteOneRecipie,
};