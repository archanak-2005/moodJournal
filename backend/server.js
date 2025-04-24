const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/mood-journal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Mood Model
const Mood = require("./models/mood");

// API Endpoints
app.get("/moods", async (req, res) => {
    const moods = await Mood.find();
    res.json(moods);
});

app.post("/moods", async (req, res) => {
    const mood = new Mood(req.body);
    await mood.save();
    res.json(mood);
});

app.delete("/moods/:id", async (req, res) => {
    await Mood.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
