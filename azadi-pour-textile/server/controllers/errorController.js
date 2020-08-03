const AppError = require('../utils/AppError');

const handleCastErrorDB = err => {
    return new AppError('0x00000', 400, err.path);
};

const handleDuplicateFieldsDB = err => {
    const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
    return new AppError('0x00001', 400, value);
};

const handleValidationErrorDB = err => {
    const errors = Object.values(err.errors).map(el => el.message);
    return new AppError('0x00002', 400, errors.join('.'));
};

const handleWebTokenError =
    () => new AppError('0x00003', 401);
const handleJsonWebTokenExpiredError =
    () => new AppError('0x00004', 401);

const sendErrorDevelopment = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
        error: err
    });
};

const sendErrorProduction = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    } else {
        res.status(500).json({
            status: 'err',
            message: '0x00005'
        });
    }
};

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'development') {
        sendErrorDevelopment(err, res);
    } else {
        let error = {...err};
        if (error.name === 'CastError') {
            error = handleCastErrorDB(error);
        }
        if (error.code === 11000) {
            error = handleDuplicateFieldsDB(error);
        }
        if (error.name === 'ValidationError') {
            error = handleValidationErrorDB(error);
        }
        if (error.name === 'JsonWebTokenError') {
            error = handleWebTokenError();
        }
        if (error.name === 'UnauthorizedError') {
            error = handleJsonWebTokenExpiredError();
        }
        sendErrorProduction(error, res);
    }
};