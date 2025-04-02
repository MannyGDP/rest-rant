const mongoose = require('mongoose');

const { model, Schema } = mongoose;

const placeSchema = new Schema ({
    name: { type: String,required: true },
    pic: { type: String, default: 'http://placekitten.com/350/350'},
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
        type: Number,
        min: [1673, 'Surley not that old?' ],
        max: [ new Date().getFullYear() + 1, 'Hey, this is in the future' ],
    },
});

placeSchema.methods.showEstablished = function() {
    return`${this.name} has been serving ${this.city} since ${this.founded}`;
};

module.exports = model('Place', placeSchema);



// module.exports =[{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/h-thai-ml-tables.jpg'
// }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/coffee-cat.jpg'
// }];