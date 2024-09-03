//create an express server
const express = require('express');
const app = express();


//serve static files
app.use(express.static('public'));


//serve index.html file over the root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => console.log('Listening on port 3000...'));

module.exports = app