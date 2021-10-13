const express = require('express');

const app = express();

app.use(express.static('./dist/test2'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/test2/'}),
);

app.listen(process.env.PORT || 8080);