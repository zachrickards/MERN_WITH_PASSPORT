const express = require("express");
const router = express.Router();
const User = require("../../database/models/User");
const passport = require("../../passport");
const upload = require('../../lib/multer');
const cloudinary = require('../../lib/cloudinary');


router.post( "/", upload.single('file'), async (req, res) => {
    console.log(req.file)
    try {
        const cloudImgData = await cloudinary.uploader.upload('./uploads/' + req.file.filename, {
            upload_preset: 'connect-project-3-upload-preset'
        })
        const userDate = await User.findByIdAndUpdate(
            req.user._id,
            {
                profileImg: {
                    public_id: cloudImgData.public_id,
                    filename: cloudImgData.original_filename,
                    url: cloudImgData.url
                }
            }
        )

        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.json(err);
    }


});

router.get("/", (req, res) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});


module.exports = router;
