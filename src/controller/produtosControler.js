const { prisma } = require("../services")
async function BuscarProdutos() {
    try {
        return await prisma.produtos.findMany();
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
}

async function BuscarUmProduto(id) {
    try {
        return await prisma.produtos.findFirst({
            where: {
                produto_id: Number(id)
            }
        })
    }
    catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }

    }
}
async function CriarProdutos(dados) {
    try {
        return await prisma.produtos.create({ data: dados });
    }
    catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }

    }
}
async function EditarProdutos(id, dados) {
    try {
        return await prisma.produtos.update({
            where: { produto_id: Number(id) },
            data: dados
        })
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }

    }
}
    async function DeletarProduto(id) {
        // return await executarSQL(` DELETE FROM produtos WHERE produto_id = ${id};`)
        try {
            return await prisma.produtos.delete({
                where: {
                    produto_id: Number(id)
                }
            });
        }
        catch (error) {
            return {
                tipo: "error",
                mensagem: error.message
            }

        }
    }


    module.exports = {
        BuscarProdutos,
        BuscarUmProduto,
        CriarProdutos,
        EditarProdutos,
        DeletarProduto
    }