const mongoose = require('mongoose');

const url="mongodb+srv://contactbullstocks:3NKY2pjEPvvYtQ36@bullstock.0udkw.mongodb.net/BullStock?retryWrites=true&w=majority&appName=Bullstock"

mongoose.connect(url)
.then((result) => {
    console.log('Connected to mongoose')
    
}).catch((err) => {
    console.error(err)
    
});

module.exports=mongoose