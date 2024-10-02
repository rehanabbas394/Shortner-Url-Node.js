const express = require("express")
const router = express.Router()
const { UserSignup, UserLogin } = require("../controller/user.controller")

router.post('/', UserSignup) 
router.post('/login', UserLogin)

module.exports = router