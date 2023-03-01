"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = require("../controllers/todoController");
const router = (0, express_1.Router)();
router.get(`/`, todoController_1.getTodos);
router.post(`/`, todoController_1.createTodo);
router.patch(`/`);
router.delete(`/:id`);
exports.default = router;
(0, express_1.Router)();
