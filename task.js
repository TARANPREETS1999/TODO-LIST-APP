// Import Mongoose
const Mongoose = require ('mongoose');
//Remove  annoying deprication warning
mongoose.self('useFindAndModify',False);
//define task schema
const taskschema= Mongoose.Schema(
    { task:{
        type: String,
        require: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
    }
);

//Export task object
const task = module.exports = mongoose.model('task',taskSchema);

//Get Task
module.exports.getTask = (callback, limit) => {
    Task.find(callback).limit(limit);
}

//update task
module.exports.updateTask = (id, updatedTask, option, callback) =>{
    var query = {_id: id};
    var update = {
        task: updatedTask.task
    }
    Task.findOneAndUpdate(query, update, option, callback);
}
//Add task
module.exports.addTask = (task, callback) =>{
    Task.create(task,callback);
}

//Delete task
module.exports.removetask =(id,callback)=>{
    var query ={_id:id};
    Task.remove(query, callback);
}