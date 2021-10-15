const http = require('http');
const port = 3000

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Welcome to our home page")
    }
    else if(req.url === '/about'){
        res.end("Here is our short history")
    } else {

        res.end(`
        <h1>Oops!</h1>

        <p>We can't seem to find the page your are lookin for</p>
        <a href="/">Home</a>
        `)
    }
});

server.listen(port, () => {
    console.log("Server is running")
});