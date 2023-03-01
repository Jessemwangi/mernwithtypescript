import { Mode } from 'fs';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { type } from 'os';

type TodoType = TodoModel & mongoose.Document;
export interface TodoModel{
    title: {
        type: String;
        required: true;
    }
    description: {
        type: String,
        required:true
    }

}
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
})

const Todo: Model<TodoType> = mongoose.model<TodoType>('Todo', TodoSchema)
export default Todo;