import express from "express"
const PORT = process.env.PORT || 5500

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("API is running")
})

app.get("/health", (req, res) => {
    res.json({status: "OK"})
})


app.listen(port, () => {
    console.log(`App is running on ${port}`)
})

