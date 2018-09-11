const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

require('./server/config/mongoose.js');
require('./server/models/Ceramics.js')
require('./server/config/routes.js')(app)
require('./server/controllers/ceramiccontrollers.js')

app.listen(8000, ()=> {
    console.log("listening on port 8000");
});