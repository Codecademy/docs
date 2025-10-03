---
Title: 'Conditionals'
Description: 'Conditionals evaluate an expression as true or false, executing code accordingly. If true, one action occurs; if false, another can be executed.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Conditionals'
  - 'Control Flow'
  - 'Switch'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Conditionals** take an expression, which is code that evaluates to determine a value, and checks if it is `true` or `false`. If it’s `true`, we can tell our program to do one thing — we can even account for `false` to do another.

As we write more complex programs, conditionals allow us to address multiple scenarios and make our programs more robust.

## If Statement

An `if` statement executes a block of code when a specified boolean expression is evaluated as `true`; otherwise, the block of code will be skipped.

```java
if (berries > 5) {
  System.out.println("More than a handful of berries.");
}
```

## Else

An `else` clause can be added to an `if` statement.

The `else` statement executes a block of code when the condition inside the `if` statement is `false`:

- If the condition evaluates to `true`, code in the `if` part is executed.
- If the condition evaluates to `false`, code in the `else` part is executed.

The else statement is always the last condition.

```java
if (year == 2022) {
  System.out.println("Print if year is 2022");
}
else {
  System.out.println("Print if year is not 2022");
}
```

## Else If

`else if` statements can be chained together to check multiple conditions. Once a condition is `true`, a code block will be executed and the conditional statement will be exited.

There can be multiple `else if` statements in a single conditional statement.

```java
int testScore = 76;
char grade;

if (testScore >= 90) {
  grade = 'A';
} else if (testScore >= 80) {
  grade = 'B';
} else if (testScore >= 70) {
  grade = 'C';
} else if (testScore >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}

System.out.println("Grade is " + grade);
// Output: Grade is C
```

## Nested Conditional Statements

A nested conditional statement is a conditional statement nested inside another conditional statement. The outer conditional statement is evaluated first; if the condition is true, then the nested conditional statement will be evaluated.

```java
boolean studied = true;
boolean wellRested = true;

if (wellRested) {
  System.out.println("Best of luck today!");
  if (studied) {
    System.out.println("You are prepared for your exam!");
  } else {
    System.out.println("Study before your exam!");
  }
}
```

The output would be:

```shell
Output: Best of luck today!
Output: You are prepared for your exam!
```

## Ternary Operator

The ternary operator (`? :`) is a shorthand way to write simple `if-else` statements. It evaluates a condition and returns one value if the condition is true and another if it is false. It follows the syntax:

```pseudo
condition ? expression_if_true : expression_if_false;
```

- **Condition**: An expression that evaluates to true or false.
- **Expression if true**: The value returned if the condition is true.
- **Expression if false**: The value returned if the condition is false.

```java
public class Main {
    public static void main(String[] args) {
        int age = 18;
        String message = (age >= 18) ? "You are an adult." : "You are a minor.";
        System.out.println(message);
    }
}

// Output: You are an adult.
```
