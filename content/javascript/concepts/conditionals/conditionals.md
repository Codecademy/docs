---
Title: 'Conditionals'
Description: 'Conditionals take an expression, which is code that evaluates to determine a value, and checks if it is true or false. If it’s true, we can tell our program to do one thing — we can even account for false to do another. An if statement accepts an expression with a set of parentheses: - If the expression evaluates to a truthy value, then the code within its code body executes. - If the expression evaluates to a falsy value, its code body will not execute. js const isMailSent = true; if (isMailSent) {'
Subjects:
  - 'Web Development'
  - 'Computer Science'
Tags:
  - 'Conditionals'
  - 'If'
  - 'Else'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

Conditionals take an expression, which is code that evaluates to determine a value, and checks if it is `true` or `false`. If it’s `true`, we can tell our program to do one thing — we can even account for `false` to do another.

## If Statement

An `if` statement accepts an expression with a set of parentheses:

- If the expression evaluates to a truthy value, then the code within its code body executes.
- If the expression evaluates to a falsy value, its code body will not execute.

```js
const isMailSent = true;

if (isMailSent) {
  console.log('Mail sent to recipient 💌');
}
```

The output would be:

```shell
Mail sent to recipient 💌
```

**Note:** `if` is in lowercase letters. Uppercase letters will generate a JavaScript error.

## Else Statement

An `else` block can be added to an if block or series of if-else if blocks. The `else` block will be executed only if the `if` condition fails.

```js
const isTaskCompleted = false;

if (isTaskCompleted) {
  console.log('Task completed');
} else {
  console.log('Task incomplete');
}
```

If the `hour` is less than 18, create a "Good day" greeting, otherwise "Good evening":

```js
if (hour < 18) {
  greeting = 'Good day 🌤';
} else {
  greeting = 'Good evening 🌙';
}
```

## Else If Statement

After an initial `if` block, `else if` blocks can each check an additional condition. An optional `else` block can be added after the `else if` block(s) to run by default if none of the conditionals evaluated to truthy.

If time is less than 10:00, create a "morning" greeting, if not, but time is less than 20:00, create a "day" greeting, otherwise a "Good evening":

```js
if (time < 10) {
  greeting = 'Good morning 🌄';
} else if (time < 20) {
  greeting = 'Good day 🌁';
} else {
  greeting = 'Good evening 🌉';
}
```

Here, the result of greeting will be: `Good day 🌁`.

## Codebyte Example

```codebyte/js
var pH = 2;

if (pH < 7) {
  console.log("Acidic");
} else if (pH > 7) {
  console.log("Basic");
} else {
  console.log("Neutral");
}
```

What do you think will happen when `pH` is changed to 7?
