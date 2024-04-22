const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, '待辦事項未填寫']
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        versionKey: false,
    }
);

// 建立 model
const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;
