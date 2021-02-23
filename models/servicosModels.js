var pool = require("./connection");

module.exports.getAll = async function() {
    try {
        let sql = 'SELECT * FROM `Servico` ORDER BY `Servico`.`Nome` ASC';
        let servico = await pool.query(sql);
        return {status:200, data: servico};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}