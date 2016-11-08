const express = require('express');
const app     = express();
const fs      = require('fs');
const index   = fs.readFileSync('../dist/marketplace.html');

app.use(express.static('../dist'));

app.get(/\/{1}.*/, function (req, res) {
    console.log('sup');
    res.set('Content-Type', 'text/html');
    res.send(index);
});

app.listen(8080, function () {
    console.log('Dev static server, listening...');
});