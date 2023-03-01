"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.getTodos = exports.createTodo = void 0;
const todoModel_1 = __importDefault(require("../models/todoModel"));
const createTodo = async (req, res, next) => {
    try {
        const data = req.body;
        let todos = await todoModel_1.default.create(data);
        return res.status(200).json({ message: 'Todo created successfully', data: todos });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};
exports.createTodo = createTodo;
const getTodos = async (req, res, next) => {
    try {
        let todos = await todoModel_1.default.find({});
        return res.status(200).json({ message: 'all todos', data: todos });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
exports.getTodos = getTodos;
const getTodo = async (req, res) => {
    try {
        const id = req.params.id.toString();
        let todos = await todoModel_1.default.findById(id);
        if (todos) {
            res.status(200).json(todos);
        }
        else {
            res.status(200).json({ message: "No data was returned", searchParam: id });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getTodo = getTodo;
const updateTodo = async (req, res, next) => {
    //   const todoid = req.params.id;
    //   // const text = (req.body as { text: string }).text;
    //   const text: string = req.body;
    //   const todoIndex = TODOS.findIndex((todo) => todo.id === todoid);
    //   if (todoIndex < 0) {
    //     throw new Error("could not find todo!");
    //   } else {
    //     TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, text);
    //     res.json({ message: `updated`, todo: TODOS[todoIndex] });
    //   }
    try {
        const { id } = req.params;
        let todos = await todoModel_1.default.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({ message: 'Todo updated successfully', data: todos });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
exports.updateTodo = updateTodo;
const deleteTodo = async (req, res, next) => {
    //   const todoId = req.params.id;
    //   const todoIndex = TODOS.findIndex((todo) => todoId === todo.id);
    //   if (todoIndex < 0) {
    //     throw new Error("todo not found");
    //   } else {
    //     TODOS.splice(todoIndex, 1);
    //     res.status(200).json({ message: "Item deleted" });
    //   }
    try {
        const id = req.params.id.toString();
        console.log(id, req.params);
        await todoModel_1.default.findByIdAndDelete(id);
        return res.status(200).json({ message: "Deleted" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    try {
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
exports.deleteTodo = deleteTodo;
