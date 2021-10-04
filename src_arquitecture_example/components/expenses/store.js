
const Model = require('./model');



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
    let expenses;
  
        //expenses = await Model.find(filter).populate({ path: 'user',select: 'name' });
    
        expenses = await Model.find(filter).populate('user');
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