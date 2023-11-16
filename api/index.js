const express = require('express')
const mongoose = require('mongoose')
//const errorHandler = require('./utils/error')
const dotenv = require('dotenv')
const userRouter = require('./routes/user.route.js')
const authRouter = require('./routes/auth.route.js')
dotenv.config()


const app = express()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("SherLoc database connected");
}).catch((err) => {
    console.log(err);
})



app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

app.listen(3000, () => {
    console.log(`Server for sherloc is runing on 3000!!`);
})

