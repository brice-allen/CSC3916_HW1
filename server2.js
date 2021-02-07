var http = require("http");
var server = http.createServer();
server.on("request", (request, response) => {
    var body =[];
    request.on("data", chunk => {
        body.push(chunk);
    });
    request.on("end", () => {
        //'end' event is raised once per request.
    });
    response.write("Hello World!");
    response.end();
});