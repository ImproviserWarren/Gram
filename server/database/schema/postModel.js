const { mongoose, Schema } = require('mongoose')
 
const postSchema = new Schema({
    date: { type: Date, default: Date.now() },
    UserId: [{ type: Schema.Types.ObjectId, ref: 'users'}],
    postImg: String,
    caption: String,    
    likes: [{type: Array, default: 'users'}],
    dislikes: [{type: Array, default: 'users' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'comments'}]
 
})
 
const postModel = mongoose.model('posts', postSchema)
 
module.exports = postModel