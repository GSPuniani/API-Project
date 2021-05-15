const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuerySchema = new Schema({
    season: {type: Number, required: true},
    round: {type: Number, required: true},
})