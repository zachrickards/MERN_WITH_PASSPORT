const express = require('express');
const router = express.Router();
const passport = require("../../passport");



const Profile = require('../../models/profile');
const User = require('../../models/user');


//@route GET api/profile/me
//Get current users profile
//Private

router.get('/', async (req, res) => {
    try{
        const profile = await Profile.findOne({user: req.user.id}).populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({msg: 'There is no profile for this user'});
        }
        req.json(profile)

    }catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



module.exports = router;