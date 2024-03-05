const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        // required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

module.exports = mongoose.model('posts',postSchema)