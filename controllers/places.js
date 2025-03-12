const placesRouter = require('express').Router();
const db = require('../models');

placesRouter.get('/',(req, res) => {
    db.Place.find()
    .then(places => {
        res.render('places/Index', { places });
    })
    .catch(err => {
        console.error(err);
        res.render('Error404');
    })
});

placesRouter.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places');
    })
    .catch(err => {
        console.error(err);
        res.render('Error404');
    })
});

placesRouter.get('/new', (req, res) => {
    res.render('places/New');
});

placesRouter.get('/:id', (req,res) => {
 db.place.findById(req.params.id)
 .then(place => {
    res.render('places/Show', { place });
 })
 .catch(err => {
    console.error(err);
    res.render('Error404');
})
});

placesRouter.get('/:id/edit', (req,res) => {
    res.send('GET /places/:id/edit STUB');
   });

placesRouter.put('/:id', (req, res) => {
    res.send('PUT /places/:id STUB');
});

placesRouter.delete('/:id/rant/rantId', (req, res) => {
    res.send('DELETE /places/:id STUB');
});

placesRouter.post('/:id/rant', (req, res) => {
    res.send('POST /places/ STUB');
});

module.exports = placesRouter;