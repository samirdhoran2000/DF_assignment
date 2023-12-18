const express = require('express');
const router = express.Router();
const { createUser ,deleteUser,getUser,getUsers,updateUser,} = require('../controller/user.controller.js');
const { login } = require('../controller/login.controller.js');
const { loginAuth}= require('../middleware/auth.middleware.js')


router.post('/', createUser);
router.post('/login', login);
router.get('/', loginAuth,getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);


module.exports = { router };