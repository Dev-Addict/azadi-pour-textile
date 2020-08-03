const express = require('express');

const userRouter = require('./userRouter');

const router = express.Router({mergeParams: true});

router.route('/users', userRouter);

module.exports = router;