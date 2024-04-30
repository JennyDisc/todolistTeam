const mongoose = require('mongoose');
const errorHandle = require('./errorHandle')

const Todo = require('./models/todo');

const headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    'Content-Type': 'application/json'
};

async function postTodo(req, res, body) {
  try {
    const data = JSON.parse(body)
    const todo = await Todo.create({
        title: data.title.trim()
    });    
    res.writeHead(200, headers);
    res.write(JSON.stringify({
        "status": "success post",
        todo
    }));
    res.end();    
  } catch (error) {
    errorHandle(res)
  }
};

module.exports = postTodo;