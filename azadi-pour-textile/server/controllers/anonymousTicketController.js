const factory = require('./handlerFactory');
const AnonymousTicket = require('../models/AnonymousTicket');

exports.getAnonymousTickets = factory.getAll(AnonymousTicket);

exports.createAnonymousTicket = factory.createOne(AnonymousTicket);

exports.getAnonymousTicket = factory.getOne(AnonymousTicket);

exports.updateAnonymousTicket = factory.updateOne(AnonymousTicket);

exports.deleteAnonymousTicket = factory.deleteOne(AnonymousTicket);