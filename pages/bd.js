async function AbreBanco() {

    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const msCon = process.env.STR_CON_MY_SQL;

    console.log(msCon)

    const connection = await mysql.createConnection(msCon);

    global.connection = connection;

    return connection
}

async function BucaCli() {
    const conexao = await AbreBanco();
    const [rows] = await conexao.query('SELECT opt_cod_cliente, opt_nome_cliente FROM opt_clientes WHERE opt_cod_cliente = 87')
    return rows;
}
module.exports = { BucaCli }