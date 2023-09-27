---
Title: 'Conditionals'
Description: 'Conditionals in programming are statements that allow the execution of different blocks of code based on certain conditions. They enable programs to make decisions and perform different actions depending on whether a condition is true or false.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Conditionals'
  - 'Control Flow'
CatalogContent:
  - 'paths/code-foundations'
  - 'paths/computer-science'
---

**Conditionals** in programming are statements that allow the execution of different blocks of code based on certain criteria. They enable programs to make decisions and perform different actions depending on whether a condition is true or false and help with flow control.

For example, in the United States a citizen must be 18 years old by election day to be eligible to vote. In this case, the condition would be if a given person is 18 or older that determines if they are eligible to vote (assuming they meet all other requirements). Such decision-making can be accomplished programmatically with conditionals.

All programming languages support conditonals in various ways, but there are two main conditionals: `if`-`else` and `switch`.

> **Note:** The following pseudo code blocks are not written in any particular language.

## If-else Statements

The `if` statement is the most basic form of a conditional. It checks a condition and executes a block of code if the condition is true.
If the condition is false, the program continues with the next instruction. The basic syntax for an `if` statement is as follows:

```pseudo
if (condition) {
  // Code to be executed if the condition is true
}
```

`else` can proceed an `if` statement, and provides an alternative block of code to execute when the specified condition is false.

```pseudo
if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}
```

For example, regarding the eligibility to vote, an `if`-`else` statement can be written out like so:

```pseudo
if (int age >= 18) {
  print("You can vote");
} else {
  print("You can't vote");
}
```

## Switch Statements

The `switch` statement provides a way to perform different actions based on various values of a variable or expression.

It simplifies complex `if`-`else` chains. The basic syntax for a `switch` statement is as follows:

```pseudo
switch (variable/expression) {
  case value1:
    // Code to be executed if the variable/expression matches value1.
    break;
  case value2:
    // Code to be executed if the variable/expression matches value2.
    break;
  // More cases...
  default:
    // Required code to be executed if none of the cases match the variable/expression.
    break;
}
```

## Conditionals in Different Languages

- [C++](https://www.codecademy.com/resources/docs/cpp/conditionals)
- [C#](https://www.codecademy.com/resources/docs/c-sharp/conditionals)
- [Emojicode](https://www.codecademy.com/resources/docs/emojicode/conditionals)
- [Go](https://www.codecademy.com/resources/docs/go/conditionals)
- [Java](https://www.codecademy.com/resources/docs/java/conditionals)
- [JavaScript](https://www.codecademy.com/resources/docs/javascript/conditionals)
- [Kotlin](https://www.codecademy.com/resources/docs/kotlin/conditionals)
- [Powershell](https://www.codecademy.com/resources/docs/powershell/conditionals)
- [Python](https://www.codecademy.com/resources/docs/python/conditionals)
- [PHP](https://www.codecademy.com/resources/docs/php/conditionals)
- [R](https://www.codecademy.com/resources/docs/r/conditionals)
- [Ruby](https://www.codecademy.com/resources/docs/ruby/conditionals)
- [Swift](https://www.codecademy.com/resources/docs/swift/conditionals)
