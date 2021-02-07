const express = require('express');
const router = express.Router();
const userModel = require('./user-model');


router.delete('/register/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const userDeleteResp = await userModel.deleteOne({ _id: userId });
    res.json(userDeleteResp);
  } catch(e) {
    res.send(e.message)
  }
});

module.exports = router;