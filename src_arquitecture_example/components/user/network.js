const express = require('express');
const mod_response = require('../../network/response')
const controller = require('./controller')
const router = express.Router();

router.post('/',(request,response)=>{
    controller.addUser(request.body.name).then((user_inserted)=>{
        mod_response.success(request,response,user_inserted,201)
    })
    .catch((e)=>{
        mod_response.error(request,response,"Datos incompletos",401,e)
    });
});

router.get('/',async (request,response)=>{
    /*controller.getUsers().then((users)=>{
        mod_response.success(request,response,users,201)
    })
    .catch((e)=>{
        mod_response.error(request,response,"Error interno",500,e)
    });*/

try {
    const users = await controller.getUsers()
    mod_response.success(request,response,users,201)
} catch (error) {
    mod_response.error(request,response,"Error interno",500,e)
}

});

module.exports = router;