const express = require('express');
const {createTodo, updateTodo} = require('./types');
const { todoModel } = require('./db');
const cors = require("cors")
const app = express()

const port = 5500;

app.use(express.json())
app.use(cors())

app.post('/todo',async function(req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You have sent the wrong input"
        })
        return;
    }
    //put in monogodb
    await todoModel.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo done"
    })
})

app.get('/todos', async function(req, res) {
    const todos = await todoModel.find({})

    res.json({
        todos
    })

})

app.put('/completed',async function(req, res) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You have sent the wrong input"
        })
        return;
    }
    await todoModel.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo mark as completed"
    })
})

app.listen(port, () => {
    console.log('Todo app is listing on port 5500')
})