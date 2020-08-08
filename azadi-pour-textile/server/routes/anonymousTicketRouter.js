const express = require('express');

const anonymousTicketController = require('../controllers/anonymousTicketController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/')
    .get(authController.protect, authController.restrictTo('admin'), anonymousTicketController.getAnonymousTickets)
    .post(anonymousTicketController.createAnonymousTicket);

router.route('/:id')
    .get(authController.protect, anonymousTicketController.getAnonymousTicket)
    .patch(authController.protect, authController.restrictTo('admin'), anonymousTicketController.updateAnonymousTicket)
    .delete(authController.protect, authController.restrictTo('admin'), anonymousTicketController.deleteAnonymousTicket);

module.exports = router;