const { mongoose, Schema } = require('mongoose')
 
const userSchema = new Schema({
    email: String,
    password: String,
    username: String,
    age: Number,
    followers: [{ type: Schema.Types.ObjectId, ref: "Users"}],
    folllowing: [{ type: Schema.Types.ObjectId, ref: "Users"}],
    date: { type: Date, default: Date.now },
    postId: [{ type: Schema.Types.ObjectId, ref: 'post'}]
})
 
const userModel = mongoose.model('users', userSchema)
 
module.exports = userModel