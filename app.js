const express = require("express");
const cors = require('cors'); // Importo el middleware de CORS
const v1RecipieRouter = require('./src/v1/routes/recipieRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Aplico el middleware de CORS antes de definir tus rutas
app.use(cors());

// Servir archivos estaticos desde el directorio public
app.use(express.static("public"));

// Defino las rutas
app.use("/api/v1/recipies", v1RecipieRouter);

// Enviando el archivo HTML de la página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Middleware para manejar errores 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'error404.html'));
});

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
