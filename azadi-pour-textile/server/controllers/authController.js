const {promisify} = require('util');
const jsonWebToken = require('jsonwebtoken');

const User = require('../models/User');
const catchRequest = require('../utils/catchRequest');
const AppError = require('../utils/AppError');

exports.protect = catchRequest(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }
    if (!token) {
        throw new AppError('0x0000C', 401);
    }
    const decodedToken = await promisify(jsonWebToken.verify)(token, process.env.JSON_WEB_TOKEN_SECRET);
    const user = await User.findById(decodedToken.id);
    if (!user) {
        throw new AppError(
            '0x0000D',
            401
        );
    }
    if (user.isPasswordChanged(decodedToken.iat)) {
        throw new AppError(
            '0x0000E',
            401
        );
    }
    req.user = user;
    next();
});

exports.restrictTo = (...rotes) => {
    return catchRequest(
        async (req, res, next) => {
            if (rotes.includes(req.user.rote))
                return next();
            if (rotes.includes('selfUser') &&
                !req.body.rote &&
                !req.body.password &&
                !req.body.passwordChangedAt &&
                !req.body.passwordResetToken &&
                !req.body.passwordResetExpires &&
                !req.body.isEmailVerified &&
                !req.body.verifyEmailToken &&
                !req.body.verifyEmailExpires)
                return next();
            throw new AppError('0x0000F', 403);
        }
    );
};