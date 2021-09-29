const store_expense = require('./store')

function addExpense(user,expense,description){
    //console.log(user);
    //console.log(expense);

    return new Promise((resolve,reject)=>{

        if (!user || !expense || !description){
            console.error("[expense controller] No hay usuario o expense o description")
            return reject("Datos incompletos")
        }

        const expenseData = {
            user: user,
            expense: expense,
            description: description,
            date : new Date(),
        };

        store_expense.add(expenseData);
    
        console.log(expenseData);
       return  resolve(expenseData);
    });

   

}

function getExpenses(user){
    return new Promise((resolve,reject)=>{
        if (!user){
            console.error("[expense controller get] No hay usuario")
            return reject("Datos incompletos")
        }

        return resolve(store_expense.getAll());
    });
}

module.exports = {
    addExpense,
    getExpenses,
}