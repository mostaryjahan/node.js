const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    // res.end("Welcome to todo app server")
    if(req.url==='/todos' & req.method==='GET'){
        res.end("all todos");
    }else if(req.url === "/todos/create-todo" && req.method === "POST"){
        res.end("ToDo Created")
    }else{
        res.end("route not found")
    }
})


server.listen(5000, "127.0.0.1", () => {
console.log("server is running on port 5000");
})