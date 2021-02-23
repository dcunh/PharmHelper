app.post('/login', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {

        connection.query('SELECT * FROM cliente WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect('/home');
            } else {
                response.send('Password ou User incorreto/a');
            }           
            response.end();
        });
    } else {
        response.send('Porfavor escreva a Palavra-Passe ou Nome de Utilizador');
        response.end();
    }
});