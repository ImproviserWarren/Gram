const { mongoose, Schema } = require('mongoose')
 
const factSchema = new Schema({
    date: { type: Date, default: Date.now() },
    UserId: [{ type: Schema.Types.ObjectId, ref: ''}],
    fact: String,
    factTitle: String,
    likes: {type: Array, default:[]},
    dislikes: {type: Array, default: 'users'},
    comments: [{ type: Schema.Types.ObjectId, ref: 'comments'}]
 
})
 
const factModel = mongoose.model('posts', factSchema)
 
module.exports = factModel