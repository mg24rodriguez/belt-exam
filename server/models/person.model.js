const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    price: { type: String },
    skillOne: { type: String },
    skillTwo: { type: String },
    skillThree: { type: String },
    likes: {type: Number}
    
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);