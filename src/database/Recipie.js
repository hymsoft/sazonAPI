const DB = require('./db.json')

// const getAllRecipies = (filterParams) => {
//   try {
//     if (filterParams.ingredient) {

//       return DB.recetas.filter((recipie) =>
//         recipie.ingredientes.nombre.toLowerCase().includes(filterParams.ingredient)
//       );
//     }
//     // Otros if se colocarán aquí para diferentes parámetros
//     return recipies;
//   } catch (error) {
//     throw { status: 500, message: error };
//   }
// };

const getAllRecipies = (filterParams) => {
  try {
    if (filterParams.ingredient) {
      return DB.recetas.filter((recipie) =>
        recipie.ingredientes.some((ingrediente) =>
          ingrediente.nombre.toLowerCase().includes(filterParams.ingredient.toLowerCase())
        )
      );
    }
    // Otros if se colocarán aquí para diferentes parámetros
    return DB.recetas;
  } catch (error) {
    throw { status: 500, message: error };
  }
};


const getOneRecipie = (recipieId) => {
  try {
    const recipie = DB.recetas.find((recipie) => recipie.id === recipieId);
    if (!recipie) {
      throw {
        status: 400,
        message: `No se encuentra la receta con el id '${recipieId}'`,
      };
    }
    return recipie;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = { getAllRecipies, getOneRecipie }