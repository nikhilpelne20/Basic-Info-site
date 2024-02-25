const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'content-type': 'text/html'})

    let path = "./public/"
    switch(req.url){
        case "/":
            path+='index.html'
            break;
        case "/about":
            path+='about.html'
            break;
        case "/contact":
            path+='contact-me.html'
            break;
        default:
            path+='404.html'
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log("Error occurred:", err);
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 - Not Found');
        }
        else{
            res.end(data);
        }
    })

})

server.listen(3000, 'localhost', ()=>{
    console.log("server is now listening to port 3000")
})