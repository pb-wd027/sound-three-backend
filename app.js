import express  from "express";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.sendFile("data.json",{
    root: process.cwd(),
})
);

app.listen(PORT, () => console.log(`started listening on port ${PORT}`));
