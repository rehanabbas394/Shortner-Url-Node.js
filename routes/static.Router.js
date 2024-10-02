const express = require("express");
const router = express.Router();
const model = require("../model/url.model");
const { restrictuserRole, AuthenticateToken } = require("../middleware/auth");

// Public route, only authenticated users can access
router.get("/", AuthenticateToken, async (req, res) => {
    try {
        const allUrls = await model.find({});
        return res.render('home', { url: allUrls });
    } catch (err) {
        console.error("Error fetching URLs:", err);
        return res.status(500).send("Internal Server Error");
    }
});

router.get("/signup", (req, res) => {
    return res.render("user");
});

router.get("/login", (req, res) => {
    return res.render("login");
});

module.exports = router;
