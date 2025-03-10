const React = require('react');
const Default = require('./Default');

function Error404() {
return (
    <Default>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>you suck Opps, Sorry we can't find this page!</p>
            <img src="http://placekitten.com/600/600" alt='kitten' />
        </main>
    </Default>
)
};

module.exports = Error404;