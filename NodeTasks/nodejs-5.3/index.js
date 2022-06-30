const Joi = require('joi');

const express = require('express');

const app = express();
app.use(express.json());
const User = [{
    id: '1',
    login: 'Pavani' ,
    password: 'Pavani@11',
    age: 21 ,
    isDeleted: true
}];
app.get('/', (req,res) => { 
    res.send('Hello World');
});


app.get('/api/user', (req,res) => {
    res.send(User);
});

app.get('/api/user/:id', (req,res) => {
    const found = User.find(u => u.id === req.params.id);
    if(!found) res.status(404).send('The user ID is not found');
    res.send(found);
});

app.post('/api/User/', (req,res) => {
    const { error } = validateUser(req.body);
    if(error){
    res.status(400).send(error);
    return;
}
    const newUser = req.body;
    
    User.push(newUser);
    res.send(newUser);
    
});


app.put('/api/User/:id', (req,res) => {

const exists = User.some(u => u.id === req.params.id);
    if(exists)
    {
        User.forEach(user => {
            if(user.id === req.params.id){
                user.id = req.body.id;
                user.login = req.body.login;
                user.password = req.body.password;
                user.age = req.body.age;
                user.isDeleted = req.body.isDeleted;
                res.json({msg:"Data updated"});
            }
        });
    }
    else{
        res.statusCode=400;
        res.json("No id exists to update the data");
       }
});


app.delete('/api/User/:id', (req,res) => {
    const user = User.find(u => u.id === req.params.id);
    if(!user) res.status(404).send('No id exists to update the data');
else{
    const index = User.indexOf(user);
    User.splice(index,1);
   
    res.json({msg: `User ID: ${req.params.id} successfully deleted`});
}
})


   
const port =process.env.PORT||3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

function validateUser(user){
    const schema =  Joi.object({
        id: Joi.string().required(),
        login: Joi.string().min(4).required(),
        password: Joi.string().pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/),
        age:Joi.number().min(4).max(130).required(),
        isDeleted:Joi.boolean().required()
});

    return schema.validate(user);
}