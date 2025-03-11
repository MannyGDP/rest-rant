const React = require('react');
const Default = require('../Default');

function Show({ place, id }) {
    return (
        <Default>
            <main>
        <h1>{ place.name }</h1>
        <a href={ `/places/${ id}/edit` } className='btn btn-warning'>
            Edit
        </a>
        <form method='POST' action={ `/places/${ id }?_method=DELETE` } >
            <button type='submit' className='btn btn-danger'>
                Delete
            </button>
        </form>
        <img src={ place.pic } alt={ place.name } />
            </main>
        </Default>
    )
};

module.exports = Show;
