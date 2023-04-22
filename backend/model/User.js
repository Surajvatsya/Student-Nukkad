const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        unique: false,
        required: true,
    },
    institute_name: {
        type: String,
        unique: false,
        required: true,
    },
    institute_type: {
        type: String,
        unique: false,
        required: true,
    },

    class: {
        type: String,
        unique: false,
        required: true,
    },
    email: {
        type: String,
        unique: false,
        required: true,
    },
    password: {
        type: String,
        unique: false,
        required: true,
    },
    dob: {
        type: String,
        unique: false,
        required: true,
    },
    profession: {
        type: String,
        unique: false,
        required: true,
    },
    address: {
        type: String,
        unique: false,
        required: true,
    },
    future_goals: {
        type: String,
        unique: false,
        required: true,
    },
    hobby: {
        type: String,
        unique: false,
        required: true,
    }
})

const User = Mongoose.model("user", UserSchema)
module.exports = User
