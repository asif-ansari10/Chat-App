const express = require('express')
const registerUser = require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')

const router = express.Router()

// create user api
router.post('/register',registerUser)
// check email
router.post('/email',checkEmail)

module.exports = router