const { Router } = require("express")
const { spreadLike, validateLiker } = require("../controllers/likeController")

const likeRoute = Router()

likeRoute.put('/likePost', spreadLike, validateLiker)


module.exports = likeRoute