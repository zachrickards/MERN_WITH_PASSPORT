const express = require("express");
const router = express.Router();
const User = require("../../database/models/User");

router.get("/", async (req, res) => {
    try {
        // TODO: filter users based on previous matches
        const userData = await User.find();

        res.json(userData);

    } catch (err) {
        console.log(err);
        res.json(err);
    }

});

module.exports = router;
