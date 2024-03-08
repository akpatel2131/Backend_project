const User = require("../models/User")
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");


const registerUser = async(data) => {
    try {

        const existingUser = await User.findOne({email: data.email});

        if(existingUser) {
            throw new Error ("User Already Exist");
        }
        const user = new User(data);
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);

        user.password = hashedPassword;
        await user.save();
        return user;
    } catch (error) {
        throw error;
    }

}

const loginUser = async (data) => {
    try {
        const {email, password} = data
        const userData = await User.findOne({email});

        if(!userData){
            throw new Error("User does not exist");
        }

        const checkPassword = await userData.comparePassword(password);

        if(!checkPassword) {
            throw new Error ("password is not correct");
        }

        const token = await JWT.sign({id: userData._id}, process.env.JWT_SECRET);
        return {token, userData}

    }catch (error) {
        throw(error);
    }

}

module.exports = {
    registerUser,
    loginUser
}