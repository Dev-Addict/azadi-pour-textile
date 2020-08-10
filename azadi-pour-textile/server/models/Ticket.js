const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, '0x00021']
    },
    title: {
        type: String,
        required: [true, '0x00022']
    },
    description: {
        type: String,
        required: [true, '0x00023']
    },
    files: [String]
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;