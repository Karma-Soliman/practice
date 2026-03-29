import express from "express"
import config from "./config.js"

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("API is running")
})

app.get("/health", (req, res) => {
    res.json({status: "OK"})
})


app.listen(config.PORT, () => {
    console.log(`App is running on ${config.PORT}`)
})

