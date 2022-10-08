---
Title: 'NPM'
Description: 'Node Package Manager (NPM) is a large collection of JavaScript packages.'
Subjects:
  - 'Bash/Shell'
  - 'Developer Tools'
  - 'Web Development'
Tags:
  - 'Command Line'
  - 'Node'
  - 'NPM'
  - 'Packages'
CatalogContent:
  - 'learn-node-js'
  - 'paths/full-stack-engineer-career-path'
---

**Node Package Manager (NPM)** is a large collection of JavaScript packages. This makes adding complexity and funcionality to JavaScript project seamless. NPM is also the official package manager of Node.js. Therefore, if Node.js was previously downloaded, NPM is already installed!

## Packages

Packages are tools composed of files and folders of JavaScript code. They provide one or more operations that can be installed, imported and used in a separate project. Thanks to NPM, the installation process for packages is uniform.

## The NPM Registry

NPM comes as two primary tools:

- A command-line tool with abilities that include installing and uninstalling packages.
- An online registry of all packages registered with NPM.

On [the NPM registry](https://www.npmjs.com/), all public packages can be searched and reviewed before installing. Most packages come with a **README.md** file with instructions for installation and usage.

## Common Commands

As a command-line tool, NPM comes with a litany of commands for working with packages. One of the most common NPM commands is:

```bash
npm install <package-name-here>
```

This is used to install packages from the NPM registry and add them to a JavaScript project. Running the command as `npm install` with no specific package will (re)install all the packages for the project.

To learn more, run the following to get a brief overview of common commands:

```bash
npm --help
```

`npm -h` works, too.

Alternatively, run the following to display a (long) list of all NPM commands paired with brief descriptions:

```bash
npm -l
```
