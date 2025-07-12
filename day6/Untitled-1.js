let fs = require("fs")
let http = require("http")


let server = http.createServer((req , res) => {
    res.setHeader('Content-Type', 'text/html');
    let path = "./test/"
    console.log(req.url);
    
    switch (req.url) {
        case "/home": 
            path += "Untitled-1.html"
            break
        case "/path": 
            path += "Untitled-2.html"
            break
        case "/pathProfile" : 
            res.setHeader("Location", "/path");
            res.statusCode = 301
            res.end()
            break
        default: 
            path += "404.html"
            res.statusCode = 404;
            break
    }
    fs.readFile(path , (err , data) => {
        res.write(data)
        res.end()
})
})
server.listen(3000 , "localhost")