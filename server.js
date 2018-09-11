var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('./server/config/mongoose.js');
require('./server/models/Cermaics.js')
require('./server/config/routes.js')(app)
require('./server/controllers/ceramiccontrollers.js')
app.listen(8000, ()=> {
    console.log("listening on port 8000");
});