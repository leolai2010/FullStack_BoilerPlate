var mongoose = require('mongoose');
var AppSchema = new mongoose.Schema({
    name: { type: String, required:[true, "Name is required"], minlength:[3, "Must have 3 Characters"]}
})
mongoose.model('App', AppSchema);