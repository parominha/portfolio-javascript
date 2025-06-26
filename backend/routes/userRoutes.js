const express = require("express");
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware.js');
const { userProfile } = require("../controllers/userController.js");

router.get('/dashboard', authMiddleware, (req,res) => {
    return res.json({
        message: 'Welcome to the dashboard',
        user: req.user
    })
})

router.get('/profile', authMiddleware, userProfile);

module.exports = router