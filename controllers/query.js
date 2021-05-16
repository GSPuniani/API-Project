const Query = require('../models/query')

module.exports = function(app) {
    app.get('/queries', (req, res) => {
        var currentUser = req.user;
        Query.find({}).lean()
          .then(queries => {
            res.render('queries-index', { queries, currentUser });
          })
          .catch(err => {
            console.log(err.message);
          })
    })

    app.post('/createQuery', (req,res) => {
        const newQuery = new Query(req.body)

        newQuery.save((err, newQuery) => {
            if(err) console.log(err)
            return res.redirect('/')
        })
    })

    app.put('/updateQuery', (req,res) => {
        const queryToUpdate = null
        
        Query.find({_id: req.body.ObjectId}, (err, query) => {
            if(err) console.log(err)
            else queryToUpdate = car
        })

        if(queryToUpdate) {
            queryToUpdate.save((err, updatedQuery) => {
                if(err) console.log(err)
                return res.json(updatedQuery)
            })
        }

        return res.redirect('/')
    })

    app.delete('/deleteQuery', (req,res) => {
        const queryToDelete = null

        Query.find({_id: req.body.ObjectId}, (err, query) => {
            if(err) console.log(err)
            else queryToDelete = query
        })

        if(queryToDelete) {
            queryToDelete.delete((err, deletedQuery) => {
                if(err) console.log(err)
                return res.json(deletedQuery)
            })
        }

        return res.redirect('/')
    })


}