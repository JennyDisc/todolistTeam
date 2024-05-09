const mongoose = require("mongoose");
const errorHandle = require("./errorHandle");
const Todo = require("./models/todo");
const headers = {
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, Content-Length, X-Requested-With",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "PATCH, POST, GET,OPTIONS,DELETE",
  "Content-Type": "application/json",
};

async function patchTodo(req, res, body) {
  try {
    const data = JSON.parse(body).title;
    const id = req.url.split("/").pop();
    const isExist = await Todo.findById(id);
    if (data !== undefined && isExist) {
      const updateTodo = await Todo.findByIdAndUpdate(id, {
        title: data,
      });
      const updated = await Todo.findById(id);
      res.writeHead(200, headers);
      res.write(
        JSON.stringify({
          status: "success",
          data: updated,
        })
      );
      res.end();
    } else {
      errorHandle(res);
    }
  } catch (error) {
    errorHandle(res);
  }
}

module.exports = patchTodo;
