var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var JobsSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    jtype: {
        type: String,
        required: true
    }
})

var Jobs = mongoose.model("jobs", JobsSchema, "jobs")
module.exports = Jobs;