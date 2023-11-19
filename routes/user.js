const { verifyToken, verifyTokenAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const User = require('../models/User')
const router = require('express').Router();

router.put('/:id', verifyTokenAuthorization, async (req,res) => {
    console.log('processing...')
    if(req.body.password) {
        req.body.password = CryptoJS.AES
        .encrypt(req.body.password, process.env.PASS_SEC)
        .toString();
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, 
        {new: true}
        );
        return res.status(200).json(updatedUser);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// DELETE METHOD

router.delete('/:id', verifyTokenAuthorization, async (req,res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json('User has been deleted...');
    } catch (err) {
        return res.status(500).json(err);
    }
});

// GET USER METHOD 
router.get('/find/:id', verifyTokenAndAdmin, async (req,res) => {
    try {
        console.log("find function")
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        return res.status(200).json(others);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// GET ALL USERS METHOD 
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new
    try {
        const users = query 
        ? await User.find().sort({_id: -1}).limit(5) 
        : await User.find();
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//GET USER STATS
router.get('/stats', verifyTokenAndAdmin, async(req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        
        const data = await User.aggregate([
            {   $match: {createdAt: {$gte: lastYear}}},
            {
                $project: {
                    month: { $month: "$createdAt"},
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1}
                }
            }
        ]);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;