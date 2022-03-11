const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
    name: {type:String, unique: true}
})
const Tool = mongoose.model('Tool', toolSchema);


module.exports = Tool