
const mongoose = require('mongoose');
const  MONGO_URI="mongodb://localhost:27017"

const connectToMongo =handler=> async (req,res) => {
    // return that come and go 

    if(mongoose.connections[0].readyState){
       return handler(req,res); 
    }
   mongoose.connect(MONGO_URI)
    return handler(req,res)
}
module.exports = connectToMongo;