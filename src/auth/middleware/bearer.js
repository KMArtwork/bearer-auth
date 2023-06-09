'use strict';

const { users } = require('../models/index.js');

const bearer = async (req, res, next) => {

  try {

    if (!req.headers.authorization) { next('Invalid Login') }

    const token = req.headers.authorization.split(' ')[1];
    const validUser = await users.authenticateToken(token);

    req.user = validUser;
    req.token = validUser.token;

    next();

  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }
}

module.exports = bearer;