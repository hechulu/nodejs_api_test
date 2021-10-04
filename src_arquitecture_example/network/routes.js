const express = require('express');
const component_expense = require('../components/expenses/network');
const component_user = require('../components/user/network');
const routes = function(server){
    server.use('/expenses',component_expense); //this will be the prefix of the route, now the router inside not need the prefix 
    server.use('/user',component_user); 
}

module.exports = routes;