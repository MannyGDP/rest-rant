const React = require('react');
const Default = require('./Default');

function Home() {
    return (
        <Default>
            <main>
                <h1>Home</h1>
                <img src="/images/chiaDrink.jpg"/>
                <div>
                    Photo by <a href="AUTHOR_LINK">Home-Views-Home.jsx Unknown Right Now</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
                <a href='/places'>
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Default>
    )
};

module.exports = Home;