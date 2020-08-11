const express = require('express');
const mongoose = require(mongoose);

const ticketAnswerController = require('../controllers/ticketAnswerController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/')
    .get(authController.protect,
        authController.restrictTo('admin, selfTicketTicketAnswers'),
        ticketAnswerController.getTicketAnswers)
    .post(authController.protect,
        ticketAnswerController.setUser,
        authController.restrictTo('admin', 'selfTicketAnswer'),
        ticketAnswerController.createTicketAnswer);

router.route('/:id')
    .get(authController.protect,
        authController.restrictTo('admin', 'selfTicketTicketAnswer'),
        ticketAnswerController.getTicketAnswer)
    .patch(authController.protect,
        authController.restrictTo('admin'),
        ticketAnswerController.updateTicketAnswer)
    .delete(authController.protect,
        authController.restrictTo('admin'),
        ticketAnswerController.deleteTicketAnswer);

module.exports = router;