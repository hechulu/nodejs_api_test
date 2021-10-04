const store_user = require('./store')

function addUser(name){
    //console.log(user);
    //console.log(expense);

    if (!name ){
        return Promise.reject("[addUser controller] No hay nombre del nuevo")
    }

    const userData = {
        name //because the name is the same we can leave it like this
    };
    return store_user.add(userData); // return the promise from storage, we return promise as allways
    
}

function getUsers(){
  
   return store_user.get();
}

module.exports = {
    addUser,
    getUsers
}
