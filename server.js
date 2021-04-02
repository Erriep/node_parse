const http = require('http');
const port = 8000;
const url = require('url');

const requestHandler = (request, response) => {
  const parsedUrl = url.parse(request.url, true);
  if ((parsedUrl.query.name === undefined ) || (parsedUrl.query.city === undefined )){
  response.end('Please provide name and city parameters');
} else {
  response.end(`Hello ${parsedUrl.query.name} from ${parsedUrl.query.city}`);
}};

const server = http.createServer(requestHandler);
server.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`server is listening on ${port}`);
  }
});