"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoRouter_1 = __importDefault(require("./route/todoRouter"));
const body_parser_1 = require("body-parser");
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
const port = 3003;
app.use(`/todo`, todoRouter_1.default);
app.use;
app.use((err, req, res, next) => {
    res.status(500).json({ Message: err.message });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
mongoose_1.default.connect('mongodb://127.0.0.1:27017/todos');
