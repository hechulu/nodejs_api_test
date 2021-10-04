const express = require('express');
//const component_expense = require('./components/expenses/network');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://hechu:xeFIu1GCcv2uk4iQ@clustertest.qtixy.mongodb.net/expenses?retryWrites=true&w=majority');

var server_app = express();
server_app.use(express.json())
//server_app.use(router);

router(server_app);


//to serve static files 

server_app.use('/app',express.static('public'));

server_app.listen(3000);
console.log("I am working in http://localhost:3000");
