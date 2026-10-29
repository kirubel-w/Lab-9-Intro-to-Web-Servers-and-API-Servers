const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const indexRouter = require('./routes/index.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const staticFileLocation = path.join(__dirname, 'public');
app.use(express.static(staticFileLocation));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', indexRouter);

const server = app.listen(process.env.PORT || 3000, function () {
   console.log('server running on port', server.address().port)
})