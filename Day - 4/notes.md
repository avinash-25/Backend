## Table Contents

1. Express.js Framework
2. Introduction to Express.js
3. Setting up a basic Express application
4. Routing
5. Middleware
6. request and response handling
7. Error handling

**1. Express.js Framework**

- Express js is a npm package.
- Express js is a framework
  - Framework :
- Express js manages everything from the request and giving the response.

- Express.js is an npm package that gives you a framework to build web servers.
- A framework means it already provides the structure and tools you need, so you don’t have to build everything from zero.

- Express handles the full flow of a request.
  When someone sends a request to your server, Express receives it, processes it through routes and middleware, and then sends back a response.

- It makes server work easy because you only focus on your logic, and Express takes care of the rest.

## Middleware

- Middleware applies before routes.
- Any thing we want to perform before routes are to be done using middleware.
- jab bhi server request accept krta hai waha se tab rout tk pahuchne se pahle bich me hi rok ke agr kuch perform krna chhate ho to ye element middleware keh;lata hai.
- Whenever the server accepts a request, and you want to stop it in the middle to do something before it reaches the route, that part is called middleware.
