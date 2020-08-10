const factory = require('./handlerFactory');
const Ticket = require('../models/Ticket');

exports.getTickets = factory.getAll(Ticket);

exports.createTicket = factory.createOne(Ticket);

exports.getTicket = factory.getOne(Ticket);

exports.updateTicket = factory.updateOne(Ticket);

exports.deleteTicket = factory.deleteOne(Ticket);