////DEPENDENCIES////
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const Project =require('./models/project')



///DATABASE CONNECTION////
const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(DATABASE_URL, CONFIG);

mongoose.connection
    .on('open', () => console.log('connected to mongoose'))
    .on('closed', () => console.log('diconnect from mongoose'))
    .on('error', (error)=> console.log('Mongoose has left the bulding'))

///MODELS///


///APP OBJECT SETUP///



///MIDDLEWARE///

app.use(express.urlencoded({ extended: true }))
app.use(morgan("tiny"));

app.use((req, res, next) => {
    console.log(req.body)
    next()
})

app.use(methodOverride('_method'))

///ROUTES///
app
//INDEX
app.get('/project', (req, res) => {
    Project.find({})
        .then((projects) => {
        res.render('projects/Index', {projects})
        })
        .catch((error) => {
        res.status(400).json({error})
    })
})
//NEW
app.get('/project/new', (req, res) => {
    res.render('project/New')
})
//UPDATE

//CREATE

//EDIT

//SHOW

const PORT =process.env.PORT
app.listen(PORT, () => console.log(`Live form ${PORT}`))