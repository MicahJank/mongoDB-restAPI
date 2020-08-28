const mongoose = require('mongoose');

// create the schema for the post model
// think of this like creating the row fields in an SQL table
const PostSchema = mongoose.Schema({
    // if i want the specific field to be required i need to pass the field an object and inside that object i can specify a 'required' field
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Notice i can also specify a default value for the field
    date: {
        type: Date,
        default: Date.now()
    }
})


// the model should show up in your database now, the name of the model you can specify here and then you can also specify the schema it should use, in this case i want to use the
// PostSchema we created above
module.exports = mongoose.model('Posts', PostSchema);