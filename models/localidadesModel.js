var pool = require("./connection");

module.exports.getAll = async function() {
    try {
        let sql = 'SELECT * FROM `CodigoPostal` ORDER BY `Localidade` ASC';
        let codigoPostal = await pool.query(sql);
        return {status:200, data: codigoPostal};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}