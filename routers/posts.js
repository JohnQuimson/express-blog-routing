const express = require('express');
const router = express.Router();
const postsControllers = require('../controllers/posts.js');

router.get('/', postsControllers.index);

module.exports = router;
