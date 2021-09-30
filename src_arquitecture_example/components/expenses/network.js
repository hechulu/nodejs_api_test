const express = require('express');
const mod_response = require('../../network/response')
const controller = require('./controller')
const expenses_router = express.Router();


expenses_router.get('/',function(request,response){
    //response.send("hello my first router");
    //console.log(request.body);
    //response.status(200).send([]); //List of all expenses of the week
   // mod_response.success(request,response,"Regresa la lista actual de la semana",200)
   //let body = request.body;
   controller.getExpenses(request.body.user,request.body.initDate,request.body.endDate)
    .then((allExpenses)=>{
        mod_response.success(request,response,allExpenses,200)
    })
    .catch((e)=>{
        mod_response.error(request,response,e,401)
    });

});

expenses_router.post('/',function(request,response){
    //response.send("hello my first router");
    //console.log(request.body);
    //response.status(200).send([]); //List of all expenses of the week
    //mod_response.success(request,response,"Se inserto el elemento correctamente",201)
    let body = request.body;
    controller.addExpense(body.user, body.expense, body.description)
        .then((expense_inserted)=>{
            mod_response.success(request,response,expense_inserted,201)
        })
        .catch((e)=>{
            mod_response.error(request,response,"Datos incompletos",401)
        });
});

expenses_router.patch('/:id',function(request,response){
    //response.send("hello my first router");
    //console.log(request.body);
    //response.status(200).send([]); //List of all expenses of the week
    //mod_response.error(request,response,"Error simulado",401)
   // mod_response.error(request,response,"Error simulado")

  // console.log(request.params.id)
   controller.updateExpenses(request.body.user,request.params.id,request.body.expense,request.body.description).then((expense_updated)=>{
    mod_response.success(request,response,expense_updated,200)
    })
    .catch((e)=>{
        mod_response.error(request,response,"Error interno",500,e)
    });
   //response.send("ok")
});

expenses_router.delete('/:id',function(request,response){
    //response.send("hello my first router");
    //console.log(request.body);
    //response.status(200).send([]); //List of all expenses of the week
    //mod_response.error(request,response,"Error simulado",401)
    //mod_response.error(request,response,"Error simulado")
    controller.deleteExpense(request.params.id).then((deleted)=>{
        mod_response.success(request,response,deleted,200)
        })
        .catch((e)=>{
            mod_response.error(request,response,"Error interno",500,e)
        });
});

module.exports = expenses_router;