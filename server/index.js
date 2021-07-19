const express = require("express")
const mongoose = require("mongoose")

const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_IP,
    MONGO_PORT,
} = require("./config/config")
const taskRouter = require("./routes/taskRoutes")

const app = express()

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

const connectWithRetry = () => {
    mongoose
        .connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => console.log("Successfully connected to DB"))
        .catch((e) => {
            console.log(e)
            setTimeout(connectWithRetry, 5000)
        })
}

connectWithRetry()

app.use(express.json())

const port = process.env.PORT || 5000

app.get("/api/v1/", (req, res) => {
    res.send("Its Alive!!!")
})

app.use("/api/v1/tasks", taskRouter)

app.listen(port, () => {
    console.log(`Server started on ${port}`)
})
