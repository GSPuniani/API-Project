const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuerySchema = new Schema({
    season: {type: Number, required: true},
    round: {type: Number, required: true},
})

// var Queries = mongoose.model("Queries", QuerySchema)

// const newQuery = new Queries({
//     season: 1950,
//     round: 7
// })

// newQuery.save()

module.exports = mongoose.model("Query", QuerySchema);