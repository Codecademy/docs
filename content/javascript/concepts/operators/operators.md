---
Title: 'Operators'
Description: 'An operator is a special character or series of characters that perform a task in JavaScript.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Arithmetic'
  - 'Comparison'
  - 'Logical'
  - 'Operators'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

An **operator** is a special character or series of characters that perform a task in JavaScript.

## Assignment Operator

This operator uses the equals sign (`=`) to assign a value to a [variable](https://www.codecademy.com/resources/docs/javascript/variables).

```js
let x = 42;
```

In the snippet above, a variable `x` is declared and the numeric value `42` is assigned to it.

## Arithmetic Operators

These operators are used to perform arithmetic on numeric values:

- `+`: Adds to a value; can also be used to concatenate [strings](https://www.codecademy.com/resources/docs/javascript/strings).
- `-`: Subtracts from a value.
- `*`: Multiplies by a value.
- `/`: Divides by a value.
- `%`: [Modulo](https://www.codecademy.com/resources/docs/general/modulo) finds the remainder after dividing two values.
- `**`: Returns the exponentiation of the first value raised to the power of the second value (first introduced in ES2016).
- `++`: Returns the value incremented by 1.
- `--`: Returns the value decremented by 1.

The operators can be implemented as seen below:

```js
let sum = 5 + 5;

let difference = 10 - 5;

let product = 5 * 10;

let quotient = 10 / 5;

let remainder = 10 % 5;
```

## Other Assignment Operators

An assignment operator assigns a value to its left operand based on the value of its right operand:

- `+=`: Adds and assigns a new value to a variable.
- `-=`: Subtracts and assigns a new value to a variable.
- `*=`: Multiplies and assigns a new value to a variable.
- `/=`: Divides and assigns a new value to a variable.
- `%=`: Assigns the returned remainder (modulo) as a new value to a variable.
- `**=`: Assigns the left operand raised to the power of the right operand.

The following example showcases how these operators are a combination of using an assignment and arithmetic operator in one statement:

```js
let number = 100;

// Both statements will add 10
number = number + 10;
number += 10;

console.log(number);
// Output: 120
```

## Comparison Operators

These operators compare values and return a [boolean](https://www.codecademy.com/resources/docs/general/data-types/boolean) value of `true` or `false`.

- `==`: Returns `true` or `false` based on whether the value of two operands are equal.
- `===`: Returns `true` or `false` based on whether the value and type of two operands are equal.
- `!=`: Returns `true` or `false` based on whether the value of two operands are not equal.
- `!==`: Returns `true` or `false` based on whether the value and type of two operands are not equal.
- `>`: Returns `true` or `false` based on whether the first value is greater than the second value.
- `<`: Returns `true` or `false` based on whether the first value is less than the second value.
- `>=`: Returns `true` or `false` based on whether the first value is greater than or equal to the second value.
- `<=`: Returns `true` or `false` based on whether the first value is less than or equal to the second value.

> **Note:** The `==` and `===` comparison operators are not to be confused with the single equality sign `=` operator that is used for assignment.

The following example showcases some of these comparison operators:

```js
let tenString = '10';
let numberTen = 10;

console.log(tenString == numberTen);
// Output: true

console.log(tenString === numberTen);
// Output: false

console.log(tenString != numberTen);
// Output: false

console.log(tenString !== numberTen);
// Output: true
```

> **Note:** The first comparison in the code above yields `true` even though the variables are of different types. This is because JavaScript uses [type coercion](https://www.codecademy.com/resources/docs/javascript/type-coercion) by default to evaluate expressions, which may lead to unexpected results. Use the `===` and `!==` operators to perform strict type evaluations.

## Logical Operators

These operators combine multiple boolean expressions or values to provide a single boolean output:

- `&&` (AND): Returns `true` if all operands evaluate to `true`.
- `||` (OR): Returns `true` if one or more operands evaluate to `true`.
- `!` (NOT): Returns the logical opposite of an operand's boolean value (i.e., `!(true)` returns `false` and `!(false)` returns `true`).

The following example showcases the usage of logical operators:

```js
const walksLikeADuck = true;
const talksLikeADuck = true;

// AND Operator
let isDuck = walksLikeADuck && talksLikeADuck;

console.log(isDuck);
// Output: true

const isBird = true;
const isPlane = false;

// OR Operator
isDuck = isBird || isPlane;

console.log(isDuck);
// Output: true

// NOT Operator
const isPenguin = !isDuck;

console.log(isPenguin);
// Output: false
```

## Unary Operator

A unary operator, such as the not operator (`!`), is an operator that is applied to one term or variable. Arithmetic operators are also known as binary operators because they operate on two terms. There are also unary operators in JavaScript that are names rather than symbols, such as the `typeof` operator.

```js
console.log(typeof 'foo'); // Yields string
```

## Conditional Operator

The conditional, or ternary, operator uses the question mark `?` and colon `:` to assign a value to a variable based on a conditional statement:

```pseudo
variable = condition ? assignedIfTrue : assignedIfFalse;
```

This operator combines the functionalities of the assignment, comparison, and logical operators.

### Multi-Step Ternary Operator Examples

Multiple steps can be performed by a ternary operator, based on certain conditions (similar to an `if...else` statement).

A key point to consider is where the parentheses (`()`) are placed.

The following example shows how a ternary operator can conditionally increment numeric values similar to how it's done in an `if...else` statement:

```js
let i = true;
let a = 0;
let b = 0;

if (i == true) {
  a++;
  b++;
} else {
  a = 0;
  b = 0;
}

console.log('a = ', a, 'b = ', b);

// The ternary equivalent
i == true ? (a++, b++) : ((a = 0), (b = 0));

console.log('a = ', a, 'b = ', b);

let c = 0;
i == true ? (a++, b++, c++) : ((a = 0), (b = 0), (c = 0));

console.log('a =', a, 'b =', b, 'c =', c);
```

This will output the following:

```shell
a = 1 b = 1
a = 2 b = 2
a = 3 b = 3 c = 1
```

The following ternary operator will throw a `SyntaxError` due to how the parentheses are placed:

```js
let i = true;

// This implementation will fail
i == true ? (a++), (b++) : (a = 0), (b = 0);
console.log('a = ', a, 'b = ', b);
```

This will output:

```shell
Output:
i == true ? (a++), (b++) : (a = 0), (b = 0);
                 ^
SyntaxError: Unexpected token ','
```

> **Note:** The ternary operator and `if...else` condition performance speeds are roughly the same. Although the ternary operator can help consolidate several lines of code, utilizing it is up to preference.

### Codebyte Example

The following example showcases the conditional operator:

```codebyte/javascript
const walksLikeADuck = true;
const talksLikeADuck = true;

let isDuck = (walksLikeADuck && talksLikeADuck) ? "It's a duck" : "It's not a duck.";

console.log(isDuck);
```
