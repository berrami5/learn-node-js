let express = require("express")
let app = express()
let message = require("./post").getPost

let router1 = express.Router()
let router2 = express.Router()

router1.get("/" , (req  ,res , next) => {
    res.write("first")
    next()
})
router2.get("/" , (req , res) => {
    let contain = message()
    res.write(`\n ${contain}`)
    res.end()
})

app.use("/" , router1 , router2)

app.listen(3000)