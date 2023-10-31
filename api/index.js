const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRouter = require('./routes/user.route.js')
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("SherLoc database connected");
}).catch((err) => {
    console.log(err);
})

const app = express()

app.use('/api/user', userRouter)

app.listen(3000, () => {
    console.log(`Server for sherloc is runing on 3000!!`);
})

