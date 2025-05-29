const { executarSQL } = require("../services");
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

async function BuscarProdutos() {
    return await prisma.produtos.findMany();
    // return await executarSQL("SELECT * FROM produtos;");
}
async function BuscarUmProduto(id) {
    return await executarSQL (`SELECT * FROM produtos WHERE produtos = ${id};`);
}
async function CriarProdutos(dados) {
    return await executarSQL(`INSERT INTO produtos (produto_nome, produto_preco, produto_desconto, produto_imagem, marca_id, categoria_id) VALUES ('${dados.produto_nome}', ${dados.produto_preco}, ${dados.produto_desconto},'${dados.produto_imagem}', '${dados.marca_id}', ${dados.categoria_id});`)
}
async function EditarProdutos(dados, id) {
    return await executarSQL(`UPDATE produtos SET = produto_nome ${dados.produto_nome} produto_id = ${id.produto_id};`)
}

async function DeletarProduto(id) {
    return await executarSQL(` DELETE FROM produtos WHERE produto_id = ${id};`)
}


module.exports = {
    BuscarProdutos,
    BuscarUmProduto,
    CriarProdutos,
    EditarProdutos,
    DeletarProduto
}