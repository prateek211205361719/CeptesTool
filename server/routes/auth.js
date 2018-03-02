

const passport = require('passport');
const { Projects }  = require('../models/projects');
const { Users }  = require('../models/users');
module.exports = (app) => {
    app.get('/auth/google',
    passport.authenticate('google', { 
        scope: ['profile','https://www.googleapis.com/auth/userinfo.email'],
        
     }));

    app.get('/auth/google/callback', 
        passport.authenticate('google', { failureRedirect: '/login' }),
        function(req, res) {
        res.redirect('/');
    });

    app.get('/api/login', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/login');
    }); 

    app.get('/api/userInfo', async (req, res) => {
        try{
           
            var result = await Projects.find({$or:[ {'Users._userId': req.user._id}, {'_owner':req.user._id}]}).sort([['created_at', 'descending']]);
            if(!result){
                return res.status(400).send();
            }
            var userList =  await Users.find();
            if(!result){
                return res.status(400).send();
            }
            res.send({project:result,users: userList});
        }catch(e){
            return res.status(400).send();
        }
    });
}; 