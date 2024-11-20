const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.URL)
.then((result) => {
    console.log('Connected to mongoose')
    
}).catch((err) => {
    console.error(err)
    
});

module.exports=mongoose