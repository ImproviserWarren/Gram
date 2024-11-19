const { Router } = require("express")
const { createFact, getFacts, deleteFact } = require("../controllers/factControl")

const factRoute = Router()

factRoute.post('/createPost', createFact)
factRoute.get('/findPost', getFacts)
factRoute.delete('/deletePost', deleteFact)

module.exports = factRoute