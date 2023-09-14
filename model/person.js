const mongoose = require("mongoose");


const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter a name"]
    },
    age: {
        type: Number,
        required: [true, "enter an age"]
    },
    nationality: {
        type: String,
        required: [true, "please enter a nationality"]
    }
})

module.exports = mongoose.model("Person", personSchema);