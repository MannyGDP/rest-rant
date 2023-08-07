const React = require('react');
const Default = require('../Default');

function Index({ places }) {
return (
<Default>
    <main>
        <h1>PLACES INDEX PAGE</h1>
        <div className="row">
        { places.map(place => (
            <div className='col-sm-6'>
                <h2>{ place.name }</h2>
                <p className='text-center'>{ place.cuisines }</p>
                <img src={ place.pic } alt={ places.name } />
                <p className='text-center'>
                    Located in { place.city }, { place.state }
                </p>
            </div>
        ))}
        </div>
    </main>
</Default>
    )
}

module.exports = Index;
