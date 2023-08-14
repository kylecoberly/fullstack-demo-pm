const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dogs = require("./dogs")

const Dog = mongoose.model("Dog", {
	name: String,
	imageUrl: String,
});

const app = express()
app.use(cors())

mongoose.connect(process.env.MONGO_URL || "mongodb://127.0.0.1/pets")

app.get("/dogs", async (request, response) => {
	const dogs = await Dog.find({})

	response.json({
		dogs,
	})
})

module.exports = app
