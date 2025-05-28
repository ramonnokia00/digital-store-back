const express = require("express")
const app = express();
const port = 8000;

const usuariosRoutes = require("./src/routes/usuariosRoutes");

app.get("/", (req, res) => {
    res.send("hello word");
});

app.use("/usuarios", usuariosRoutes);

// error 404
app.use((req, res) => {
    res.status(404).send("Rota Não encontrada");
})

app.listen(port, () => {
    console.log(`servidor de pé: http://localhost:${port}`);
})