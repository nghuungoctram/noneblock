const index = require('./index');
const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer(index);
server.listen(port)
console.log(`Express running → PORT ${server.address().port}`);
