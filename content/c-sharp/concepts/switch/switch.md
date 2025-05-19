---
Title: 'Switch Statement'
Description: 'Executes different code blocks based on the value of an expression.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Conditionals'
  - 'Control Flow'
  - 'Switch'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`switch` statement** is a multi-way branch statement in C# that provides an efficient mechanism to transfer execution to different parts of code based on the value of an expression. It evaluates an expression once and compares it against a series of case values, executing the associated code block when a match is found. The switch statement is particularly useful when dealing with multiple possible conditions for a single variable.

Switch statements serve as a cleaner alternative to multiple [if-else](https://www.codecademy.com/resources/docs/c-sharp/conditionals) chains when comparing a single variable against several possible values. They are commonly used in menu systems, state machines, command processing, and data validation scenarios where code needs to branch based on discrete values.

## Syntax

```pseudo
switch (expression)
{
  case value1:
    // Code to execute when expression equals value1
    break;
  case value2:
    // Code to execute when expression equals value2
    break;
  // Additional case statements as needed
  default:
    // Code to execute when no cases match
    break;
}
```

**Parameters:**

- `expression`: The value to check, like a number, character, string, or enum.
- `case value`: The constant value to compare against the expression. Each case value must be unique within the switch statement.
- `break`: Statement that terminates the execution of the switch block, preventing fall-through to other cases.
- `default`: Optional section that executes when no case matches the expression value.

**Return value:**

- The switch statement does not return any value.

## Example 1: Basic Switch Usage

This example demonstrates the basic usage of a switch statement with different days of the week:

```cs
using System;

class SwitchBasics
{
  public static void Main(string[] args)
  {
    Console.WriteLine("Enter a day number (1-7):");
    int dayNum = Convert.ToInt32(Console.ReadLine());
    string dayName;
    switch (dayNum)
    {
      case 1:
        dayName = "Monday";
        break;
      case 2:
        dayName = "Tuesday";
        break;
      case 3:
        dayName = "Wednesday";
        break;
      case 4:
        dayName = "Thursday";
        break;
      case 5:
        dayName = "Friday";
        break;
      case 6:
        dayName = "Saturday";
        break;
      case 7:
        dayName = "Sunday";
        break;
      default:
        dayName = "Invalid day number";
        break;
    }

    Console.WriteLine($"The day is: {dayName}");
  }
}
```

When the user inputs 3, the code produces the following output:

```shell
Enter a day number (1-7):
3
The day is: Wednesday
```

This example shows how the switch statement evaluates the `dayNum` variable and executes the code in the matching case. If the user enters a value outside the range 1-7, the default case will execute.

## Example 2: Switch with Case Groups

This example demonstrates how to group cases together when they should execute the same code block:

```cs
using System;

class SwitchWithGroups
{
  public static void Main(string[] args)
  {
    Console.WriteLine("Enter a character:");
    char ch = Convert.ToChar(Console.ReadLine().ToLower());

    switch (ch)
    {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        Console.WriteLine($"'{ch}' is a vowel.");
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        Console.WriteLine($"'{ch}' is a digit.");
        break;
      default:
        Console.WriteLine($"'{ch}' is a consonant or special character.");
        break;
    }
  }
}
```

If the user inputs 'e', the output of this code will be:

```shell
Enter a character:
e
'e' is a vowel.
```

This example shows how multiple case labels can be stacked to execute the same code block. The switch evaluates the lowercase version of the input character and determines if it's a vowel, digit, or something else.

## Codebyte Example: Switch with Strings

This example demonstrates using a switch statement with string values to categorize programming languages:

```codebyte/csharp
using System;

class SwitchWithStrings
{
  public static void Main(string[] args)
  {
    // Declare the programming language directly
    string language = "python".ToLower();

    string category;

    switch (language)
    {
      case "c#":
      case "java":
      case "c++":
        category = "Object-Oriented Programming Language";
        break;
      case "f#":
      case "haskell":
      case "clojure":
        category = "Functional Programming Language";
        break;
      case "sql":
      case "prolog":
        category = "Declarative Programming Language";
        break;
      case "python":
      case "ruby":
      case "javascript":
        category = "Scripting Language (with OOP features)";
        break;
      default:
        category = "Unknown or uncategorized language";
        break;
    }

    Console.WriteLine($"{language} is categorized as: {category}");
  }
}
```

This example illustrates how the switch statement can work with string values (after converting to lowercase for case insensitivity). It categorizes different programming languages based on their primary paradigm.

## Frequently Asked Questions

### 1. Can I use variables in case labels?

No, case labels must be constant expressions, not variables. The values must be known at compile time.

### 2. Does C# support fall-through between cases like in C or Java?

No, C# requires a terminating statement (like `break`, `return`, or `throw`) for each case to prevent accidental fall-through. To deliberately fall through, you can use `goto case value` to jump to another case.

### 3. Can switch statements work with floating-point values?

No, switch statements in C# cannot directly work with floating-point types like `float` or `double`. They only work with integral types, string, bool, and enum types.

### 4. What's the difference between switch and if-else if statements?

Switch statements are generally more readable and efficient when comparing a single value against multiple constants. If-else chains are more flexible for complex conditions, but can become unwieldy with many cases.

### 5. Is the default case required in switch statements?

No, the default case is optional. If no default case is provided and none of the case values match the expression, no code in the switch block will execute.
