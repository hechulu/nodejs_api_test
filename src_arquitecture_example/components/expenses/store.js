const expense_list = [];

function addExpense(expense){
    expense_list.push(expense);
}

function getExpenses(){
    return expense_list;
}

module.exports = {
    add:addExpense,
    getAll:getExpenses
}