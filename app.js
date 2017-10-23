const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

require('./routes/index')(app);

app.use(express.static('www'))

var port = process.env.PORT || 80

app.listen(port, function() {
    console.log("App is running on port " + port);
});