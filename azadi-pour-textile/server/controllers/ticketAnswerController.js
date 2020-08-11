const factory = require('./handlerFactory');
const TicketAnswer = require('../models/TicketAnswer');
const catchRequest = require('../utils/catchRequest');

exports.getTicketAnswers = factory.getAll(TicketAnswer);

exports.createTicketAnswer = factory.createOne(TicketAnswer);

exports.getTicketAnswer = factory.getOne(TicketAnswer);

exports.updateTicketAnswer = factory.updateOne(TicketAnswer);

exports.deleteTicketAnswer = factory.deleteOne(TicketAnswer);

exports.setUser = catchRequest(
    (req, res, next) => {
        req.body.user = req.user._id.toString();
        next();
    }
);