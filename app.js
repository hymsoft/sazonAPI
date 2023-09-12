const express = require("express");
const cors = require('cors'); // Importo el middleware de CORS
const v1RecipieRouter = require('./src/v1/routes/recipieRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Aplico el middleware de CORS antes de definir tus rutas
app.use(cors());

// Defino las rutas
app.use("/api/v1/recipies", v1RecipieRouter);

app.get("/", (req, res) => {
  res.send(`<h1>sazonAPI</h1><br><h2>by HyM Soft</h2>`);
});

// Este middleware captura las solicitudes que llegan a este punto 
// si ninguna ruta anterior coincide
app.use((req, res, next) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
