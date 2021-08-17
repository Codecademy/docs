---
Title: "What is Node.js?"
Subjects:
  - "Web Development"
  - "Computer Science"
Tags:
  - "Node" 
  - "Developer Tools"
  - "Dependency"
CatalogContent:
  - "introduction-to-javascript"
  - "paths/front-end-engineer-career-path"
---

Node.js is a JavaScript runtime for building server-side or desktop applications. It is free and open-sourced.

## JavaScript and Node.js

JavaScript has existed since 1995 and has since taken over as the dominant language for web development. For much of its life, JavaScript was used mainly for client-side scripting inside `<script>` tags executing in web browsers. This limitation meant that developers were often working in many different languages and frameworks between the front-end (client-side) and backend (server-side) aspects of a web application.

Although there were other projects to bring JavaScript to server-side applications, the functionality took off with the launch of Node.js in 2009. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.

Node.js is written in C, C++, and JavaScript, and it is built on the open-source [V8](https://v8.dev/) JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.

## Node-Specific Functionality

### Globals

Node provides access to several important global objects for use with Node program files. When writing a file that will run in a Node environment, these variables will be accessible in the global scope of your file.

- `module` is an object referring to the functionality that will be exported from a file. In Node, each file is treated as a module.
- `require()` is a function used to import modules from other files or Node packages.
- `process` is an object referencing to the actual computer <a href="https://en.wikipedia.org/wiki/Process_(computing)">process</a> running a Node program and allows for access to command-line arguments and much more.

### Modules

Node has a many built-in modules to aid in interactions with the command line, the computer file system, and the Internet. These include:

* <a href="https://nodejs.org/dist/latest/docs/api/http.html">HTTP</a> and <a href="https://nodejs.org/dist/latest/docs/api/https.html" >HTTPS</a> for creating web servers.
* <a href="https://nodejs.org/dist/latest/docs/api/fs.html">File System</a>, <a href="https://nodejs.org/dist/latest/docs/api/os.html" >OS</a>, and <a href="https://nodejs.org/dist/latest/docs/api/path.html" >Path</a> for interacting with the file system, operating system, and file/directory paths.

You can view the full <a href="https://nodejs.org/dist/latest/docs/api/" target="_blank">docs</a> to see more of Node's built-in features.

## Why Node?

Per the <a href="https://nodejs.org/">Node.js homepage</a>, Node "uses an event-driven, non-blocking I/O model." In practice, this means that Node is built well to handle asynchronous JavaScript code to perform many asynchronous activities such as reading and writing to the file system, handling connections to database servers, or handling requests as a web server.

To handle asynchronous code, Node uses a callback-based system. Node functions and methods that will implement some asynchronous activity take a callback function. This callback will be called whenever the asynchronous operation has resolved. By convention, the first argument of this callback is an error placeholder. If an error occurred in the asynchronous operation occurred (trying to read a non-existent file, for example), the error argument will be an Error object, but it will be `null` if no error occurs.

```js
const fs = require('fs');

fs.readFile('./script.js', function(error, data) {
  // Error is null if no error occurred, but an Error object if it did
  if (error) {
   throw error;
  }
  // The file data will be passed into the callback if no error was thrown
  console.log(data);
});
```

In this example, we are using Node's built-in `fs` module to read a *script.js* file. The callback function is called after the file-reading operation is completed. If an error occurred, it will be passed in as `error` and thrown. If it doesn’t exist, the retrieved data from the file reading operation is logged to the console.

## How to use Node

This video will show you how to download and install Node.

<video width="100%" height="100%" controls onloadstart="this.volume=0.15">
   <source src="https://content.codecademy.com/articles/nodejs/nodejs.mp4" type="video/mp4">
 The markdown processor does not support the video tag.
</video>

To begin, <a href="https://nodejs.org/en/download/" target="_blank">download</a> and install Node.js for your operating system.

To run JS files in Node, the `node` command followed by a file path will execute the program file.

For example, if we have the following saved in a file **script.js**:

```js
console.log('I am a Node program');
```

Running the terminal command `node script.js` in the same folder as *script.js* will start Node, print `I am a Node program` to the terminal window, and exit, as the script file has finished execution.

## Node as a REPL

Node can also be used in a terminal window as a Read-Evaluate-Print-Loop, or REPL. This functionality allows you execute JavaScript commands from the command line. 

With Node installed, you can launch the REPL by running the `node` command in a terminal and pressing Enter/Return. You are now in an interactive JavaScript environment and can run any valid JavaScript code such as `4 + 5`. After executing a command, Node will always print the result of that evaluation.
 
```shell
$ node
> 4 + 5
9
> function nodeIsGreat() {
... console.log('Node is great!');
... }
undefined
> nodeIsGreat()
Node is great!
undefined
> .exit
$ 
```
 
In this example, the user launches node on line one with the `node` terminal command. On line 2 the user types `4 + 5` and evaluates with the return key. `9` prints to the output terminal.

On line 4, the user opens a function declaration of `nodeIsGreat`. Because this function declaration takes multiple lines, Node REPL will print `...` at the beginning of a line to show that it is still reading the user's input statement and has not evaluated yet. After the function declaration is closed on line 6, `undefined` prints to the output terminal, as the function declaration itself does not evaluate to any value. When the function is invoked on line 8, `Node is great!` logs to the console, and `undefined` logs after, because `nodeIsGreat()` returns `undefined`.

To exit the Node REPL, use the `.exit` command at any point and return to the system shell. Pressing `ctrl + c` twice will also exit. 

### Loading Existing Files

Node REPL can also load existing JS files. If we had the following code saved into **script.js**:

```js
var a = 'Node REPL is fun!';
```

We can use `.load` to load it into the REPL. `.load` takes a path argument, so to load **script.js**  we would use `.load ./script.js`.

```shell
$ node
> .load ./script.js
var a = 'Node REPL is fun!';

> a
'Node REPL is fun!'
```

After the script file is loaded, the variables are accessible in the REPL, so when we evaluate the `a` variable, it's value has been set by loading **script.js**, and 'Node REPL is fun!' prints to the console.

Try it out yourself by running `node` in a terminal or check out the <a href="https://nodejs.org/api/repl.html" >REPL docs</a> for more functionality.

## Package Management

Node packages are a convenient way to share modules between Node developers. The service <a href="https://www.npmjs.com/" >npm</a> is the default package manager for Node, and it ships with an installation of Node.

npm allows access to the hundreds of thousands of open-source packages available.

In addition to npm, <a href="https://yarnpkg.com/en/" >yarn</a> is gaining popularity as another JS package manager.

For more information and to see npm in action take our <a href="https://www.codecademy.com/courses/learn-javascript-transpilation/lessons/browser-compatibility-and-transpilation/exercises/browser-compatibility-introduction">Browser Compatibility and Transpilation</a> course.

## Node Versions

Node's major releases aim to support the latest JavaScript features including ES6/ES2015 and beyond without transpilation.

To see a list of supported JavaScript features in different versions, visit <a href="http://node.green/">node.green</a>

### Version Management

As with any major release of software, top-level Node releases (8.x, 7x, etc.) sometimes introduce breaking changes in applications built in older versions of the environment. A version manager can be used to switch between multiple versions of Node on a single computer.

There are two version managers that provide this functionality: <a href="https://github.com/creationix/nvm" >nvm (Node Version Manager)</a> and <a href="https://github.com/tj/n" >n</a>. N can be installed very easily as an npm package!
