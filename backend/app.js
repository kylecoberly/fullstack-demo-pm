const express = require("express")
const cors = require("cors")
const dogs = require("./dogs")

const app = express()
app.use(cors())

app.get("/dogs", (request, response) => {
	response.json({
		dogs,
	})
})

module.exports = app
