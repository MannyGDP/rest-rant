const React = require('react');
const Default = require('../Default');

function Show({ place, id }) {
    return (
        <Default>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h1>{ place.name }</h1>
                        <h3>
                            Located in { place.city }, { place.state }
                        </h3>
                    </div>
                    <div className='col-sm-6'>
                        <h2>Description</h2>
                        <h3>Established: { place.showEstablished() }</h3>
                        <h4>Serving { place.cuisines }</h4>
                    </div>
                </div>
                <form>
                    <div className='row'>
                        <label htmlFor='rating'>Rating</label>
                        <input type='text' placeholder='Not Rated' />
                    </div>
                    <div className='row'>
                        <label htmlFor='description'>Description</label>
                        <input type='text' placeholder='Desc' />
                    </div>
                </form>
                <a href={ `/places/${ id }/edit` } className='btn btn-warning'>
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
