const express = require('express'); //CommonJS Modules
const router = express.Router();
const postsControllers = require('../controllers/posts.js');

router.get('/', postsControllers.index);
router.get('/:slug', postsControllers.show);

module.exports = router;
