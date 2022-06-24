const express = require("express");
const app = express();

app.get("/", (req, res) => res.send(`
<h1>Adopt a Pet!</h1>
<p>text</p>
`)
);

app.listen(3000, () => console.log("started listening on port 3000"));
