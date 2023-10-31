const express = require('express')
const mongoose = require('mongoose')
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


app.listen(3000, () => {
    console.log(`Server for sherloc is runing on 3000!!`);
})

