## Express
- Express is a third Party Module that used to create real time web applications as per the industry standards.
- Express helps in creating robust applications based on modren UI patterns like MVC, MVP and use to make Modular app development on Web. 
- We need to use node package manager(NPM) to install Express locally and then  use the APIs.

## Steps for installing Express locally
- Create a new folder for your application where the code shall reside
- Make it a Nodejs Application by creating a file called package.json
- Package.json shall contain the Necessity of your Application like the default main file, dependences if any etc. A folder that has package.json shall automatically make it a Nodejs Application. 
- Use the command to npm init -y to generate a default package.json. 
- use the npm Cmdline utility to install express. npm shall install all the dependencies and relavent files of express into a folder called node_modules. A mention of the dependency for the current project shall also be added.
- Start using the Express like built in modules using require Statement.  

## Features of Express
1. Express provides a faster way of creating HTTP/Web Applications in real time scenarios.
2. Integrates with common features of HTTP like body parsing, file handling and HTTP Methods. 
3. Uses a concept called middleware to inject additional logics/functions in the Request pipeline of the Application. 
4. U can add middlewares like Authentication, Authorizations, JWTs, Error handling and many more for all the requests U handle in the Express app.
5. Code is more organized, simple and easy to maintain.  
6. Helps to integate with various UI Design patterns like MVC and MVP. 

## Important APIs
- U should create an instance of Express before using it. This creates the Express app.
- app has methods like get, put, post, delete for REST API Operations. 
- use method is used to inject new middlewares into the pipelines.
- listen method is used to start the server. similar to http's createServer and listen methods. 

