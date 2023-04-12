'use strict';

require('dotenv').config();

const { db } = require('./src/auth/models/index.js');
const server = require('./src/server.js')

// Start up DB Server
db.sync()
  .then(() => {
    // Start the web server
    server.startup(process.env.PORT);
  });