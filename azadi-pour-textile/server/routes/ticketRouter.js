const express = require('express');

const ticketController = require('../controllers/ticketController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/')
    .get(authController.protect,
        authController.restrictTo('admin, selfUserTickets'),
        ticketController.getTickets)
    .post(authController.protect,
        authController.setUser,
        ticketController.createTicket);

router.route('/:id')
    .get(authController.protect,
        authController.restrictTo('admin', 'selfUserTicket'),
        ticketController.getTicket)
    .patch(authController.protect,
        authController.restrictTo('admin'),
        ticketController.updateTicket)
    .delete(authController.protect,
        authController.restrictTo('admin'),
        ticketController.deleteTicket);

module.exports = router;