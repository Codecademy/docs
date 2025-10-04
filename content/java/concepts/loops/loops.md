---
Title: 'Loops'
Description: 'Perform repeated execution of statements in Java using loops such as for, while, and do-while.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'For'
  - 'Loops'
  - 'While'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

## While Loop

The `while` loop loops through a block of code as long as a specified condition is true:

```pseudo
while (condition) {
  // Code block to be executed
}
```

In this example, the code in the loop will run again and again, as long as variable `i` is still less than 10:

```java
int i = 0;

while (i < 10) {
  System.out.println(i);
  i = i + 2;
}
```

The output would be:

```shell
0
2
4
6
8
```

## Do-While Loop

The `do-while` loop is similar to a `while` loop, but the code block **executes at least once**, even if the condition is false. This makes it useful when you want the loop to run **at least one time** before checking the condition.

```pseudo
do {
  // Code block to be executed
} while (condition);
```

In this example, the code in the loop will run at least once, and then continue running as long as variable `i` is less than 10:

```java
int i = 5;

do {
  System.out.println(i);
  i++;
} while (i < 10);
```

The output would be:

```shell
5
6
7
8
9
```

## For Loop

A `for` loop iterates over a range of values. Its declaration is made up of the following three parts, each separated by a semicolon:

1. The initialization of the loop control variable.
2. A conditional expression.
3. An expression that modifies the loop control variable.

In this example, the loop control variable starts at 3 and decrements. The loop will continue iterating until the conditional expression is no longer true:

```java
for (int i = 3; i > 0; i--) {
  System.out.println(i);
}

System.out.println("Liftoff!");
```

The output would be:

```shell
3
2
1
Liftoff!
```

## For-Each Loop

In Java, the `for`-`each` loop allows you to directly loop through each item in an array or `ArrayList` and perform some action with each item.

When creating a `for`-`each` loop, you must include the `for` keyword and two expressions inside of parentheses, separated by a colon. These include:

- The data type and handle for an element we’re currently iterating over.
- The source array or ArrayList we’re iterating over.

```java
// Array of numbers
int[] numbers = {1, 2, 3, 4, 5};

// For-each loop that prints each number in numbers
// int num is the handle while numbers is the source array
for (int num : numbers) {
    System.out.println(num);
}
```
