require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const Project = require('./models/projects');

//MVC SETUP

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

const PORT = 8001

//MODELS

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//MIDDLEWARE

app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log(req.body)
    next()
})

app.use(methodOverride('_method'))

//INDEX

app.get('/projects', (req, res) => {
    Project.find({}, (err, foundProject) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('Index', {
                projects: foundProject
            })
        }
    })
});


//NEW
app.get('/projects/new', (req, res) => {
    res.render('New')
})

//DELETE


//UPDATE
app.put('/projects/:id', (req, res) => {
    if (req.body.tools === 'on') {
        req.body.tools = true
    } else {
        req.body.tools = false
    }
    Project.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProject) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.redirect(`/projects/${req.params.id}`)
        }
    })
})

//CREATE
app.post('/projects', (req, res) => {
    if (req.body.tools === 'on') {
        req.body.tools = true
    } else {
        req.body.tools = false
    }

    Project.create(req.body, (err, createdProject) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.redirect('/projects')
        }
    })

})
//EDIT
app.get('/projects/:id/edit', (req, res) => {
    Project.findById(req.params.id, (err, foundProject) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('Edit', {
                projects: foundProject
            })
        }
    })
})
//SHOW
app.get('/projects/:id', (req, res) => {
    Project.findById(req.params.id, (err, foundProject) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('Show', {
                projects: foundProject
            })
        }
    })
})




app.listen(PORT, () => {
    console.log('coming to you live from 8001')
})
