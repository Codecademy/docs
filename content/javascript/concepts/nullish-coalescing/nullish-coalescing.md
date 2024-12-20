---
Title: 'Nullish Coalescing'
Description: 'A JavaScript nullish coalescing (??) operator is a logical operator evaluates the left-hand value and returns it if it isn't nullish (null or undefined). If it is, the operator returns the right-hand side value.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Comparison'
  - 'Logical'
  - 'Operator'
CatalogContent:
- 'introduction-to-javascript'
- 'paths/front-end-engineer-career-path'
---

A JavaScript **nullish coalescing** (??) operator is a logical operator evaluates the left-hand value and returns it if it isn't nullish (null or undefined). If it is, the operator returns the right-hand side value.

## Syntax

```pseudo
value1 ?? value2
```

## Difference between `??` and `||`

The OR (||) operator returns the right-hand operand for any falsy value (e.g., 0, false, NaN, ""). In contrast, the nullish coalescing (??) operator only checks if the left-hand operand is null or undefined.

For example, when the value is an empty string, `??` returns the right-hand operand:

```js
const userInput = "";
const result = userInput ?? "Default";

console.log(result);
// Output: "" (empty string is not nullish)
```

Meanwhile, `||` returns left-hand operand:

```js
const userInput = "";
const result = userInput || "Default";
console.log(result); // Output: "Default" (because empty string is falsy)
```

## Operator Precedence:
When using multiple operators in an expression, those with higher precedence are evaluated first, unless parentheses are used to explicitly define the order.

Operator Precedence Order:
- `&&` has higher precedence than `||`.
- `??` has lower precedence than both `&&` and `||`.

To ensure the correct evaluation when combining ?? with other operators, parentheses should be used.

```js
const a = null;
const b = false;
const c = "Hello";

const result1 = a || b && c ?? "Default";
console.log(result1); // Output: false

const result2 = a || (b && c ?? "Default");
console.log(result2)// Output: "Default"
```

## Codebyte Example

The following code checks if the name has a value. If not, it returns default value "Guest".

```codebyte/js
const name = null;
const defaultName = "Guest";

console.log(name ?? defaultName);
// Output: "Guest"
```