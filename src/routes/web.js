const express = require('express');
const { getHomePage, getExamplePage } = require('../controllers/homeController');

const router = express.Router();

router.get('/', getHomePage)
router.get('/hello', getExamplePage)

module.exports = router;