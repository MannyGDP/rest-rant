const React = require('react');
const Def = require('../Default');

function Index({ places }) {
return (
<Def>
    <main>
        <h1>PLACES INDEX PAGE</h1>
        { places.map(place => (
            <div>
                <h2>{ place.name }</h2>
                <img src={ place.pic } alt={ places.name } />
            </div>
        ))}
    </main>
</Def>
    )
}

module.exports = Index;
