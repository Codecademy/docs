---
Title: '.Join()'
Description: 'Joins elements of a collection into a single string with a specified separator.'
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

The **`.Join()`** method concatenates an array or a collection of strings into a single string, with a specified separator inserted between each element.

This method is particularly useful for formatting lists, such as comma-separated values or readable sentences.

## Syntax

```pseudo
string.Join(string separator, IEnumerable<string> values)
```

- `separator`: A string to insert between each element. If empty, elements are joined with no separator.
- `values`: An array or collection of strings to concatenate. `null` values in the collection are replaced with empty strings.

## Example

This example demonstrates how `.Join()` uses a comma and space (`,`) as the separator to create a formatted to-do list.

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

This example results in the following output:

```shell
Today's Codecademy study plan: Complete C# lesson, Review notes, Practice coding exercises, Read documentation
```

## Codebyte Example

The following example demonstrates how `.Join()` combines a collection of course names using an ampersand (`&`) to produce a readable list.

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
