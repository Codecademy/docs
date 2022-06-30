---
Title: 'Functional Programming'
Description: 'Encourages programming with pure functions and evaluating expressions instead of statements.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Functions'
  - 'Recursion'
CatalogContent:
  - 'learn-to-code'
  - 'paths/code-foundations'
---

**Functional programming (FP)** is a declarative software development paradigm that encourages constructing programs by composing pure functions and evaluating expressions instead of statements. The functions are isolated and independent of the state of the application.

In FP, dependencies such as variables or objects needed for a function, are always declared explicitly by passing them into the function as arguments. Any operation inside the function is therefore bound to the arguments passed, instead of depending on global objects or variables. This makes the function:

- Suitable for testing and debugging.
- Predictable, reusable, and stable when refactoring code.

FP helps make code more modular and understandable.

## Core Principles of FP

FP revolves around a few fundamental concepts that are important to discern in order to understand what makes it a popular approach to software development.

### First-Class Entities

In FP, functions are considered to be first-class entities. This means that functions can be:

- Assigned to a variable.
- Passed as arguments into other functions.
- Returned from other functions, just as any other data type can.

Higher-order functions are a type of first-class functions, as they can take functions as arguments and/or return a function.

### Pure Functions

Pure functions are the bread and butter of FP. They are functions that always produce the same output for the same set of inputs and do not cause any side effects. The application state is not impacted apart from the return value of the pure functions and no data is altered. This aspect is known as referential transparency: pure functions can be replaced with their returned value without changing the behavior of a program.

### Immutability

That latter property of pure functions can further be defined as immutability. This means that variables or objects outside of the function are unaffected. Instead, copies are created and returned from the function if needed.

Generally speaking, FP is about avoiding a shared mutable state, which is when different parts of the program are able to access data that can be modified and that exist in a shared scope.

### Function Composition

The process of composing functions can be described by chaining two or more function calls; once the first function is called, its return value is passed to a second function as an argument.

### Recursive Functions

In FP, iteration is implemented through recursion as opposed to `for` and `while` loops. Recursive functions repeatedly call themselves until a specified base case is met. Conceptually, this technique breaks down a problem into smaller pieces, contributes to the removal of side effects, and improves readability.
