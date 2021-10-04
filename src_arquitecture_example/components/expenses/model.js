const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
   /* user: {
        type:String,
        required:true
    },*/
    user: {
        type:Schema.ObjectId,
        ref:'User',
        required:true
    },
    expense: {
        type:Number,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    date : {
        type:Date,
        required:true
    },
});

const model = mongoose.model("Expense",expenseSchema);
module.exports = model;