const places = require('express').Router();

places.get('/',(req, res) => {
    const places = [{ 
        name: 'H-Thai-ML', 
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian', 
        pic: 'http://placekitten.com/250/250'
     }, { 
        name: 'Coding Cat Cafe', 
        city: 'Phoenix', 
        state: 'AZ', 
        cuisines: 'Coffee, Bakery', 
        pic: 'http://placekitten.com/250/250' 
    }]
    res.render('places/Index', { places });
});

module.exports = places;