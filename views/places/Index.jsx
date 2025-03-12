const React = require('react');
const Default = require('../Default');

function Index({ places }) {
return (
<Default>
    <main>
        <h1>PLACES 3/11 INDEX PAGE</h1>
        <div className='row'>
        { places.map(place => (
            <div className='col-sm-6' key={place._id}>
                <h2>
                    <a href={ `/places/${place._id}`}>
                    { place.name }
                        </a>
                        </h2>
                <p className='text-center'>{ place.cuisines }</p>
                <img src={ place.pic } alt={ place.name } />
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
