let express = require("express")
let app = express()

app.listen(3000)

app.get("/" , (req , res) => {
    res.sendFile("./test/404.html" , {root: __dirname})
})
app.get("/about" , (req , res) => {
    res.sendFile("./test/Untitled-1.html" , {root : __dirname})
})