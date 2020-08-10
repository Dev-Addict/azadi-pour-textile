const factory = require('./handlerFactory');
const User = require('../models/User');
const catchRequest = require('../utils/catchRequest');

exports.getUsers = factory.getAll(User);

exports.createUser = factory.createOne(User);

exports.getUser = factory.getOne(User);

exports.updateUser = factory.updateOne(User);

exports.deleteUser = factory.deleteOne(User);

exports.filterbody = catchRequest(
    (req, res, next) => {
        delete req.body.passwordChangedAt;
        delete req.body.passwordResetToken;
        delete req.body.passwordResetExpires;
        delete req.body.isEmailVerified;
        delete req.body.rote;
        delete req.body.verifyEmailToken;
        delete req.body.verifyEmailExpires;
        delete req.body.isCellphoneVerified;
        delete req.body.verifyCellphoneToken;
    }
);