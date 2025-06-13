const express = require('express');
const router = express.Router();
const sendMail = require('../utils/sendMail');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sendMail(name, email, message);
    res.status(200).json({ success: true, msg: "Message sent!" });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Failed to send." });
  }
});

module.exports = router;
