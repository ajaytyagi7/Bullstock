const express = require('express');
const Model = require('../Model/communityModel');


const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.json(result)

        }).catch((err) => {
            console.error(err);
            res.status(500).json(err)

        });
});

router.get('/getall', (req, res) => {


    Model.find()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
});


router.get('/getbyemail/:email', (req, res) => {

    Model.findOne({ email: req.params.email })
        .then((result) => {
            if(result){
                res.json(result);
            }else{
                res.status(400).json({message:'User Not Found'});
            }
        }).catch((err) => {
            res.status(500).json(err)
        });
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json(result);
        }).catch((err) => {

            res.status(500).json(err);
        });
});

router.get('/getbyid/:id',(req,res) =>{
    
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err) 
    });
});

router.post('/posts/:id/comment', async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
  
    try {
      const post = await Model.findById(id);
      if (!post) return res.status(404).json({ message: 'Post not found' });
  
      post.comments.push({ content });
      await post.save();
      res.json(post);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });
  

  router.post('/posts/:id/like', async (req, res) => {
    const { id } = req.params;
  
    try {
      const post = await Model.findById(id);
      if (!post) return res.status(404).json({ message: 'Post not found' });
  
      post.likes += 1;
      await post.save();
      res.json(post);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });
  


module.exports = router