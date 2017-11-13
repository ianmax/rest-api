var express = require('express');
var router = express.Router();
const User = require('../controllers/userControllers');
const Login = require('../controllers/loginControllers');

/* GET users listing. */
router.get('/users', Login.verifyLogin, Login.verifyAdmin, User.getAllUser);
// router.get('/users', User.getAllUser);
router.get('/users/:id', Login.verifyLogin, Login.verifyById, User.getById);
router.post('/users', Login.verifyLogin, Login.verifyAdmin, User.addUser);
router.delete('/users/:id', Login.verifyLogin, Login.verifyAdmin, User.deleteById);
router.put('/users/:id', Login.verifyLogin, Login.verifyById, User.editUser);
router.post('/signup', User.addUser);
router.post('/signin', Login.isLogin);

module.exports = router;
