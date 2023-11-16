
const User = require('../models/user.model.js')
const errorHandler = require('../utils/error.js')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    console.log(req.body)
    const hashedPassword = bcryptjs.hashSync(password, 10);
    try {
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json('User created successfully!');
    } catch (error) {
        next(error);
    }
}


const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found!'))

        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(401, 'Ah but you paaaaaa!!!'))

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)

        // Log the token to the console
        console.log('JWT Token:', token);

        const { password: pass, ...rest } = validUser._doc;

        res
            .cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);
    } catch (error) {
        next(error);
    }
};

module.exports = { signin, signup }
