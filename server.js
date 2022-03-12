require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();
const Project = require('./models/projects');
const Tool = require('./models/tools');


//MVC SETUP

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.static('public'));

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


//HOME
app.get('/', (req, res) => {
    // res.send("welcome to the Landing page")
    res.render('Home')
})

//INDEX

app.get('/projects', (req, res) => {
    Project.find({}, (err, foundProject) => {
        if (err) {
            res.status(400).send(err)
        } else {
            Tool.find({}, (err, foundTool) => {
                if (err) {
                    res.status(400).send(err)
                } else {
                    res.render('projects/Index', {
                        tools: foundTool,
                        projects: foundProject
                    })
                }
            })
        }
    })

});

app.get('/tools', (req, res) => {
    Tool.find({}, (err, foundTool) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('tools/Index', {
                tools: foundTool
            })
        }
    })
})




//NEW
app.get('/projects/new', (req, res) => {
    res.render('projects/New')
})

app.get('/tools/new', (req, res) => {
    res.render('tools/New')
})

//DELETE
app.delete('/projects/:id', (req, res) => {
    Project.findByIdAndDelete(req.params.id, (err, deletedProject) => {
        if (!err) {
            res.redirect('/projects')
        } else {
            res.status(400).send(err)
        }
    })
})

app.delete('/tools/:id', (req, res) => {
    Tool.findByIdAndDelete(req.params.id, (err, deletedTool) => {
        if (!err) {
            res.redirect('/tools')
        } else {
            res.status(400).send(err)
        }
    })
})
//UPDATE
app.put('/projects/:id', (req, res) => {
    Project.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProject) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.redirect(`/projects/${req.params.id}`)
        }
    })
})

app.put('/tools/:id', (req, res) => {
    Tool.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTool) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.redirect(`/tools/${req.params.id}`)
        }
    })
})



//CREATE
app.post('/projects', (req, res) => {
    Project.create(req.body, (err, createdProject) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.redirect('/projects')
        }
    })
})
app.post('/tools', (req, res) => {
    Tool.create(req.body, (err, createdTool) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.redirect('/tools')
        }
    })
})


// app.post('/projects', (req, res) => {
//     Tools.create(req.body, (err, createdTool) => {
//         if (err) {
//             res.status(400).send(err)
//         } else {
//             res.redirect('/projects')
//         }
//     })
// })

//EDIT
app.get('/projects/:id/edit', (req, res) => {
    Project.findById(req.params.id, (err, foundProject) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('projects/Edit', {
                projects: foundProject
            })
        }
    })
})

app.get('/tools/:id/edit', (req, res) => {
    Tool.findById(req.params.id, (err, foundTool) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('tools/Edit', {
                tools: foundTool
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
            res.render('projects/Show', {
                projects: foundProject
            })
        }
    })
})


app.get('/tools/:id', (req, res) => {
    Tool.findById(req.params.id, (err, foundTool) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.render('tools/Show', {
                tools: foundTool
            })
        }
    })
})



app.listen(PORT, () => {
    console.log('coming to you live from 8001')
})
