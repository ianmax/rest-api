require('dotenv').config();
const model = require('../models');
const checkMatch = require('../helper/findMatch.js');
const jwt = require('jsonwebtoken');

let isLogin = (req, res, next) => {
  console.log('masuk middleware');
  model.User.findAll(
    {
      where: { username: req.body.username }
    }
  )
  .then(function (dataUser) {
    let match = checkMatch(req.body.password, dataUser[0].salt)
    if (match == dataUser[0].password) {
      jwt.sign(
        {
          id: dataUser[0].id,
          username: dataUser[0].username,
          isadmin: dataUser[0].isadmin
        },
        process.env.SECRET_KEY,
        function (err, token) {
          if (err) {
            res.send(err);
          } else {
            req.header.token = token
            res.send('Login Succeed!');
          }
        }
      )
    }
  }).catch(function (err) {
    res.send('Please Input Correct Username and Password')
  });
}

let verifyLogin = function (req, res, next) {
  jwt.verify(
    req.header.token,
    process.env.SECRET_KEY,
    function (err, decoded) {
      if (err) {
        res.send(err);
      } else {
        req.isVerified = decoded
        next();
      }
    }
  )
}

let verifyAdmin = function (req, res, next) {
  if (req.isVerified.isadmin == true) {
    next();
  } else {
    res.status(401).send('You are not admin!');
  }
}

let verifyById = function (req, res, next) {
  if (req.isVerified.id == req.params.id || req.isVerified.isadmin == true) {
    next();
  } else {
    res.status(401).send('You are not authorized to see this page');
  }
}

module.exports = {
  isLogin,
  verifyLogin,
  verifyAdmin,
  verifyById,
};
