const http = require("http");
const { CLIENT_RENEG_WINDOW } = require("tls");

http
  .createServer((request, response) => {
    let body = [];
    request
      .on("error", (err) => {
        console.log(err);
      })
      .on("data", (chunk) => {
        body.push(chunk.toString());
        console.log(body);
      })
      .on("end", () => {
        body = body.join('');
        console.log('body:',body);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(" Hello World\n");
        console.log('res-',response);
      });
  })
  .listen(8088);

console.log("server started");
