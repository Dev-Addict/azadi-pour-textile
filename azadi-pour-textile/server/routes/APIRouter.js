const express = require('express');

const userRouter = require('./userRouter');
const anonymousTickerRouter = require('./anonymousTicketRouter');
const ticketRouter = require('./ticketRouter');
const ticketAnswerRouter = require('./ticketAnswerRouter');

const router = express.Router({mergeParams: true});

router.use('/users', userRouter);
router.use('/anonymoustickets', anonymousTickerRouter);
router.use('/tickets', ticketRouter);
router.use('/ticketanswers', ticketAnswerRouter);

module.exports = router;