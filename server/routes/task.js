
const Task = require('../models/task');
module.exports =  (app) => {
    app.get('/api/tasks/:projectId', async (req, res) => {
        var projectId = req.params.projectId;
        var taskList = await Task.find({_projectId: projectId});
        if(!taskList){
            return res.status(400).send();
        }
        res.send(taskList);
  });
  
  app.post('/api/tasks', async (req, res) => {
        try{
            var body = req.body;
            var task = new Task(body);
            var newtask =  await await task.save();
            res.send(newtask);
        }catch(e){
             res.status(400).send();
        }
  });
};