var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride =  require('method-override');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var detailRouter = require('./routes/details');
var createRouter = require('./routes/create');
var editRouter = require('./routes/edit');
var deleteRouter = require('./routes/delete');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/products', productsRouter);
app.get('/products/create', createRouter);
app.post('/products/create', createRouter);
app.get('/products/edit/:id', editRouter);
app.put('/products/update/:id', editRouter);
app.delete('/products/delete/:id', deleteRouter);
app.get('/products/detail/:id/:category', detailRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
