

const { Milesstones }  = require('../models/milesstone');
module.exports = (app) => {
    app.get('/api/milestone/:projectId', async (req, res) => {
        try{
            var projectId = req.params.projectId;
            var milestoneList = await Milesstones.find();
            if(!milestoneList)
                return res.status(400).send();
            res.send(milestoneList);
        }catch(e){
            res.status(400).send()
        }
    });


    /*{
	
        "name":"node milestone",
        "_responsible":{
            "name":"prateek",
            "photo":"samnu",
            "_userId":"5a8c8c2967c6ef100446e44e"
        }
    }*/


    app.post('/api/milestone', async (req, res) => {
        var { name, photo, _id} = req.user;
        var body = req.body;
        const milestone = new Milestone(body);
        milestone._owner = {name, photo, _userId: _id}; 
        try{
            var newMilestone = await milestone.save();
            if(!newMilestone){
                return res.status(400).send();
            }
            res.send(newMilestone);
        }catch(e){
            res.status(400).send()
        }
        
    });
};