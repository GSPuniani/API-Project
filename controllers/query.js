const Car = require('../models/query')

module.exports = function(app) {
    app.get('/', (req, res) => {
        Post.find({}).lean()
          .then(posts => {
            res.render('posts-index', { posts });
          })
          .catch(err => {
            console.log(err.message);
          })
      })

    app.post('/uploadCar', (req,res) => {
        const newCar = new Car(req.body)

        newCar.save((err, newCar) => {
            if(err) console.log(err)
            return res.redirect('/')
        })
    })

    app.put('/updateCar', (req,res) => {
        const carToUpdate = null
        
        Car.find({_id: req.body.ObjectId}, (err, car) => {
            if(err) console.log(err)
            else carToUpdate = car
        })

        if(carToUpdate) {
            carToUpdate.save((err, updatedCar) => {
                if(err) console.log(err)
                return res.json(updatedCar)
            })
        }

        return res.redirect('/')
    })

    app.delete('/removeCar', (req,res) => {
        const carToDelete = null

        Car.find({_id: req.body.ObjectId}, (err, car) => {
            if(err) console.log(err)
            else carToDelete = car
        })

        if(carToDelete) {
            carToDelete.delete((err, deletedCar) => {
                if(err) console.log(err)
                return res.json(deletedCar)
            })
        }

        return res.redirect('/')
    })


}