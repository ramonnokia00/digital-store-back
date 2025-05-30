const { prisma } = require("../services")
async function BuscarUsuarios() {
    try {
        return await prisma.usuarios.findMany();
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
}

async function BuscarUmUsuario(id) {
    try {
        return await prisma.usuarios.findFirst({
            where: {
                usuario_id: Number(id)
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
async function CriarUsuarios(dados) {
    try {
        return await prisma.usuarios.create({ data: dados });
    }
    catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }

    }
}
async function EditarUsuarios(id, dados) {
    try {
        return await prisma.usuarios.update({
            where: { usuario_id: Number(id) },
            data: dados
        })
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }

    }
}
    async function DeletarUsuario(id) {
        // return await executarSQL(` DELETE FROM usuarios WHERE usuario_id = ${id};`)
        try {
            return await prisma.usuarios.delete({
                where: {
                    usuario_id: Number(id)
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
        BuscarUsuarios,
        BuscarUmUsuario,
        CriarUsuarios,
        EditarUsuarios,
        DeletarUsuario
    }