// 1st day
let r = require("./Untitled-1")
let ex = require("express")
let app = ex()
app.get("/" , (req , res) => {
    res.send(`${r.v} \n Hello word`);
})

app.listen(3000)

// go to http://localhost:3000/