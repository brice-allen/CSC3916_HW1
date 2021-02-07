var http = require("http");
var server = http.createServer();
server.on("requst", (request, response) => {
    var body = [];
    request.on("data", chunk => {
        body.push(chunk);
    });
    request.on("end", () => {
        body = body.concat.toString();
        // 'end' even is raised once per request.
    });
});