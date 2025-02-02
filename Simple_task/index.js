const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine' , 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

let tasks = []

app.get('/', (req, res) =>{
    res.render('index', {tasks})
})

app.post('/add', (req,res) =>{
    const task = req.body.task
    if(!task) return false
    tasks.push(task)
    res.redirect('/')
})

app.post('/delete/:index', (req,res) =>{
    const index = req.params.index
    tasks.splice(index, 1)
    res.redirect('/')
})

app.listen(3000, () => console.log('Server is running on http://localhost:3000'))
