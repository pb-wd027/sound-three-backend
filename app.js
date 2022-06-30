const express = require("express");
const data = require("./data.json");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors())
const PORT = process.env.PORT || 8000;

//GET -> "welcome msg"
app.get("/", (req, res) => 
    res.send(`<h1>Welcome to SoundThree</h1>`)
);

//GET /data -> json database
app.get("/data", (req, res) =>
    res.send(data)
);

//GET /data/:id
app.get("/data/:id", (req, res) => {
    res.send(data.find(e => e.id == req.params.id)) 

});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("<h1>sorry we couldn't find what you're looking for</h1>");
});

app.listen(PORT, () => console.log(`started listening on port ${PORT}`));
