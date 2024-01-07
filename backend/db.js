const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://prinssachan41:ePYhyzKIIbIoDUhB@todo1.o932rxm.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todoModel = mongoose.model('todos', todoSchema);

module.exports = {todoModel}