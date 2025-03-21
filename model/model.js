const { default: mongoose, Type, Schema } = require('mongoose');
const { userInfo } = require('os');

const schema = new Schema({
    name: String,
    email: String,
    password: String,
    acceptPrivacyPolicy: Number, // 0=true , 1=false
    role: {
        type: String,
        enum: [ "admin", "user" ],
        default: "admin"
    }
}, {
    timestamps: true
})

const Model = mongoose.model('Model', schema);
module.exports = Model;