---
Title: 'Loops'
Description: 'A loop is a programming tool that is used to repeat a set of instructions.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Loops'
  - 'While'
  - 'For'
  - 'Control Flow'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

A **loop** is a programming tool that is used to repeat a set of instructions. Iterate is a generic term that means “to repeat” in the context of loops. A loop will continue to iterate until a specified condition, commonly known as a stopping condition, is met.

## For Loop

A `for` loop begins with the `for` keyword and a statement declaring the three parameters governing the iteration, all separated by semicolons`;`:

- The `initialization` defines where to begin the loop by declaring (or referencing) the iterator variable.
- The `condition` determines when to stop looping (when the expression evaluates to false).
- The `increment` statement updates the iterator each time the loop is completed.

```pseudo
for (initialization; condition; increment) {
  // Code to be executed repeatedly
}
```

For example:

```c
for (int i = 0; i < 4; i++) {
  printf("%d\n", i);
}
```

The output would be:

```shell
0
1
2
3
```

## While Loop

The `while` loop creates a loop that is executed as long as a specified condition evaluates to true. The loop will continue to run until the condition evaluates to false. The condition is specified before the loop, and usually, some variable is incremented or altered in the while loop body to determine when the loop should stop.

```pseudo
while (condition) {
  // Code block to be executed
}
```

For example:

```c
int i = 0;

while (i < 5) {
  printf("%d\n", i);
  i++;
}
```

The output would be:

```shell
0
1
2
3
4
```

## Do…While Loop

A `do`...`while` statement creates a loop that executes a block of code once, checks if a condition is true, and then repeats the loop as long as the condition remains true. They are used when the loop body needs to be executed at least once. The loop ends when the condition evaluates to false.

```pseudo
do {
  // Code to be executed at least once
} while (condition);
```

For example:

```c
int x = 0;
int i = 0;

do {
  x = x + i;
  printf("%d\n", x);
  i++;
} while (i < 5);
```

The output would be:

```shell
0
1
3
6
10
```

## Nested For Loop

A nested `for` loop is when a `for` loop runs inside another `for` loop.

The inner loop will run all its iterations for each iteration of the outer loop.

For example:

```c
for (int outer = 0; outer < 2; outer++) {
  for (int inner = 0; inner < 3; inner++) {
    printf("%d-%d\n", outer, inner);
  }
}
```

The output would be:

```shell
0-0
0-1
0-2
1-0
1-1
1-2
```
