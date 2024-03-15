const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("HelloWorld!");
});

app.listen(PORT, () => {
    console.log(`Server is up running on port ${PORT}`);
});