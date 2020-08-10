const sharp = require('sharp');

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
        next();
    }
);

exports.saveAvatar = catchRequest(
    async (req, res, next) => {
        if (req.file) {
            const ext = req.file.mimetype.split('/')[1];
            req.file.filename = `avatar-${req.user.id}-${Date.now()}.${ext}`;
            req.body.avatar = req.file.filename;
            await sharp(req.file.buffer)
                .resize(500, 500)
                .toFormat('jpeg')
                .jpeg({quality: 90})
                .toFile(`uploads/avatars/${req.file.filename}`);
        }
        next();
    }
);