const {Schema,model, Types} = require('../connection');

const mySchema=new Schema({
    title:String,
    details:String,
    image: String,
    date:String,
    content: String,
    likes: { type: Number, default: 0 },
    comments: [{ content: String, date: { type: Date, default: Date.now } }],
    date: { type: Date, default: Date.now },
    });

module.exports=model('community',mySchema)