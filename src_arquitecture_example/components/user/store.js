
const Model = require('./model');

function addUser(user){
    //expense_list.push(expense);
    const myUser = new Model(user);
    return myUser.save(); //Return the complete promise 
}

async function getUsers(){
   // return expense_list;
   return await Model.find();
   
}

/*

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
*/
module.exports = {
    add:addUser,
    get:getUsers
}