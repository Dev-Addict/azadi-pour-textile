class AppError extends Error{
    constructor(message, statusCode, place) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4')?'fail':'error';
        this.place = place;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;