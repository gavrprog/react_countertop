const express = require('express');
const bodyParser = require('body-parser'); //to convert the body of incoming requests into JavaScript objects
const cors = require('cors'); //to configure Express to add headers stating that this API accepts requests coming = other origins
const helmet = require('helmet'); // helps to secure Express APIs by defining various HTTP headers
const morgan = require('morgan'); // adds some logging capabilities to this Express API
const config = require('../config');

const PORT = process.env.PORT || 3001;

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects {app.use(express.json());}
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));


app.get('/api/', (req, res) => {
  res.send(ads);
});

// starting the server
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});