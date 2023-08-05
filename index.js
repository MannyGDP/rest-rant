const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const { PORT } = process.env;
const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.render('Home');
});

app.get('*', (req, res) => {
    res.render('Error404');
});

app.listen(PORT, () => {
    console.log('app is listening on port ${PORT}');
});
