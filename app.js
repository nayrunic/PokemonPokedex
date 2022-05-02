const express = require('express');
const router = require('./routes/pokedex.route');
const cors = require('cors');
require('./database.js')
const app = express();
const port = 3000;

app.use(express.json())
app.use(cors());
app.use('/pokedex', router);
app.use('/public', express.static(`${__dirname}/images/`))

app.listen(port, () => {
    console.log('Server listen on port ', port)
});