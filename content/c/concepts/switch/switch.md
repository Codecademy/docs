---
Title: 'Switch'
Description: 'Provides a structure for supporting several options or conditions to execute a block of code.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Control Flow'
  - 'Else'
  - 'If'
  - 'Switch'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

In C, the **`switch`** statement provides a structure for supporting several options or conditions to execute a block of code. It provides a clean and effective alternative to lengthy `if-else` chains when checking a [variable](https://www.codecademy.com/resources/docs/c/variables) against multiple constant values. It is commonly used when the value of a given variable needs to be compared against multiple possible options.

## Syntax

Here is the syntax for the `switch` statement (or the `switch` case):

```pseudo
switch(expression) {
  case value1:
    // Enter code here
    break;
  case value2:
    // Enter code here
    break;
  case valueN:
    // Enter code here
    break;
  default:
    // Enter code here
}
```

## How Switch Case Works

Here's how the switch statement works:

1. The `expression` is evaluated only once.
2. The value of the expression will be compared with the values of each `case`, and if there is a match, the corresponding block of code is executed. If there is no code block provided in the `case`, the control moves on to the next `case` until it finds one with a code block, and executes the code block there.
3. The `break` keyword breaks out of the `switch` block, and does not evaluate any additional statements in the `switch`. Without the `break`, execution would continue with the next `case` statement.
4. The code inside the `default` case is executed if none of the above cases are matched with the resulting value of the expression. This case is optional, and acts just like the `else` in an `if-else` statement. It serves as a _catch-all_ case.

The expression or variable's resulting value must be of an integral or [enumerated](https://www.codecademy.com/resources/docs/c/enums) type. Examples of valid result types for `switch` case expressions are `int`, `double`, `float`, and `char`. This statement will not be valid for expressions or variables that, for example, result in a string value.

> **Note:** Remember that characters, which have type `char`, are integral, because they have integer ASCII codes.

## Switch vs If-Else

| **Feature**          | **`switch` Statement**              | **`if-else` Statement**                      |
| -------------------- | ----------------------------------- | -------------------------------------------- |
| Expression type      | Works with `int`, `char`, `enum`    | Supports all data types                      |
| Readability          | Cleaner for multiple values         | Becomes lengthy with many conditions         |
| Execution Speed      | Generally faster due to jump tables | Comparatively slower due to condition checks |
| Range Checking       | Not suitable for ranges             | Suitable for conditions involving ranges     |
| Fall-Through Allowed | Yes (if `break` is omitted)         | Not applicable                               |

## Example 1: Evaluating a Variable

This example prints out some statements to a student based on a grade they got on a test or quiz:

```c
#include <stdio.h>

int main(){
  char grade = 'B';
  switch(grade){
    case 'A':
      printf("Excellent!\n");
      break;
    case 'B':
    case 'C':
      printf("Good job!\n");
      break;
    case 'D':
      printf("Okay, you passed.\n");
      break;
    case 'F':
      printf("Better try again...\n");
      break;
    default:
      printf("Invalid grade!!!\n");
  }

  printf("Your grade is %c\n", grade);

  return 0;
}
```

This code will output:

```shell
Good job!
Your grade is B
```

## Example 2: Evaluating an Expression

This example determines if the addition of two numbers results in either a total of `5` or `4`:

```c
#include <stdio.h>

int main(){
  int num1 = 1;
  int num2 = 3;

  switch(num1 + num2){
  case 5:
    printf("The addition of %d and %d results in 5\n", num1, num2);
    break;
  case 4:
    printf("The addition of %d and %d results in 4\n", num1, num2);
    break;
  default:
    printf("The addition of %d and %d does not result in either 4 or 5\n", num1, num2);
  }
  return 0;
}
```

This code will output:

```shell
The addition of 1 and 3 results in 4
```

Just as aforementioned, a `switch` statement can be used to evaluate the value of not just a variable, but also an expression, as long as the expression results in one value that is either a number or something containing a numerical value.

## Frequently Asked Questions

### 1. Can we use strings in `switch` cases?

No, C does not support `switch` with strings. It only works with `int`, `char`, and `enum` types.

### 2. What happens if we forget to add `break` in `switch`?

The control will _fall through_ to the next case and execute all subsequent cases until a `break` or end of `switch` is encountered.

### 3. Is `default` necessary in a `switch` statement?

No, `default` is optional in a `switch` statement. However, it is a good practice to include `default` to handle unexpected values.

### 4. Can two cases in `switch` have the same value?

No, case labels in `switch` must be unique. Duplicate case values will result in a compilation error.

### 5. Can we nest `switch` statements?

Yes, a `switch` can be nested inside another `switch`, though this can reduce code clarity and is rarely recommended.
