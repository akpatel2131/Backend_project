const authService = require("../services/authService")

const register = async (req,res) => {
    try {
        const userData = req.body;

        const userObj = await authService.registerUser(userData);

        res.status(201).json({
            message: "User registered successfully",
            userId: userObj._id,
        })
    }catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

const login = async(req, res) => {

    try {
        const userLoginData = req.body;
        const {token ,userData} = await authService.loginUser(userLoginData);

        res.status(200).json({
            message: "User login successFully",
            token,
            userData,
        })
    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

module.exports = {
    register,
    login,
}