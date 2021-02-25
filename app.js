var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var produtosRouter = require('./routes/produtosRoutes');
var servicosRouter = require('./routes/servicosRoutes');
var localidadeRouter = require('./routes/localidadesRoutes')
var comunidadeRouter = require('./routes/comunidadeRoutes')
var analiseRouter = require('./routes/analiseRoutes')
var movelRouter = require('./routes/movelRoutes')
var casaRouter = require('./routes/casaRoutes')
var covidRouter = require('./routes/covidRoutes')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/produtos', produtosRouter);
app.use('/api/servicos', servicosRouter);
app.use('/api/localidades', localidadeRouter)
app.use('/api/servicos/comunidade', comunidadeRouter);
app.use('/api/servicos/analise', analiseRouter);
app.use('/api/servicos/movel', movelRouter);
app.use('/api/servicos/casa', casaRouter);
app.use('/api/servicos/covid', covidRouter);
module.exports = app;