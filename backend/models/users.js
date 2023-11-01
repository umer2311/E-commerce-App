const mongoose = require('mongoose');
const mongoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        match: /^[a-zA-Z]+$/,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z]+$/.test(value);
            },
            message: 'Name should contain alphabets only.'
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/.test(value);
            },
            message: 'Invalid email format. Example: abc123!@gmail.com'
        }
    },password: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
            },
            message: 'Password should contain at least 1 lowercase, 1 uppercase, 1 digit, 1 special character, and be at least 8 characters long.'
        }
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^03\d{2}-\d{7}$/,
        validate: {
            validator: function (value) {
                return /^03\d{2}-\d{7}$/.test(value);
            },
            message: 'Invalid phone number format. Example: 0313-1234567'
        }
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: 'user'
    },
    resetPasswordOtp: {
        type: String,
        default: null,
    },
    resetPasswordExpires: {
        type: Date,
        default: null,
    }
});

const Mongo = mongoose.model("User", mongoSchema)
module.exports = Mongo;