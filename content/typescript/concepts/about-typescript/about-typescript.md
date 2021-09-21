---
Title: 'About TypeScript'
Description: 'TypeScript is a typed language that checks to see if JavaScript variables are of the correct type of data before the code is run.'
Subjects:
  - 'Web Development'
Tags:
  - 'Documentation'
CatalogContent:
  - 'learn-typescript'
  - 'paths/full-stack-engineer-career-path'
---

[TypeScript](https://www.typescriptlang.org) is a typed language that checks to see if JavaScript variables are of the correct data type before the code is run. It achieves this by using four tools that build on each other in the following order:

1. A language specification that describes JavaScript syntax as well as new TypeScript-specific syntax
2. A compiler program that takes in TypeScript (and therefore also JavaScript) syntax and converts it to the equivalent JavaScript
3. A type checker program that reads in TypeScript syntax, understands the types of values every entity is meant to be and notices any "type errors" (mismatches)
4. A language server that editors such as VS Code can run to provide build-time hints and refactoring tools

## History

TypeScript was released in October 2012 by Microsoft after two years of development. [Anders Hejlsberg](https://twitter.com/ahejlsberg), the original designer of C#, was the lead designer for the language.

## Installation

To download the latest stable build via npm, use the following command:

```
npm install -g typescript
```

To check the installed version, use the following command:

```
tsc -v
```

TypeScript was developed by Microsoft and is [available in VSCode](https://code.visualstudio.com/docs/typescript/typescript-tutorial) by default.

## Playground

There's an interactive playground provided by the TypeScript team at https://www.typescriptlang.org/play.

It allows you to type in JavaScript or TypeScript code on the left and see the resultant JavaScript output or any TypeScript type errors.

## Resources

- TypeScript official site: https://typescriptlang.org
- GitHub repository: https://github.com/microsoft/typescript
