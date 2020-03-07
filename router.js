//import Task handker
const Task = require('../api/task'); 
// init router
const express = require('body-parser');
const router = express.Router();

// Init body parser
const bodyParser = require('body-parser');
router.use(bodyParser.json());

//Init database hook
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist', {useNewUrlParser: true});
const db = mongoose.connection;

router.get('/', (req, res)--> res.send('use localhost: 5000/api/tasks'));

//get tasks
router.get('/api/tasks',(req, res) =>{
    Task.getTask((err , tasks) =>{
        if(err){
            throw err;
        }
        res.json(tasks);
    }
    )
});

//update task
router.put('/api/tasks/:_id',(req, res) => {
    var id = req.params._id;
    var updatedTask = req.body;
    Task.updatedTask(id,updatedtask,{},(err,updatedTask) =>{
        if(err){
            throw err;
        }
        res.json(updatedTask);

    });

});
//Add Task
router.post('/api/tasks', (req, res)=>{
    var task=req.body;
    Task.addTask(task,(err,task)=>{
        if(err){
            throw err;
        }
        res.json(task);
    })
});
//Delete task
router.delete('/api/tasks/:_id',(req,res)=>{
    var id=req.parms._id;
    Task.removeTask(id,(err,Task)=>{
        if(err){
            throw err;
        }
        res.json(task);
    })
})
module.exports = router;