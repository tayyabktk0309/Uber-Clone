const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            minlength: [3, 'First name must be at least 3 characters long']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
            required: false
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 6 characters long']
    },
    socketId:{
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
   vehicle:{
    color:{
        type: String,
        required: true,
        minlength: [3, 'Color must be at least 3 characters long']
    },
    plate:{
        type: String,
        required: true,
        minlength: [3, 'Plate must be at least 3 characters long']
    },
    capacity:{
        type: Number,
        required: true,
        min: [1, 'Capacity must be at least 1']
   } ,
    vehicletype:{
         type: String,
         required: true,
         enum: ['car', 'motorcycle', 'bicycle']
    }
    },
    location:{
        lat:{
            type: Number,
        },
        lng:{
            type: Number,
        }

    }
});


captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET,{expiresIn: '24h'});
    return token;
}

captainSchema.methods.camparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const Captain = mongoose.model('captain', captainSchema);

module.exports = Captain;