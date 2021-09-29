const express = require('express');
const mod_response = require('./network/response')

const express_router = express.Router();


var server_app = express();
server_app.use(express.json())
server_app.use(express_router);

express_router.get('/',function(request,response){
    //response.send("hello my first router");
    console.log(request.headers)
   // response.status(200).send([]); //List of all expenses of the week
   mod_response.success(request,response,"Lista de los elementos de la base de datos",200)
});

express_router.post('/expenses/add',function(request,response){
    //response.send("hello my first router");
    console.log(request.body);
    //response.status(200).send([]); //List of all expenses of the week
    mod_response.success(request,response,"Se inserto el elemento correctamente",201)
});

express_router.delete('/expenses/delete',function(request,response){
    //response.send("hello my first router");
    console.log(request.body);
    //response.status(200).send([]); //List of all expenses of the week
    //mod_response.error(request,response,"Error simulado",401)
    mod_response.error(request,response,"Error simulado")
});

//to serve static files 

server_app.use('/app',express.static('public'));

server_app.listen(3000);
console.log("I am working in http://localhost:3000");
