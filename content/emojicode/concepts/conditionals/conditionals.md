---
Title: '↪️ Conditionals'
Description: 'Conditionals take an expression, which is code that evaluates to determine a value, and checks if it is 👍 or 👎. If it’s 👍, we can tell our program to do one thing — we can even account for 👎 to do another. As we write more complex programs, conditionals allow us to address multiple scenarios and make our programs more robust. The ↪️ statement is very important. It allows for conditional execution of a code block. The whole syntax is: - If the condition evaluates to 👍, the code block will be executed. - And if it evaluates to 👎, it’ll be ignored. This example will display "a is greater than b" if the content for variable a is greater than b: shell'
Subjects:
  - 'Computer Science'
Tags:
  - 'If'
  - 'Else'
  - 'Control Flow'
CatalogContent:
  - 'learn-emojicode'
  - 'paths/computer-science'
---

Conditionals take an expression, which is code that evaluates to determine a value, and checks if it is `👍` or `👎`. If it’s `👍`, we can tell our program to do one thing — we can even account for `👎` to do another.

As we write more complex programs, conditionals allow us to address multiple scenarios and make our programs more robust.

## If Statement

The ↪️ statement is very important. It allows for conditional execution of a code block. The whole syntax is:

- If the condition evaluates to `👍`, the code block will be executed.
- And if it evaluates to `👎`, it'll be ignored.

This example will display "a is greater than b" if the content for variable `a` is greater than `b`:

```shell
↪️ a ▶️ b 🍇
  😀 🔤a is greater than b🔤❗️
🍉
```

## Else Statement

The `🙅` extends an `↪️` statement to execute an additional code block in case the expression in the `if` statement evaluates to false.

For example, the following code would display "a is greater than b" if `a` is greater than `b`, and `a is not greater than b` otherwise:

```bash
↪️ a ▶️ b 🍇
  😀 🔤a is greater than b🔤❗️
🍉
🙅 🍇
  😀 🔤a is not greater than b🔤❗️
🍉
```

**Note:** The `🙅` statements is only executed if the `↪️` statement evaluated to `👎`, and if all `🙅↪️` statements evaluated to `👎` too.
