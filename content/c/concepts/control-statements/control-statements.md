---
Title: 'Control Statements'
Description: 'In C, control statements direct program flow using conditions, loops, and branches for decision-making and repetition.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Booleans'
  - 'Conditionals'
  - 'Control Flow'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

In C, [**control statements**](https://www.codecademy.com/resources/docs/general/control-flow) are fundamental constructs that use loops and conditions to determine how a program should execute. They give programmers the ability to deliberately, frequently, or in reaction to certain scenarios run individual code blocks.

C supports two main types of control statements:

## Conditional Statements

Conditional statements in C are used to make decisions and execute specific blocks of code depending on whether a condition evaluates to `true` or `false`. Some of the conditional statement constructs supported in C are `if`,`else`, `else if`, and `switch` statement.

### if Statement

The `if` statement is used to execute a code block only if a specified condition evaluates to `true`:

```pseudo
if (condition) {
  // Code to execute if condition is true
}
```

Here's an example code snippet demonstrating the use of `if` statement in C:

```c
#include <stdio.h>

int main() {
  int number = 10;

  // Check if the number is greater than 5
  if (number > 5) {
    printf("Greater than 5\n");
  }

  return 0;
}
```

The output for the code would be:

```shell
Greater than 5
```

### if-else Statement

The `if-else` statement is used for executing a code block only if a specified condition comes `true` and another if it comes `false`:

```pseudo
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}
```

Here's an example code snippet demonstrating the use of `if-else` statement in C:

```c
#include <stdio.h>
int main() {
  int number = 3;

  // Check if the number is greater than 5
  if (number > 5) {
    printf("Greater than 5\n");
  } else {
    printf("5 or less\n");
  }

  return 0;
}
```

The output for the code would be:

```shell
5 or less
```

### switch Statement

The `switch` statement executes one of several blocks of code based on the value of a variable:

```pseudo
switch (variable) {
  case value1:
    // Code for case value1
    break;
  case value2:
    // Code for case value2
    break;
  default:
    // Code if no cases match
}
```

Here's an example code snippet demonstrating the use of `switch` statement in C:

```c
#include <stdio.h>
int main() {
  int day = 6;

// Determine the day of the week
  switch (day) {
    case 1:
      printf("Monday\n");
      break;
    case 2:
      printf("Tuesday\n");
      break;
    case 3:
      printf("Wednesday\n");
      break;
    case 4:
      printf("Thursday\n");
      break;
    case 5:
      printf("Friday\n");
      break;
    case 6:
      printf("Saturday\n");
      break;
    case 7:
      printf("Sunday\n");
      break;
    default:
      printf("Invalid day\n");
  }

  return 0;
}
```

The output for the code would be:

```shell
Saturday
```

## Looping Statements

Looping statements in C are used to repeatedly execute a code block until a specific condition comes `false`. This helps developers avoid the repetition of tasks and minimizes the duplication of code in their programs.

### for loop

In C, the `for` loop allows users to run a block of code multiple times, making it ideal for situations where they know exactly how many iterations are needed:

```pseudo
for (initialization; condition; update) {
  // Code to execute in each iteration
}
```

Here's an example code snippet demonstrating the use of `for` statement in C:

```c
#include <stdio.h>

int main() {
  // Using a for loop to print numbers 1 to 5
  for (int i = 1; i <= 5; i++) {
    printf("Iteration: %d\n", i);
  }
  return 0;
}
```

The output for the code would be:

```shell
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
Iteration: 5
```

### while loop

The `while` loop in C executes a code block repeatedly until a specific condition comes `false`. It's mostly used when the number of iterations needed are not known:

```pseudo
while (condition) {
  // Code to execute while condition is true
}
```

Here's an example code snippet demonstrating the use of `while` loop in C:

```c
#include <stdio.h>
int main() {
  int i = 1;

  // While loop will execute as long as i is less than or equal to 5
  while (i <= 5) {
    printf("%d\n", i);  // Print the value of i
    i++;  // Increment i by 1
  }
  return 0;
}
```

The output for the code would be:

```shell
1
2
3
4
5
```

### do-while loop

A `do-while` loop in C resembles a `while` loop with a difference. The condition is tested after the loop body is executed and not before, which is how it's executed at least once regardless of the condition. In a `do-while` loop, execution continues as long as the given condition is met:

```pseudo
do {
  // Block of code to be executed
} while (condition);
```

Here's an example code snippet demonstrating the use of `do-while` loop in C:

```c
#include <stdio.h>
int main() {
  int count = 1;

  // do-while loop to print numbers 1 to 5
  do {
    printf("Count: %d\n", count);
    count++;
  } while (count <= 5);

  return 0;
}
```

The output for the code would be:

```shell
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```
