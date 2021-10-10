---
Title: 'What is Subroutine?'
Description: 'A subroutine is a set of computer instructions written to perform a specific tasks. It is also known as a function or a procedure. A subroutine packages code for an operation or a set of operations, which makes code more reusable and readable. Every programming languages has their own way of defining and calling a subroutine or function.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Subroutine'
CatalogContent:
  - 'paths/code-foundations'
  - 'learn-how-to-code'
---

'A subroutine is a set of computer instructions written to perform a specific tasks. It is also known as a function or a procedure. A subroutine packages code for an operation or a set of operations, which makes code more reusable and readable.

## Syntax

Every programming language has its own syntax for defining and calling a subroutine or function. Often, the  basic format of a subroutine will follow the model below:

Pseudo code for declaraing subroutine:

```pseudo
declare <suboroutine_name>
    #subroutine code
end Subroutine
```

Pseudo code for calling subroutine :

```pseudo
call <subroutine_name>
```

In modern programming languages , we use functions which is simlar to subroutines it takes some arguments and may return some value after execution. Let's look at the syntax of C++.

```js
//declaraing function
function function_name(var1,var2,var3,...)
{
    // function body
    return return_value
    // return statement is optional
}

//calling function
function_name(var1,var2,var3,...)
```

For example :

```js
//declaraing
function sum(var1, var2) {
  let return_value = var1 + var2;
  return return_value;
}

// calling
let total = sum(10, 12);
console.log(total);
```

## Links for Subroutines / Functions in Different Languages

- [Functions in C++](https://www.codecademy.com/resources/docs/cpp/functions)
- [Functions in JavaScript](https://www.codecademy.com/resources/docs/javascript/functions)
- [Functions in PHP](https://www.codecademy.com/resources/docs/php/functions)
- [Functions in TypeScript](https://www.codecademy.com/resources/docs/typescript/functions)
- [Functions in Ruby](https://www.codecademy.com/resources/docs/ruby/functions)
