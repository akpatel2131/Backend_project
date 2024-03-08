const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");
const authenticateToken = require("../middleware/authenticateToken");

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/some", authenticateToken, (req,res)=> {
    res.status(200).json({
        message: "authenticate token successfully"
    })
})

module.exports = router;