let http = require("http")
let fs = require("fs")

let server = http.createServer((req , res) => {
    console.log(req.url , req.method);
    res.setHeader('Contain-Type' , 'text/html');
    let path = "./test/"
    switch (req.url) {
        case "/home": 
            path += "Untitled-1.html"
            break
        case "/path": 
            path += "Untitled-2.html"
            break
        default: 
            path += "404.html"
    }
    fs.readFile(path , (err , data) => {
        console.log(fs.existsSync(path));
        
        if (err) console.log("Error");
        res.write(data)
        res.end()
    })
    
})
server.listen(3000 , 'localhost')