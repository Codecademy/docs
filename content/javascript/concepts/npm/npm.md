---
Title: 'npm'
Description: 'Node Package Manager (npm) is an extensive collection of JavaScript packages to enhance projects and add complex functionality with ease.'
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

**Node Package Manager (npm)** is an extensive collection of JavaScript packages. This makes adding complexity and functionality to JavaScript projects seamless. npm is also the official package manager of [Node.js](https://www.codecademy.com/resources/docs/open-source/node-js). Therefore, if Node.js was previously downloaded, npm is already installed!

## Packages

Packages are tools composed of files and folders of JavaScript code. They provide one or more operations that can be installed, imported, and used in a separate project. Thanks to npm, the installation process for packages is uniform.

## The npm Registry

npm comes as two primary tools:

- A command-line tool with abilities that include installing and uninstalling packages.
- An online registry of all packages registered with npm.

On [the npm registry](https://www.npmjs.com/), all public packages can be searched and reviewed before installation. Most packages come with a `README.md` file with instructions for installation and usage.

## Common Commands

As a command-line tool, npm comes with a litany of commands for working with packages. One of the most common npm commands is:

```pseudo
npm install <package-name-here>
```

> **Note:** `npm i <package-name-here>` works, too.

This is used to install packages from the npm registry and add them to a JavaScript project. Running the command as `npm install` with no specific package will (re)install all the packages for the project.

The following command can be run to get a brief overview of common npm commands:

```shell
npm --help
```

> **Note:** `npm -h` works, too.

Alternatively, a (long) list of all npm commands, paired with brief descriptions, can be viewed with the `-l` flag:

```shell
npm -l
```

## Global Packages

npm also features the ability to install packages globally, so packages can be used as command-line tools anywhere. This is done with the `-g` flag:

```pseudo
npm install -g <package-name-here>
```

## npx

Additionally, the `npx` executes packages anywhere without having to handle installation. It uses the following syntax:

```pseudo
npx [options] <command>[@version] [command-arg]
```

For example, the following command would be used to execute the `codecademy` package with the arguments: `"Hello world!"`:

```shell
npx codecademy "Hello world!"
```
