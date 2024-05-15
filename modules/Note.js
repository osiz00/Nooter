const mongoose =  require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    title: {
        type: String,
        require: true
    }, 
    body: String,

}, {timestamps: true})


const Note = mongoose.model('Note', noteSchema);

module.exports = Note;