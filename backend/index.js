const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const router = require('./routes/chatbot.route')
const cors = require('cors')

const app = express()

dotenv.config()

const PORT = process.env.PORT

// middleware
app.use(express.json())
app.use(cors())

// db connect
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((err) => {
        console.log(err)
    })

// routes
app.use("/bot/v1", router)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
});
