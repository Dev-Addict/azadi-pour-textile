const express = require('express');

const ticketController = require('../controllers/ticketController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/')
    .get(authController.protect,
        ticketController.getTickets)
    .post(authController.protect,
        ticketController.createTicket);

router.route('/:id')
    .get(ticketController.getTicket)
    .patch(authController.protect,
        authController.restrictTo('admin'),
        ticketController.updateTicket)
    .delete(authController.protect,
        authController.restrictTo('admin'),
        ticketController.deleteTicket);

module.exports = router;