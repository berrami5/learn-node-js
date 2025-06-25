let h1 = document.createElement("h1")
let express = require("express")
let app = express()

let router = express.Router()

app.use(router)
app.listen(3000)