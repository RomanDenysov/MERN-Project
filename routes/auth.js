const router = require('express').Router();
const CryptoJS = require('crypto-js');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

//REGISTER
router.post('/register', async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES
                    .encrypt(req.body.password, process.env.PASS_SEC)
                    .toString(),
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});



//LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        //USER CONTROLL
        if(!user){
            return res.status(401).json('Wrong credentials!');
        }
        //UNHASHING PASSWORD
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        //PASSWORD CONTROLL
        if(originalPassword !==req.body.password){
            return res.status(401).json('Wrong credentials!');
        }

        //JWT-TOKEN SECURE
        const accessToken = jwt.sign(
        {
            id: user._id, 
            isAdmin: user.isAdmin,
        },
            process.env.JWT_SEC,
            {expiresIn: "2h"}
        );

        
        // dont sending to user - his HASHED PASSWORD
        const {password, ...others} = user._doc;
        return res.status(200).json({...others, accessToken});

    } catch (err) {
        return res.status(500).json(err);
        
    }
});

module.exports = router;