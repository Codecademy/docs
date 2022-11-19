---
Title: 'Subroutine'
Description: 'A subroutine is a set of computer instructions written to perform specific tasks.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Subroutine'
  - 'Functions'
CatalogContent:
  - 'paths/code-foundations'
  - 'learn-how-to-code'
---

A **subroutine** is a set of computer instructions written to perform specific tasks. It is also known as a function or a procedure. A subroutine packages code for an operation or a set of operations, which makes code reusable and readable.

## Syntax

Every programming language has its own syntax for defining and calling a subroutine or function. Often, the basic format of a subroutine will follow the model below:

Pseudo code for declaring a subroutine:

```pseudo
declare <subroutine_name>
  # subroutine code
end
```

Pseudo code for calling a subroutine:

```pseudo
call <subroutine_name>
```

In modern programming languages, we use functions that are similar to subroutines. These functions take in argument(s) and may return some value(s) after execution.

Let's look at subroutine in JavaScript syntax.

A function, `func_name()`, is declared and takes in any number of arguments:

```js
function func_name(/* var1, var2, var3,... */) {
  // Function body

  // Return statement is optional
  return return_value;
}
```

To call or invoke the function with any number of arguments:

```js
func_name(/* var1, var2, var3,... */);
```

## Codebyte Example

```codebyte/js
function sum(var1, var2) {
  let return_value = var1 + var2;
  return return_value;
}

let total = sum(10, 12);

console.log(total);
```

## Subroutines/Functions in Different Languages

- [Functions in C++](https://www.codecademy.com/resources/docs/cpp/functions)
- [Functions in JavaScript](https://www.codecademy.com/resources/docs/javascript/functions)
- [Functions in PHP](https://www.codecademy.com/resources/docs/php/functions)
- [Functions in TypeScript](https://www.codecademy.com/resources/docs/typescript/functions)
- [Functions in Ruby](https://www.codecademy.com/resources/docs/ruby/functions)
