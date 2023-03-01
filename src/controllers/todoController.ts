import express, { RequestHandler } from "express";
import Todo,{ TodoModel } from "../models/todoModel";

export const createTodo: RequestHandler = async (req, res, next) => {
try {
    const data: TodoModel = req.body
    let todos = await Todo.create(data)
    return res.status(200).json({message:'Todo created successfully',data:todos})
} catch (error: any) {
    console.log(error)
    return res.status(500).json({message:error.message})
}
};

export const getTodos: RequestHandler = async (req, res, next) => {
 try {
     let todos = await Todo.find({})
     return res.status(200).json({message:'all todos', data:todos})
 } catch (error:any) {
    return res.status(500).json({message:error.message})
 }
};

export const getTodo: RequestHandler<{ id: string }> = async (req, res) => {
    try {
        const id: string = req.params.id.toString()
        let todos = await Todo.findById(id)
        if (todos) {
            res.status(200).json(todos)
        }
        else {
            res.status(200).json({message:"No data was returned", searchParam:id})
        }
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}
export const updateTodo: RequestHandler<{ id: string }> =async (req, res, next) => {
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
        
        const { id } = req.params
        let todos = await Todo.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json({ message: 'Todo updated successfully', data: todos });
    } catch (error:any) {
        return res.status(500).json({message:error.message})
    }
};

export const deleteTodo: RequestHandler<{ id: string }> = async (req, res, next) => {
//   const todoId = req.params.id;
//   const todoIndex = TODOS.findIndex((todo) => todoId === todo.id);
//   if (todoIndex < 0) {
//     throw new Error("todo not found");
//   } else {
//     TODOS.splice(todoIndex, 1);
//     res.status(200).json({ message: "Item deleted" });
//   }
    try {
        const id: string = req.params.id.toString()
        console.log(id,req.params)
        await Todo.findByIdAndDelete(id);
        return res.status(200).json({message:"Deleted"})
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
    try {
        
    } catch (error:any) {
        return res.status(500).json({message:error.message})
    }
};
