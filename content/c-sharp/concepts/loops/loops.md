---
Title: 'Loops'
Description: 'A loop is a logical structure that allows for the repeated execution of a block of code.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Loops'
  - 'For'
  - 'Control Flow'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

A **loop** is a logical structure used to repeatedly execute a block of code. This repetition can either iterate an exact number of times (definite) or continuously until a condition is met (indefinite).

## For Loop

In C# the `for` loop uses definite repetition to run a block of code a specified number of times and consists of three statements separated by semicolons.

- Statement 1 executes only once, before the code block runs for the first time, and is commonly used to set the initial value of a variable.

- Statement 2 is a conditional statement that must return `true` for the code block to execute.

- Statement 3 runs after each repetition of the loop and is typically used to alter the value of the variable set in Statement 1.

```cs
for (int i = 5; i > 0; i--)
{
  // Repeated code here
}
```

> **Note:** Be careful to avoid creating an infinite loop, which occurs if the stop condition never returns `false`.

## While Loop

The `while` loop in C# executes an unspecified number of times until the given condition returns `false`. The condition is tested before each iteration of the loop. If the condition is `false` when it is tested the first time, the code block is never run.

```cs
int i = 0;
while (i > -5)
{
  // Repeated code here
  i--;
}
```

> **Note:** The variable tested in the condition should be updated within the code block to avoid an infinite loop.

## Do While Loop

This form of loop uses the `do` keyword, followed by the code block, followed by the `while` keyword and condition. Unlike the `while` loop it checks the condition after the code block is executed. This means the loop will always iterate at least once, but the condition must be `true` for it to continue.

```cs
int i = 1;
do
{
  // Repeated code here
  i++;
} while (i <= 3);
```

> **Note:** The loop in the last example will still run once even though the condition returns `false`.

## For Each Loop

The `foreach` loop in C# executes a block of code for each element in a given array or collection. The block is run with each element of the array in turn until the array has been exhausted.

It is declared with the `foreach` keyword, followed by, in parentheses, a variable type, a variable name, the keyword `in` and the collection to iterate over.

```cs
// Array to loop over
int[] numbersArray = {0, 1, 2, 3};

foreach (int number in numbersArray)
{
  System.Console.WriteLine(number);
}
```

This example outputs the following:

```shell
0
1
2
3
```

## Nested Loop

`Nested loop` is a concept where one loop is put inside another. For every iteration of the outer loop, all iterations of the inner loop are executed.

```cs
// Outer loop
for (int i = 0; i < 3; i++)
{
  // Inner loop
  for (int j = 0; j < 2; j++)
  {
    System.Console.WriteLine("i = " + i + ", j = " + j);
  }
}
```

This example outputs the following:

```shell
i = 0, j = 0
i = 0, j = 1
i = 1, j = 0
i = 1, j = 1
i = 2, j = 0
i = 2, j = 1
```

Inner and outer loops do not require being the same type. For instance, A `while` loop can be placed inside a `for` loop, or a `do-while` loop inside a `foreach` loop.

```cs
int[] numbersArray = { 0, 1, 2, 3 };
// Outer loop
foreach (int number in numbersArray)
{
  // Inner loop
  for (int k = 0; k < 2; k++)
  {
    System.Console.WriteLine("number = " + number + ", k = " + k);
  }
}
```

This example outputs the following:

```shell
number = 0, k = 0
number = 0, k = 1
number = 1, k = 0
number = 1, k = 1
number = 2, k = 0
number = 2, k = 1
number = 3, k = 0
number = 3, k = 1
```

There is no upper limit on nesting levels. The examples above used two loops, but one can nest even more loops. However, it's a good practice to avoid deep nesting, as it complicates programs.
