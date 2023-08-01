const React = require('react');
const Def = require('./Default');

function Error404() {
return (
    <Def>
        <main>
            <h1>PAGE NOT FOUND</h1>
            <p>Opps, Sorry we can't find this page!</p>
        </main>
    </Def>
)
};

module.exports = Error404;