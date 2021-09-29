const express = require('express');
//const component_expense = require('./components/expenses/network');

const router = require('./network/routes');

var server_app = express();
server_app.use(express.json())
//server_app.use(router);

router(server_app);


//to serve static files 

server_app.use('/app',express.static('public'));

server_app.listen(3000);
console.log("I am working in http://localhost:3000");
