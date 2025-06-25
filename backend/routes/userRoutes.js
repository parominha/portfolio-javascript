const express = require("express");
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware.js')

router.get('/dashboard', authMiddleware, (req,res) => {
    return res.json({
        message: 'Welcome to the dashboard',
        user: req.user
    })
})

module.exports = router