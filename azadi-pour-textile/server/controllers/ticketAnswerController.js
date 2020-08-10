const factory = require('./handlerFactory');
const TicketAnswer = require('../models/TicketAnswer');

exports.getTicketAnswers = factory.getAll(TicketAnswer);

exports.createTicketAnswer = factory.createOne(TicketAnswer);

exports.getTicketAnswer = factory.getOne(TicketAnswer);

exports.updateTicketAnswer = factory.updateOne(TicketAnswer);

exports.deleteTicketAnswer = factory.deleteOne(TicketAnswer);