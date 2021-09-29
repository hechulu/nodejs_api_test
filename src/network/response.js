//this file is a module for return consistent reponses
module.exports.success = function (request,response,message,status){
    response.status(status || 200).send({
        "error":"",
        "body":message
    })
}

module.exports.error = function (request,response,message,status){
    response.status(status || 500).send({
        "error":message,
        "body":""
    })
}