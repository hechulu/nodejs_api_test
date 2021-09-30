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

function getExpenses(user,initDate,endDate){
    return new Promise((resolve,reject)=>{
        if (!user){
            console.error("[expense controller get] No hay usuario")
            return reject("Datos incompletos")
        }

        return resolve(store_expense.getAll(initDate || null, endDate || null));
    });
}

function updateExpenses(user,id,expense,description){
    return new Promise((resolve,reject)=>{
        if (!user || !expense || !description || !id){
            console.error(`[expense controller updateExpenses] ${user} - ${expense} - ${description} - ${id}`)
            return reject("Datos incompletos")
        }

        return resolve(store_expense.editExpenses(id,expense,description,user));
    });
}

function deleteExpense(id){
    return new Promise((resolve,reject)=>{
        if (!id){
            console.error(`[expense controller deleteExpense] ${id}`)
            return reject("Datos incompletos")
        }

        return resolve(store_expense.deleteExpense(id));
    });
}


module.exports = {
    addExpense,
    getExpenses,
    updateExpenses,
    deleteExpense
}