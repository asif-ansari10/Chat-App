const express = require('express')
const registerUser = require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')
const checkPassword = require('../controller/checkPassword')
const userDetails = require('../controller/userDetails')
const logout = require('../controller/logout')
const updateUserDetails = require('../controller/updateUserDetails')

const router = express.Router()

// create user api
router.post('/register',registerUser)
// check email
router.post('/email',checkEmail)
// check password
router.post('/password', checkPassword)
// login user detail
router.get('/user-details', userDetails)
// logout user
router.get('/logout', logout)
// user update
router.post('/update-user', updateUserDetails)

module.exports = router