
const { PrismaClient } = require("../generated/prisma");
const mysql = require("mysql2/promise");
const prisma = new PrismaClient();

async function executarSQL(comandosql) {
    const conexao = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    port: "3307",
    database: "digital_store_db",
    })
     
    const [result] = await conexao.query(comandosql);
    conexao.end();

    return result;

}
module.exports = {executarSQL , prisma};