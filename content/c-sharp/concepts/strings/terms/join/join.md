---
Title: '.Join()'
Description: 'JJoins elements of a collection into a single string with a specified separator, ideal for creating formatted lists from arrays or enumerable types.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Characters'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`Join()`** method concatenates an array or a collection of strings into a single string, with a specified separator inserted between each element. This is particularly useful for creating formatted strings, such as comma-separated lists, from collections of data. data.

## Syntax

```pseudo
string.Join(string separator, IEnumerable<string> values)
```

- `separator`: The string to insert between each element.
- `values`: The array or collection of strings to join together.

## Example

In this example, `.Join()` uses a comma and space (”, “) as the separator to create a formatted to-do list. The output is a concise list of study activities for the day.

```cs
using System;

class Program
{
    static void Main()
    {
        string[] studyTasks = { "Complete C# lesson", "Review notes", "Practice coding exercises", "Read documentation" };

        // Using .Join() to create a sequential to-do list with ", " as the separator
        string toDoList = string.Join(", ", studyTasks);

        Console.WriteLine("Today's Codecademy study plan: " + toDoList);
    }
}
```

The above example gives the following output:

```shell
Today's Codecademy study plan: Complete C# lesson, Review notes, Practice coding exercises, Read documentation
```

## Codebyte Example

The following example demonstrates how `.Join()` combines a collection of course names using an ampersand (&) to produce readable list.

```codebyte/csharp
using System;

public class Program
{
    public static void Main()
    {
        string[] languages = { "C#", "Python", "Java" };
        string codecademyCourses = string.Join(" & ", languages);

        Console.WriteLine("Popular Codecademy courses: " + codecademyCourses);
    }
}
```
