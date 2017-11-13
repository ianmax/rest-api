var express = require('express');
var router = express.Router();
const User = require('../controllers/loginControllers');

// Login
router.post('/', User.isLogin);

module.exports = router;
