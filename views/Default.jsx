const React = require('react');

function Def(html) {
return (
<html>
    <head>
        <title>Reat rant</title>
    </head>
    <body>
        { html.children }
    </body>
</html>
)
};

module.export = Def;