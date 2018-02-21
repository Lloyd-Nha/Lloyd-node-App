var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = require('express-myconnection');


//var index = require('./routes/index');
//var users = require('./routes/users');

var app = express();


//creat sql connection
app.use(connection(mysql,{
host: "rs3.cphost.co.za",
user:"mrncomputingco",
password: "CMM~n?#ZE&p[",
database:"mrncomputingco_SaSchools"
},'request'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// view engine setup :This set up the path to static resources in public images,stylesheet etc
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
//app.set('views', path.join(__dirname, 'public'));
app.set('view engine','ejs');
//app.set('view engine', 'jade');

var routes =require('./routes');
// Route 

//home

app.get('/', routes.home);

app.get('/banks/v2/getSchool',routes.getSchool);

app.get('/banks/v/gettwentyforteen',routes.gettwentyforteen);

app.get('/banks/v/gettwentyfifteen', routes.gettwentyfifteen);

app.get('/banks/v/gettwentysxteen', routes.gettwentysxteen);

app.post('/banks/v1/createSchool',routes.createSchool);
app.post('/banks/v/twentyfourteen',routes.twentyfourteen);
app.post('/banks/v/twentyfifteen',routes.twentyfifteen);
app.post('/banks/v/twentysixteen',routes.twentysixteen);

// wrong url handling

app.get('*', routes.notFound);

//listening port

app.listen(8080, function(){
console.log("The application is running at localhost:8080");
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//app.use('/', index);
//app.use('/users', users);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

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
