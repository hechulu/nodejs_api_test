const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
/*
try {
    await mongoose.connect();
    console.log("Conexion correcta a la base de datos")
} catch (error) {
    console.error(error);
}*/
let strconn = 'mongodb+srv://hechu:xeFIu1GCcv2uk4iQ@clustertest.qtixy.mongodb.net/expenses?retryWrites=true&w=majority'

db.connect(strconn).then(()=>{
    console.log("Conexion lista")
}).
  catch(error => handleError(error));

function addExpense(expense){
    //expense_list.push(expense);
    const myExpense = new Model(expense);
    myExpense.save();
}

async function getExpenses(initDate,endDate){
   // return expense_list;
   let filter = {};
   if (initDate && endDate )
    filter = {date: {"$gte": initDate, "$lte": endDate} };
   const expenses = await Model.find(filter);
   return expenses;
}

async function editExpenses(id,expense,description,user){
    // return expense_list;
    const editedExpenses = await Model.findByIdAndUpdate(id,{
        expense:expense,
        description:description,
        user:user
    },{
        new:true
    });
    return editedExpenses;
 }

 async function deleteExpense(id){
    // return expense_list;
    try {
        const editedExpenses = await Model.deleteOne({_id:id});
        return true;
    } catch (error) {
        return false;
    }
   
   // return editedExpenses;
 }

module.exports = {
    add:addExpense,
    getAll:getExpenses,
    editExpenses:editExpenses,
    deleteExpense:deleteExpense,
}