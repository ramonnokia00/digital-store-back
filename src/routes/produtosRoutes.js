const { BuscarProdutos, BuscarUmProduto, CriarProdutos, EditarProdutos, DeletarProduto } = require("../controller/produtosControler");


const router = require("express").Router();
router.get("/",  async (req, res) => {
    res.send(await BuscarProdutos() );
})
router.get("/:id", async(req, res) => {
    res.send( await BuscarUmProduto(req.params.id));
});
router.post("/", async(req, res) => {
    res.send(await CriarProdutos(req.body));
});
router.put("/:id", async(req, res) => {
    res.send(await EditarProdutos(req.params.id, req.body));
});
router.delete("/:id", async(req, res) => {
    res.send(await DeletarProduto(req.params.id));
});

module.exports = router