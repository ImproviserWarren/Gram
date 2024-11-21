const likeModel = require("../database/schema/likesModel")
const factModel =  require("../database/schema/factModel")
const spreadLike = async (req, res) => {
    const likeBody = req.body;
    try {
        const like = await likeModel.create(likeBody)
        res.status(200).send(like)
    } catch (error) {
        res.send(error)
    }
}


const validateLiker = async(req, res, next) => {
    const likeBody = req.body;
    const users =  await factModel.findOne({ likes: likeBody })
    if (!users) {
        next()
    } else {
        const result = await likeModel.findByIdAndDelete(likeBody)
        console.log(result)
        res.status(200).send('Like removed')
    }
}
module.exports = { spreadLike, validateLiker }