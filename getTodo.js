const mongoose = require('mongoose');

// 模組
const Todo = require('./models/todo');

const headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    'Content-Type': 'application/json'
};

async function getTodo(req, res) {
    const todos = await Todo.find();
    console.log(todos);
    res.writeHead(200, headers);
    res.write(JSON.stringify({
        "status": "success",
        todos
    }));
    res.end();
};

module.exports = getTodo;