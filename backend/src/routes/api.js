const express = require('express');
const router = express.Router();
const { handleRoast, handleRandomRoast } = require('../controllers/roastController');

router.post('/roast', handleRoast);
router.get('/random-roast', handleRandomRoast);

module.exports = router;