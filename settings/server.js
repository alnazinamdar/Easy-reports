const express = require ('express');
const consign = require ('consign');
const bodyParser = require('body-parser');
const express_validator = require('express-validator')

const app = express();
app.set('view engine', 'ejs');
app.set('views','./app/views');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('static'));

consign()
    .include('app/routes')
    .then('settings/connection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app)
    
module.exports=app; 
