var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var TutorialSchema = new Schema ({
    title: {
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

var Tutorials = mongoose.model("tutorials", TutorialSchema, "tutorials")
module.exports = Tutorials;