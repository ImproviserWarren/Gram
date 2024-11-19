const mongoose = require("mongoose")

const connectToDb = async () => {
    try {
        res = await mongoose.connect('mongodb+srv://snekim:GtaAUEOIUthu0TXO@cluster0.bbkwv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Connected to the database")  
    } catch (error) {
        throw new error ("Failed to connect to database")
    }
    
} 

module.exports = connectToDb