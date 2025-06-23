const express = require("express");
const morgan = require("morgan");

const app = express();
app.use("/" , (req , res , next) => {
    console.log("middleWare: ");
    next();
})
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello!");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
