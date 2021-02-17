const express = require('express'); 
const app = express();
const cors = require("cors");
const pool = require('./db');
const bcrypt = require('bcryptjs');
const createTodo = require('./controllers/createTodo');
const allTodos = require('./controllers/allTodos');
const getTodo = require('./controllers/getTodo');
const updateTodo = require('./controllers/updateTodo');
const deleteTodo = require('./controllers/deleteTodo');
const signin = require('./controllers/signin');
const register = require('./controllers/register');

//middleware enables communication and data management
//Cors allows a server to indicate any other originsthan its own from which 
//a browser should permit loading of resource
app.use(cors()); 
//to gives access to the client side, gives us access to req.body
app.use(express.json());

//ROUTES:

//$1 it's a placeholder that represents the input data by the client, it is used to add dynamic data
app.post('/signin', (req,res)=>signin(req,res,pool,bcrypt));

app.post('/register', (req,res)=>register(req,res,pool,bcrypt));
  
app.post('/todos', (req,res)=>createTodo(req,res,pool));

app.get('/todos', (req,res)=>allTodos(req,res,pool));

app.get('/todos/:id', (req,res)=>getTodo(req,res,pool));

app.put('/todos/:id', (req,res)=>updateTodo(req,res,pool));
//5. delete a todo
app.delete('/todos/:id',(req,res)=>deleteTodo(req,res,pool));

app.listen(4000, () => {
    console.log('the server has started on port 4000')
});