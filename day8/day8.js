let express = require("express")
let app = express()


app.set('view engine' , 'ejs')
app.set('views' , 'ejs')
app.listen(3000)

app.get("/" , (req, res) => {
    res.render("home")
})
app.get("/about" , (req , res) => {
    res.render("about-me")
})
app.use((req , res) => {
    res.render("404")
})