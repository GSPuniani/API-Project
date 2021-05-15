const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CarSchema = new Schema({
    model: {type: String, required: true},
    year: {type: Number, required: true},
    color: {type: String, required: true},
})