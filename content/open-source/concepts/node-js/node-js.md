---
Title: 'Node.js'
Description: 'Node.js is a free, open-source JavaScript runtime environment for back-end development and building server-side or desktop applications.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Developer Tools'
  - 'Dependency'
  - 'Node'
  - 'Open Source'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

<link rel="canonical" href="https://www.codecademy.com/article/what-is-node" />

[**Node.js**](https://nodejs.org/en) (or "Node") is a free, open-source [JavaScript (JS)](https://www.codecademy.com/resources/docs/javascript) runtime environment for [back-end](https://www.codecademy.com/resources/docs/general/back-end) development and building [server-side](https://www.codecademy.com/resources/docs/general/server-side-rendering) or desktop applications.

Written in [C](https://www.codecademy.com/resources/docs/c), [C++](https://www.codecademy.com/resources/docs/cpp), and JS, Node.js is built on the open-source [V8](https://v8.dev/) JS engine, used to power browsers such as Google Chrome. As V8 supports new features in JS, they are incorporated into Node.

## JS and Node.js

JS has existed since 1995 and has since taken over as the dominant language for web development. For much of its life, JS was used mainly for client-side scripting inside [`<script>`](https://www.codecademy.com/resources/docs/html/elements/script) elements executing in web browsers. This limitation meant that developers were often working in many different languages and frameworks between the [front-end](https://www.codecademy.com/resources/docs/general/front-end) (client-side) and back-end (server-side) aspects of a web application.

Although there were other projects to bring JS to server-side applications, the functionality took off with the launch of Node.js in 2009. Node allows developers to write server-side JS code that can directly access a computer's operating system and processes such as input/output and file storage.

## Node-Specific Functionality

### Globals

Node provides access to several important global objects for use with Node program files. When writing a file that will run in a Node environment, these variables will be accessible in the global scope of the file.

- `module` is an object referring to the functionality that will be exported from a file. In Node, each file is treated as a module.
- `require()` is a function used to import modules from other files or Node packages.
- `process` is an object referencing to the actual computer process running a Node program and allows for access to command-line arguments and much more.

### Modules

Node has many built-in modules to aid in interactions with the [terminal](https://www.codecademy.com/resources/docs/command-line/terminal), the computer file system, and the Internet. These include:

- [HTTP](https://nodejs.org/dist/latest/docs/api/http.html) and [HTTPS](https://nodejs.org/dist/latest/docs/api/https.html) for creating web servers.
- [File System](https://nodejs.org/dist/latest/docs/api/fs.html), [OS](https://nodejs.org/dist/latest/docs/api/os.html), and [Path](https://nodejs.org/dist/latest/docs/api/path.html) for interacting with the file system, operating system, and [file/directory paths](https://www.codecademy.com/resources/docs/general/file-paths).

More information about Node's built-in features can be found [here](https://nodejs.org/dist/latest/docs/api/)

## Why Node?

Per its official home page, Node "uses an event-driven, non-blocking I/O model." In practice, this means that Node is built well to handle asynchronous JS code to perform many asynchronous activities such as reading and writing to the file system, handling connections to database servers, or handling requests as a web server.

To handle asynchronous code, Node uses a callback-based system. Node functions and methods that will implement some asynchronous activity take a [callback function](https://www.codecademy.com/resources/docs/javascript/callbacks). This function will be called whenever the asynchronous operation has resolved. By convention, the first argument of this callback is an error placeholder. If an error in the asynchronous operation occurred (trying to read a non-existent file, for example), the error argument will be an `Error` object, that will be `null` if no error occurs.

```js
const fs = require('fs');

fs.readFile('./script.js', function (error, data) {
  // Error is null if no error occurred, but an Error object if it did
  if (error) {
    throw error;
  }
  // The file data will be passed into the callback if no error was thrown
  console.log(data);
});
```

In this example, we are using Node's built-in `fs` module to read a `script.js` file. The callback function is called after the file-reading operation is completed. If an error occurred, it will be passed in as `error` and thrown. If it doesn’t exist, the retrieved data from the file reading operation is logged to the console.

## How to Use Node

This video shows how to download and install Node.

<video width="100%" height="100%" controls onloadstart="this.volume=0.15">
   <source src="https://content.codecademy.com/articles/nodejs/nodejs.mp4" type="video/mp4">
 The markdown processor does not support the video tag.
</video>

1. [Download and install](https://nodejs.org/en/download/) Node.js for a specific operating system.
2. To run JS files in Node, the `node` command followed by a [file path](https://www.codecademy.com/resources/docs/general/file-paths) will execute the program file.

For example, if we have the following saved in a `script.js` file:

```js
console.log('I am a Node program');
```

We can run the terminal command in the same folder as `script.js`:

```shell
node script.js
```

This will start Node, print `I am a Node program` to the terminal window, and then exit, as the script file has finished execution.

## Node as a REPL

Node can also be used in a terminal as a read-evaluate-print-loop (REPL). This functionality allows JS commands to be executed from the terminal.

With Node installed, the REPL can be launched with the `node` command in a terminal and pressing <kbd>Enter</kbd>. This launches the interactive JS environment where any valid JS code (e.g., `4 + 5`) can be run. After executing a command, Node will always print the result of that evaluation:

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

In this example, the user launches node on line one with the `node` terminal command.

On line 2, the user types `4 + 5` and evaluates with the <kbd>Enter</kbd> key. `9` prints to the output terminal.

On line 4, the user opens a function declaration of `nodeIsGreat()`. Because this function declaration takes multiple lines, Node REPL will print `...` at the beginning of a line to show that it is still reading the user's input statement and has not evaluated yet. After the function declaration is closed on line 6, `undefined` prints to the output terminal, as the function declaration itself does not evaluate to any value.

When the function is invoked on line 8, `Node is great!` logs to the console, and `undefined` logs after, because `nodeIsGreat()` returns `undefined`.

To exit the Node REPL, use the `.exit` command at any point and return to the system shell. Pressing <kbd>Ctrl</kbd> + <kbd>C</kbd> twice will also exit.

### Loading Existing Files

Node REPL can also load existing JS files. If we had the following code saved into `script.js`:

```js
var a = 'Node REPL is fun!';
```

We can use `.load` to load it into the REPL. `.load` takes a path argument, so to load `script.js` we would use `.load ./script.js`.

```shell
$ node
> .load ./script.js
var a = 'Node REPL is fun!';

> a
'Node REPL is fun!'
```

After the script file is loaded, the variables are accessible in the REPL, so when we evaluate the `a` variable, it's value has been set by loading `script.js`, and 'Node REPL is fun!' prints to the console.

This can be tested by running `node` in a terminal or check out the <a href="https://nodejs.org/api/repl.html" >REPL docs</a> for more information on commands and functionality.

## Package Management

Node packages are a convenient way to share modules between Node developers. The service [Node Package Manager (npm)](https://www.codecademy.com/resources/docs/javascript/npm) is the default package manager for Node; it becomes available after Node is installed.

npm allows access to the many open-source packages available.

In addition to npm, [Yarn](https://yarnpkg.com/en/) is gaining popularity as another JS package manager.

## Node Versions

Node's major releases aim to support the latest JS features including ES2015 (ES6) and beyond without transpiling to an earlier JS version at runtime. A resource called [node.green](http://node.green/) provides a list of supported JS features in different versions of Node.

### Version Management

As with any major release of software, top-level Node releases (8.x, 7.x, etc.) sometimes introduce error-causing changes in applications built using older versions on an environment. A version manager can be used to switch between multiple versions of Node on a single computer.

There are two version managers that provide this functionality: [nvm (Node Version Manager)](https://github.com/creationix/nvm) and [n](https://github.com/tj/n) (which can be installed as an npm package).
