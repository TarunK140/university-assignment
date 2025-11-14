const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Load JSON helper
function loadJSON(filename) {
    return JSON.parse(fs.readFileSync(path.join(__dirname, "data", filename), "utf8"));
}

// ✔ Dynamic University Endpoint
app.get("/api/university/:unid", (req, res) => {
    try {
        const unid = req.params.unid; // uni1 or uni2
        const fileName = `${unid}.json`;
        const data = loadJSON(fileName);
        res.json(data);
    } catch (err) {
        res.status(404).json({ error: "University not found" });
    }
});

// ✔ Dynamic Fees Endpoint
app.get("/api/university/:unid/fees", (req, res) => {
    try {
        const unid = req.params.unid;
        const fileName = `${unid}.json`;
        const data = loadJSON(fileName);
        res.json(data.courses);
    } catch (err) {
        res.status(404).json({ error: "Fees data not found" });
    }
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
