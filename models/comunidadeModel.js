var pool = require("./connection");

module.exports.getAll = async function() {
    try {
        let sql = 'SELECT * FROM `ClienteServico` ORDER BY `id` ASC;';
        let comunidade = await pool.query(sql);
        return {status:200, data: comunidade};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}