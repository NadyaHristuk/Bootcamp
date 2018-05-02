const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    trainings: {
        name: String,
        exesises: [{
            name: String,
            description: String,

        }]    }
});

module.exports = mongoose.model("Sportsmens", schema);