const express = require('express')
const cors = require('cors');
const route = require('./router/route')
const bodyParser = require('body-parser');
const db = require('./db/connect')
const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(route(db));
app.listen(4000, () => {
    console.log(`Server Started at 4000`)
});

