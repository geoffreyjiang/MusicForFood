const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // The email cannot be null, and must be a proper email before creation
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Enter a valid email"],
    },
    password: { 
        type: String, 
        required: true, 
        minLength: 5 
    },

    displayName: { 
        type: String, 
        required: true 
    },

    zipCode: {
        type: Number, 
        required: true 
    },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;