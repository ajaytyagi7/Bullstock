const express = require('express');

const UserRouter = require('./Router/userRouter');
const BlogRouter = require('./Router/blogRouter');
const utilRouter = require('./Router/util');
const ContactRouter = require('./Router/contactRouter');
const CommunityRouter = require('./Router/communityRouter');
require("dotenv").config();
// require('dotenv').config();
const cors = require('cors');


const app=express();
const port = process.env.PORT || 5013;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    orgin: 'http://88.222.212.179:5173'

}));

app.use('/user',UserRouter);
app.use('/blog',BlogRouter);
app.use('/contact',ContactRouter);
app.use('/community',CommunityRouter);
app.use('/util', utilRouter);    
app.use(express.static('./uploads'));


app.listen(port,(err)=>{
    if(err)console.log(err);
    else 
    console.log(`server is running on port number : ${port}`);
    });
