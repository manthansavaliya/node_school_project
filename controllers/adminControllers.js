const Model = require('../model/model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const signUp = async (req, res) => {
    try {
        // console.log("start")
        const userData = req.body;
        const { name, email, password, acceptPrivacyPolicy, role } = userData;
        const newPassword = await bcrypt.hash(password, 10);


        let user = new Model({
            name,
            email,
            password: newPassword,
            acceptPrivacyPolicy,
            role,
        });

        await user.save();

        return res.status(200).json({ message: "Admin Created Successfully." });
    } catch (error) {
        return res.status(404).json(error);
    }

}

const signIn = async (req, res) => {
    try {
        const userdata = req.body;
        const { email, password } = userdata;

        const newUser = await Model.findOne({ email });
        if (!newUser) {
            res.send("Admin Does Not Exist In List.");
        }

        const passMatch = await bcrypt.compare(password, newUser.password);
        if (!passMatch) {
            res.send("Email Or Password Is Invalid.");
        }

        const token = await jwt.sign({ _id: newUser.id }, "token@");


        return res.status(200).json({ message: "Admin Logged In Successfully.", token });
    } catch (error) {
        return res.status(404).json(error);
    }

}

module.exports = { signUp, signIn };