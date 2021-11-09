---
Title: 'Functional Programming'
Description: 'Encourages programming with pure functions and evaluating expressions instead of statements.'
Subjects:
- 'Code Foundations'
- 'Computer Science'
- 'Web Development'
Tags:
- 'Functions'
- 'Pure Functions'
- 'Recursion'
CatalogContent:
- 'learn-to-code'
- 'paths/code-foundations'
---

_Functional Programming_ (FP) is a declarative software development paradigm which encourages constructing programs by composing pure functions and evaluating expressions instead of statements. The functions are isolated and independent of the state of the application. 

In Functional Programming, dependencies such as variables or objects needed for a function, are always declared explicitly by passing them into the function as arguments. Any operation inside the function is therefore binded to the arguments passed, instead of depending on global objects or variables. This makes the function easier to test and debug, and allows for more predictability, reusability and stability when altering and refactoring code.

## Core Principles of FP

- The functional approach to programming means treating all functions as **First-class entities**: functions can be assigned to a variable, passed as arguments of another function, and returned from other functions, just as any other data type can. Higher-order functions are a type of first-class functions, as they can take functions as arguments, return a function, or both.

- ***Pure functions*** are the bread and butter of Functional Programming. A pure function is a function that always produces the same output for the same set of inputs and that does not cause any side effects (i.e. no external impact in the application state besides the return value and no data alteration).

- That latter property of pure functions can further be defined as **immutability**: not altering variables or objects outside of the function, but instead creating new ones and returning them if need be from the function. Generally speaking, FP is about avoiding _shared mutable state_ - which is when different parts of the program are able to access data that can be modified and that exist in a shared scope.

- Pure functions also provide what is known as **referential transparency**. An expression is referentially transparent if it can be replaced with its returned value without changing the program's behavior. 

- **Function composition** is widely used in FP to perform computation or produce new functions. The process of composing functions can be described by chaining two or more function calls: once the first function is called, its return value is passed to a second function as an argument.

- In FP, iteration is implemented through **recursion** as opposed to for and while loops. Recursive functions repeatedly call themselves, until a specified condition is met. This technique allows to break down a problem into smaller pieces and contributes to the removing of side effects, as well as making the code more expressive and readable.