const Query = require('../models/query')

module.exports = function(app) {
    // READ
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

    // Show individual query
    app.get("/queries/:id", function(req, res) {
        // LOOK UP THE QUERY
        Query.findById(req.params.id).lean().then((query) => {
          res.render('queries-show', { query })
        }).catch((err) => {
          console.log(err.message)
        })
    });

    // CREATE
    // app.post('/queries/new', (req, res) => {
    //     // INSTANTIATE INSTANCE OF QUERY MODEL
    //     // if (req.user) {
    //       var query = new Query(req.body);
    //     // SAVE INSTANCE OF QUERY MODEL TO DB
    //       query => {
    //         queries.unshift(query);
    //         save();
    //         res.redirect(`/queries/${query._id}`);
    //       }
    //         // .save()
    //         // .then(query => {
    //         //   return User.findById(req.user._id);
    //         // })
             
    //         // .catch((err) => {
    //         //   console.log(err.message);
    //         // });
    //     // } else {
    //     //   // UNAUTHORIZED
    //     //   return res.status(401);
    //     // }
    // });
    app.post('/queries/new', (req,res) => {
        const newQuery = new Query(req.body)
        newQuery.save((err, newQuery) => {
          if(err) console.log(err)
          else res.redirect('/')
        })
    })

    // UPDATE
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

    // DELETE
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