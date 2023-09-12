const Recipie = require('../database/Recipie')

const getAllRecipies = (filterParams) => {
  try {
    const allRecipies = Recipie.getAllRecipies(filterParams)
    return allRecipies;
  } catch (error) {
    throw error
  }
};

const getOneRecipie = (recipieId) => {
  try {
    const recipie = Recipie.getOneRecipie(recipieId);
    return recipie;
  } catch (error) {
    throw error;
  }
};

const createNewRecipie = () => {
  return;
};

const updateOneRecipie = () => {
  return;
};

const deleteOneRecipie = () => {
  return;
};

module.exports = {
  getAllRecipies,
  getOneRecipie,
  createNewRecipie,
  updateOneRecipie,
  deleteOneRecipie,
};