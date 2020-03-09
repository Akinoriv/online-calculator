const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('port', 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api/records', require('./routes/records'));

app.use('/', express.static(path.join(__dirname, '../dist')));

app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});