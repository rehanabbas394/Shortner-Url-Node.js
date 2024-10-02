const express = require("express")
const router = express.Router()
const { generateUrl,redirectSIte,getAnalytics } = require("../controller/url")

router.post('/create', generateUrl) 
router.get('/:shortId',redirectSIte)

router.get('/ana/:shortId',getAnalytics)


module.exports = router