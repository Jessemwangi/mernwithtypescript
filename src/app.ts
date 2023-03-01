
import express ,{Request, Response,NextFunction} from 'express'
import todoRoutes from './route/todoRouter'
import { json,urlencoded } from 'body-parser'
import db from 'mongoose';


const app = express()
app.use (json());
app.use(urlencoded({extended:true}))
const port = 3003

app.use(`/todo`, todoRoutes)


app.use

 app.use((err: Error, req: Request, res: Response, next: NextFunction) => {res.status(500).json({ Message: err.message })
 })


    
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
db.connect('mongodb://127.0.0.1:27017/todos')