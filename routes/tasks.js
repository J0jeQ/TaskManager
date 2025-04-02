const express = require('express');
const app = express();
app.use(express.json());


let tasks = [{
    id:1,
    name:"posprzatac pokoj",
    solved:"false"
},
{
    id:"2",
    name:"wyniesc smieci",
    solved:"true"
}];

app.get('/api/tasks', (req,res)=>{
res.send(tasks);
});

app.get('/api/tasks/:id', (req,res) =>{
    const task = tasks.find(c=>c.id === parseInt(req.params.id));
    if(!task) res.status(404).send("Task not exists");
    res.send(task);
});

app.post('/api/tasks', (req,res)=>{
const task = {
    id: tasks.length+1,
    name:req.body.name


};
tasks.push(task);
res.send(task);
});

app.listen(3000, () => console.log('Hi listening on 3000 '));