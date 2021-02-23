var pool = require("./connection");

module.exports.getAll = async function() {
    try {
        let sql = 'SELECT * FROM `ClienteServico` WHERE `especialidade` = "Unidade Móvel";';
        let desinfecao = await pool.query(sql);
        return {status:200, data: desinfecao};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}