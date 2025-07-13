let http = require("http")
let fs = require("fs")

let server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let path = "./test/"
    switch (req.url) {
        case "/home":
            path += "Untitled-1.html"
            break
        case "/profile":
            path += "Untitled-2.html"
            break
        case "/info": 
            res.setHeader("Location" , "/profile")
            res.statusCode = 301
            res.end()
            break
        default:
            path += "404.html"
    }
    console.log(fs.existsSync(path)); // true
    
    fs.readFile(path , (err , data) => {
        res.write(data)
        res.end()
    })
    
}) 

server.listen(3000);