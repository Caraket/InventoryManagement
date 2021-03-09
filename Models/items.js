const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    description: 
    {
        type: String,
        required: true
    },
    price: 
    {
        type: String,
        required: false
    },
    distributer: 
    {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Item', itemSchema);