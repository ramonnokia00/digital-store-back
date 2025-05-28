const { executarSQL } = require("../services");

const router = require("express").Router();
router.get("/",  async (req, res) => {
    res.send(await executarSQL("SELECT * FROM produtos;"));
})
router.get("/:id", (req, res) => {
    res.send(`busca o usuarios com id ${req.params.id}`);
});
router.put("/", (req, res) => {
    res.send("Cria um  os usuarios");
});
router.delete("/:id", (req, res) => {
    res.send(`edtita Um usuario com o id ${req.params.id}`);
});
router.post("/:id", (req, res) => {
    res.send(`Busca todos os usuarios id ${req.params.id}`);
});

module.exports = router