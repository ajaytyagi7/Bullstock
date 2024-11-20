const {Schema,model, Types} = require('../connection');

const mySchema=new Schema({
    title:String,
    details:String,
    image: String,
    description:String,
    date:String,
    catagory:String,
    });

module.exports=model('blog',mySchema)