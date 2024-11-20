const express = require('express');

const UserRouter = require('./Router/userRouter');
const BlogRouter = require('./Router/blogRouter');
const utilRouter = require('./Router/util');
const ContactRouter = require('./Router/contactRouter');
const CommunityRouter = require('./Router/communityRouter');











const cors = require('cors');


const app=express();
const port= 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    orgin: 'http://localhost:5173'

}));

app.use('/user',UserRouter);
app.use('/blog',BlogRouter);
app.use('/contact',ContactRouter);
app.use('/community',CommunityRouter);
app.use('/util', utilRouter);
app.use(express.static('./uploads'));





// app.use(express.static)



app.listen(port,() =>{console.log('Server Started !!')});