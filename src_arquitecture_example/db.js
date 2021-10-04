const db = require('mongoose');
db.Promise = global.Promise;
//'mongodb+srv://hechu:xeFIu1GCcv2uk4iQ@clustertest.qtixy.mongodb.net/expenses?retryWrites=true&w=majority'
async function connect(url){ 
    await db.connect(url)
    .then(()=>{
        console.log("Conexion lista")
    })
    .catch(error => handleError(error));
}

module.exports = connect;