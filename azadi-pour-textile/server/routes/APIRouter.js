const express = require('express');

const userRouter = require('./userRouter');
const anonymousTickerRouter = require('./anonymousTicketRouter');

const router = express.Router({mergeParams: true});

router.use('/users', userRouter);
router.use('/anonymoustickets', anonymousTickerRouter);

module.exports = router;