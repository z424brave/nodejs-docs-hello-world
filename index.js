const http = require('http');
const os= require('os');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Damian");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
console.log(`Node ${process.version} / ${os.platform} / ${os.type}/ ${os.version} / ${os.release}`);
