---
Title: 'Nullish Coalescing'
Description: 'Returns the right-hand operand in case the left-hand operand is null or undefined. Otherwise, it returns the left-hand operand.'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Comparison'
  - 'Logical'
  - 'Operators'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

In JavaScript, the **nullish coalescing** (`??`) operator is a logical operator that evaluates the left-hand operand and returns it if it is not nullish (i.e., not `null` or `undefined`). Otherwise, it returns the right-hand operand.

## Syntax

```pseudo
value1 ?? value2
```

- `value1`: The first operand to check if it is nullish (`null` or `undefined`).
- `value2`: The second operand that acts as the default value, returned only if `value1` is nullish.

## Example

The following example demonstrates the use of the nullish coalescing operator to return `18` as a default or fallback value when the variable `age` is `null` or `undefined`:

```js
const age = undefined;
const defaultAge = 18;

console.log(age ?? defaultAge);
```

The above code produces the following output:

```shell
18
```

## Codebyte Example

The following codebyte example uses the nullish coalescing operator (`??`) to return `"Guest"` as a fallback value when `name` is `null`:

```codebyte/javascript
const name = null;
const defaultName = "Guest";

console.log(name ?? defaultName);
```
