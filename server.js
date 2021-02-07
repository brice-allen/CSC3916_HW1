var http = require("http");
var server = http.createServer();
server.on("request", (request, response) => {
    var body = [];
    request.on("data", chunk => {
        body.push(chunk);
    });
    request
        .on("end", () => {
            body = body.concat.toString();
            // 'end' even is raised once per request.
        })
        .on("error", () => {
            response.statusCode = 400;
            response.end();
        });
    response.on("error", err => {
        console.err(err);
    });
    server.listen(8008, () => {
        console.log("Server listening at 8008");
    })

});