const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.URI;


mongoose.connect(url)
.then((result) => {
    console.log('Connected to mongoose')
    
}).catch((err) => {
    console.error(err)
    
});

module.exports=mongoose