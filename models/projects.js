const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
    title: String,
    entry: String,
    tools:[{type: mongoose.Schema.ObjectId, ref:"Tool"}],
});

const Project = mongoose.model('Project', projectSchema);


module.exports = Project
