const {Schema,model} = require('../connection');

const mySchema=new Schema({
    email:String,
    name:String,
    password:String,
    avatar:String,
    loginType : {type: String, default: 'local'},
});

module.exports=model('user',mySchema);