---
Title: 'Switch'
Description: 'Switch statements execute a code block from a list of conditions if a condition is true.'
Subjects:
  - 'Code Foundations'
  - 'Web Development'
  - 'Mobile Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Control Flow'
  - 'Switch'
  - 'C#'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

**Switch** statements execute a code block from a list of `case` conditions for which the `expression` validates as `true`. Switch statements are similar to if/else statements.

## Syntax

```pseudo
switch (expression) 
{
  case alpha:
    // Code block
    break;
  case beta:
    // Code block
    break;
  default:
    // Code block
    break;
}
```

A `switch` statement includes one or more `case` conditions. The `case` conditions are evaluated in top-to-bottom order. If none of the `case` conditions evaluate to `true`, the `default` condition is executed. If no `default` is defined, the switch statement is bypassed.

## Properties

- `switch`: Definition of the `switch` statement.
- `expression`: The logic each `case` will be evaluated against.
- `case`: A value the `expression` is matched against. If the `case` matches the result of the `expression`, the code block within the `case` will be executed.
- `break` (recommended): Terminates the switch statement. Recommended at the end of each `case` and `default`. I.e. Once the code block within a `case` has been executed, terminate the `switch` statement.
- `default` (optional): The behavior executed if no `case` condition matches the `expression`.

## Codebyte Example

```codebyte/csharp
using System;

public class Example
{
  public static void Main(string[] args)
  {
  string favoriteTurtle = "Donatello";

  switch (favoriteTurtle) 
  {
    case "Leonardo":
      Console.WriteLine("Leads!");
      break;
    case "Donatello":
      Console.WriteLine("Does machines!");
      break;
    case "Raphael":
      Console.WriteLine("Cool, but rude!");
      break;
    case "Michelangelo":
      Console.WriteLine("Party dude!");
      break;
    default:
      Console.WriteLine($"{favoriteTurtle} sounds cool, but I'll bet they're not a ninja!");
      break;
  }
 }
}

// Output: "Does machines!"
```
