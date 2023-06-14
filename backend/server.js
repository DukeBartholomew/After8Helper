import  express  from 'express';
import userRouter from './routes/users.routes.js'
import cors from "cors";
import { connection } from './mysql/connect.js';
import itemRouter from './routes/items.routes.js';
import laptopRouter from './routes/laptops.routes.js';



const app = express()
const port = 8000
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/db', (req, res) => {
    connection.query('SHOW TABLES', (err, rows, fields) => {
        if (err) throw err
        console.log(rows)
        res.status(200)
        res.send(rows)
    })
})

app.use('/users', userRouter);
app.use('/items', itemRouter);
app.use('/laptops', laptopRouter);

//error function
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err);
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

