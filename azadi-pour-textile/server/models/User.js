const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'A user must have a email.'],
        validate: {
            validator: value => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value),
            message: ({value}) => `${value} is not a valid email.`
        },
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'A User Must Have A password'],
        validate: {
            validator: value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/.test(value),
            message: 'Invalid password.'
        },
        select: false
    },
    passwordChangedAt: Date,
    passwordResetToken: {
        type: String,
        select: false
    },
    passwordResetExpires: Date,
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    rote: {
        type: String,
        enum: {
            values: ['admin', 'user'],
            message: 'A User Must Have rote Value Set To admin Or User.'
        },
        default: 'user'
    },
    verifyEmailToken: {
        type: String,
        select: false
    },
    verifyEmailExpires: Date
});

userSchema.methods.createResetPasswordToken = function() {
    const resetToken = crypto.randomBytes(64).toString('hex');
    this.passwordResetToken =
        crypto
            .createHash('sha256')
            .update(resetToken)
            .digest('hex');
    this.VerifyEmailExpires = Date.now() + 600000;
    return resetToken;
};

userSchema.methods.createVerifyEmailToken = function() {
    const verifyToken = crypto.randomBytes(64).toString('hex');
    this.verifyEmailToken =
        crypto
            .createHash('sha256')
            .update(verifyToken)
            .digest('hex');
    this.verifyEmailExpires = Date.now() + 600000;
    return verifyToken;
};

userSchema.methods.correctPassword = async function(
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.isPasswordChanged = function(JWTTimeStamp) {
    if (this.passwordChangedAt) {
        if (this.passwordChangedAt.getTime() / 1000 > JWTTimeStamp) {
            return true;
        }
    }
    return false;
};

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.pre('save', function(next) {
    if (this.isModified('password') && !this.isNew) {
        this.passwordChangedAt = Date.now() - 1000;
        this.passwordResetToken = undefined;
        this.passwordResetExpires = undefined;
    }
    next();
});

userSchema.pre('save', function (next) {
    if (this.isModified('isEmailVerified') && !this.isNew) {
        this.verifyEmailToken = undefined;
        this.VerifyEmailExpires = undefined;
    }
    next();
});

const User = mongoose.model('user', userSchema);

module.exports = User;