---
Title: 'Switch' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Evaluates several case conditions, and executes a code block if the case value is a match.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Code Foundations'
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Control Flow'
  - 'If'
  - 'Else'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-c'
  - 'paths/computer-science'
---

In C, the **`switch case`** statement provides a structure for supporting several options or conditions to execute a block of code, similar to the `if..else-if..else` statement. A main difference here, though, is that this statement is much easier to read and write.

However, it can only evaluate one expression or variable at a time.

## Syntax

```
switch(expression) {
  case value1:
    // Enter code here
    break;
  case value2:
    // Enter code here
    break;
  case value_n:
    // Enter code here
    break;
  default:
    // Enter code here
}
```

Here's how the switch (aka switch-case) statement works:

1. The switch `expression` is evaluated only once.
2. The value of the expression will be compared with the values of each `case`, and if there is a match the corresponding block of code is executed. If there is no code block provided in the `case`, the control moves on to the next `case` until it finds one with a code block, and executes the code block there.
3. The `break` keyword breaks out of the switch block, and does not evaluate any additional statements in the switch. (Without the `break`, execution would continue with the next `case` statement.) The program now exits the switch.
4. The code inside the `default` case is executed if none of the above cases are matched with the resulting value of the expression. This case is optional, and acts just like the `else` in an `if..else-if..else` statement. It serves as a "catch-all" case.

The expression or variable's resulting value must be of an integral or enumerated type. Examples of valid result types for switch-case expressions are `int`, `double`, `float`, and `char`. (Remember that characters, which have type `char`, are integral, because they have integer ASCII codes.) This statement will not be valid for expressions or variables that, for example, result in a string value.

## Example 1: Evaluating a variable

The following prints out some statements to a student based on a grade they got on a test or quiz.

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

This example will output:

```shell
Good job!
Your grade is B
```

## Example 2: Evaluating an expression

The following determines if the addition of two numbers results in either a total of 5 or 4.

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

This example will output:

```shell
The addition of 1 and 3 results in 4
```

Just as aforementioned, a switch-case statement can be used to evaluate the value of not just a variable, but also an expression, as long as the expression results in one value that is either a number or something containing a numerical value.
