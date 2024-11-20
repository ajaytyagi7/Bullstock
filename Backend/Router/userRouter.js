const express = require('express');
const Model = require('../Model/userModel.js');
const User = require('../Model/userModel.js'); 

const router = express.Router();

router.post('/add', async (req, res) => {
    console.log(req.body);

    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }

        const newUser = new User(req.body);
        const result = await newUser.save();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
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

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            console.log(result);
            if (result) res.json(result)
            else res.status(401).json({ message: 'Invalid Email' });
        }).catch((err) => {
            console.error(err)
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


module.exports = router