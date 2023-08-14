const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/", (request, response) => {
	response.json({
		message: "Hello, world!",
	})
})

module.exports = app
