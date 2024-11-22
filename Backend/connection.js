const mongoose = require('mongoose');
require('dotenv').config({path:'./.env'});



const uri = process.env.MONGO_URI;
console.log(uri)
if (!uri) {
    throw new Error('Mongo URI is missing',uri)
}

mongoose.connect(uri)
.then((result) => {
    console.log('Connected to mongoose')
    
}).catch((err) => {
    console.error(err)
    
});

module.exports=mongoose