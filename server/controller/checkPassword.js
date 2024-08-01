const jwt = require("jsonwebtoken")
const UserModel = require("../models/UserModel")
const bcryptjs = require("bcryptjs")

async function checkPassword(register,response){
    try {
        const{password ,userId} = request.body

        const user = await UserModel.findById(userId)

        const verifyPassword = await bcryptjs.Compare(password,user.password)
        
        if(!verifyPassword){
            return response.status(400).json({
                message: "Please Check the Password",
                error: true
            })
        }

        const tokenDate = {
            Id: user._id,
            email: user.email
        }

        const cookieOptions = {
            http: true,
            secure: true
        }

        const token = await jwt.sign(tokenDate,process.env.JWT_SECREAT_KEY,{expiresIn:'Id'})
        return response.cookie('token',token,cookieOptions).status(200).json({
            message: "Login Successfully",
            token: token,
            success: true
        })
    
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = checkPassword