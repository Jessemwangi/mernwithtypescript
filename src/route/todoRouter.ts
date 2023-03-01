import { Router } from "express";
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../controllers/todoController";

const router = Router();
router.get(`/`, getTodos);
router.get(`/:id`,getTodo,getTodos);
router.post(`/`, createTodo)
router.patch(`/:id`,updateTodo);
router.delete(`/:id`,deleteTodo);

export default router;

Router()