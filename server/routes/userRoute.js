const { Router } = require("express");
const { createUser, loginUser, validateEmail } = require("../controllers/userControl");


const userRoute = Router();

userRoute.post('/signUp', createUser, validateEmail)
userRoute.post('/login', loginUser)

module.exports = userRoute