const mongoose = require('mongoose');

const anonymousTicketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '0x00012'],
        validate: {
            validator: value => /^([\u0600-\u06FF]{3,}\s?)+$/.test(value),
            message: '0x00013'
        }
    },
    email: {
        type: String,
        required: [true, '0x00014'],
        validate: {
            validator: value => /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(value),
            message: '0x00015'
        },
        lowercase: true,
        unique: true
    },
    title: {
        type: String,
        required: [true, '0x00016'],
        maxLength: [60, '0x00017'],
        minLength: [10, '0x00018'],
        validate: {
            validator: value => /^([\u0600-\u06FF]+\s?)+$/.test(value),
            message: '0x00019'
        }
    },
    description: {
        type: String,
        required: [true, '0x0001A'],
        maxLength: [600, '0x0001B'],
        minLength: [50, '0x0001C'],
        validate: {
            validator: value => /^([\u0600-\u06FF]+\s?)+$/.test(value),
            message: '0x0001D'
        }
    }
});

const AnonymousTicket = mongoose.model('AnonymousTicket', anonymousTicketSchema);

module.exports = AnonymousTicket;