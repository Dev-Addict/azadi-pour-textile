const mongoose = require('mongoose');

const ticketAnswerSchema = new mongoose.Schema({
    ticket: {
        type: mongoose.Schema.ObjectId,
        required: [true, '0x00024']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        required: [true, '0x00025']
    },
    body: {
        type: String,
        required: [true, '0x00026']
    },
    requestAt: {
        type: Date,
        required: [true, '0x00027']
    }
});

const TicketAnswer = mongoose.model('TicketAnswer', ticketAnswerSchema);

module.exports = TicketAnswer;