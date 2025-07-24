---
Title: 'Switch'
Description: 'The Java switch statement provides a means of checking an expression against various case statements.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Conditionals'
  - 'Control Flow'
  - 'Switch'
  - 'Values'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The Java **`switch`** statement provides a means of checking an expression against various `case` statements. If there is a match, the code within starts to execute. The `break` keyword can be used to terminate a case. There's also an optional `default` statement marking code that executes if none of the `case` statements are true.

## Java `switch` Case Syntax

```pseudo
switch (expression) {
  case x:
    // Code block
    break;
  case y:
    // Code block
    break;
  default:
    // Code block
}
```

Here, `expression` is the expression to be checked against the various `case` statements.

## How Java `switch` Case Works

1. Java evaluates the `expression` inside the `switch` case.
2. It compares the result with each `case` value.
3. If a match is found, the code block under that `case` is executed.
4. The `break` statement ends the `switch` block.
5. If no match is found, the `default` block (if present) is executed.

> **Note:** Without `break`, the execution will continue to the next case—this is called fall-through.

## Java `switch` Case vs. `if-else` Statement

| Feature                  | `switch` Case                             | `if-else` Statement                       |
| ------------------------ | ----------------------------------------- | ----------------------------------------- |
| **Use Case**             | Best for fixed values or discrete options | Suitable for complex conditions or ranges |
| **Data Types Supported** | `int`, `char`, `String`, `enum`           | All data types and expressions            |
| **Readability**          | More readable for many discrete cases     | Less readable with many nested conditions |
| **Fall-through**         | Possible if `break` is omitted            | No fall-through                           |
| **Performance**          | Slightly better for large case sets       | Comparable in most cases                  |

## Example 1: Java `switch` Case with Integers

This example uses an `int` variable to determine the current day of the week using the Java `switch` statement. It prints the corresponding weekday based on the numeric value:

```java
public class DaySwitch {
  public static void main(String[] args) {
    int day = 3;

    switch (day) {
      case 1:
        System.out.println("Monday");
        break;
      case 2:
        System.out.println("Tuesday");
        break;
      case 3:
        System.out.println("Wednesday");
        break;
      default:
        System.out.println("Other day");
    }
  }
}
```

Here is the output:

```shell
Wednesday
```

## Example 2: Java `switch` Case with Strings

This example shows how to use a string in a Java `switch` statement to match and identify the month. It's available from Java 7 onwards:

```java
public class MonthSwitch {
  public static void main(String[] args) {
    String month = "April";

    switch (month) {
      case "January":
        System.out.println("1st month");
        break;
      case "April":
        System.out.println("4th month");
        break;
      default:
        System.out.println("Unknown month");
    }
  }
}
```

Here is the output:

```shell
4th month
```

## Example 3: Enhanced Java `switch` Case (Java 14+)

This example demonstrates the enhanced Java `switch` statement syntax introduced in Java 14. It uses the new arrow (`->`) syntax for cleaner and safer case handling, and returns a value based on day type:

```java
public class EnhancedSwitch {
  public static void main(String[] args) {
    int day = 5;

    String dayType = switch (day) {
      case 1, 2, 3, 4, 5 -> "Weekday";
      case 6, 7 -> "Weekend";
      default -> "Invalid day";
    };

    System.out.println(dayType);
  }
}
```

Here is the output:

```shell
Weekday
```

## Frequently Asked Questions

### 1. Can Java `switch` statements be used with strings?

Yes, Java `switch` statements support `String` as a valid type.

### 2. What happens if `break` is not used?

Without break, the execution falls through to the next case, which may lead to unexpected behavior.

### 3. Can a Java `switch` case expression return a value?

Yes, the enhanced Java `switch` case allows returning a value directly using the `->` syntax.

### 4. Can we use Booleans in Java `switch` statements?

No, Booleans are not supported in Java `switch` statements. Use `if-else` instead.

### 5. Is the `default` case mandatory?

No, but it's a good practice to include it to handle unexpected values.
