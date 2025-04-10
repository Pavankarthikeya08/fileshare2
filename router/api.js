const express = require('express');
const router = express.Router();
const upload = require('../multer.js');
const urls = require('../model2.js');

router.post("/upload", upload.single('file'), async (req, res) => {
    try {
        const url = req.file.path;
        const public_id = req.file.filename;
        const id = req.body.randomId;

        const newurl = new urls({ id,url, public_id });
        await newurl.save();
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(500);
    }
});

router.get("/download/:id", async (req, res) => {
    try {
        const record = await urls.findOne({ id: req.params.id });
        if (record) {
            // Add ?fl_attachment to force download (Cloudinary trick)
            return res.redirect(`${record.url}?fl_attachment`);
        } else {
            res.status(404).send("No file found");
        }
    } catch (err) {
        res.status(500).send("Server error");
    }
});

module.exports = router;
