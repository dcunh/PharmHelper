app.post('/register', function(request, response) {

    var nome = request.body.nome;
    var morada = request.body.morada;
    var email = request.body.email;
    var nomeutilizador = request.body.nomeutilizador;
    var senha = request.body.senha;
    var codigopostal = request.body.codigopostal;

   /* if (username && password) {*/

        var sql = 'INSERT INTO `Cliente` (`idCliente`, `Nome`, `Morada`, `Email`, `NomeUtilizador`, `Senha`, `CodigoPostal_idCodigoPostal`) SET ?';
        
        var values = [[nome],[morada],[email],[nomeutilizador],[senha],[codigopostal]];

        connection.query(sql, [values], function(error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/index.html');
                return {status:200};
            } else {
                response.send(error);
                return {status:500};
            }           
            response.end();
        });
});