const mongoose = require("mongoose")

const connectToDb = async () => {
    try {
        res = await mongoose.connect('mongodb+srv://Alejhan:7XWgrxgCq9TcM34P@cluster0.8wuut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Connected to the database")  
    } catch (error) {
        console.log(error)
    }
    
} 

module.exports = connectToDb