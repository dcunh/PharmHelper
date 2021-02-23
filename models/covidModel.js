var pool = require("./connection");

module.exports.getAll = async function() {
    try {
        let sql = 'SELECT * FROM `ClienteServico` WHERE `especialidade` = "Desinfeção COVID-19";';
        let adubo = await pool.query(sql);
        return {status:200, data: adubo};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}