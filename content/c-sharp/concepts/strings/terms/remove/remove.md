---
Title: '.Remove()'
Description: 'Removes a specified number of characters from a string starting at a defined index and returns the modified string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Elements'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

In C#, the **`.Remove()`** method removes characters from a specific position in a string, starting at a given index. The original string remains unchanged, and the modified string is returned.

## Syntax

```pseudo
// Removes characters from startIndex to the end of the string.
string.Remove(int startIndex);
```

Or, alternatively:

```pseudo
// Removes a specified number of characters starting at startIndex.
string.Remove(int startIndex, int count);
```

- `startIndex`: The zero-based position in the string where removal begins.
- `count` (Optional): The number of characters to remove from the specified `startIndex`.

## Example

The following example shows how to use the `.Remove()` method:

```cs
using System;

public class RemoveExample
{
    public static void Main()
    {
        string baseStr = "ABCDEFGHIJ";

        string newStr1 = baseStr.Remove(5);
        string newStr2 = baseStr.Remove(2, 5);

        Console.WriteLine("New string1: " + newStr1);
        Console.WriteLine("New string2: " + newStr2);

    }
}
```

This example results in the following output:

```shell
New string1: ABCDE
New string2: ABHIJ
```

## Codebyte Example

Run the following codebyte example to understand how the `.Remove()` method works:

```codebyte/csharp
using System;

class RemoveMethod {

    public static void Main(string[] args)
    {
        string baseStr1 = "Codecademy helps you grow";
        string baseStr2 = "Improve skills with Codecademy";

        string removedStr1 = baseStr1.Remove(10);
        Console.WriteLine("Removed string1: " + removedStr1);

        string removedStr2 = baseStr2.Remove(8, 7);
        Console.WriteLine("Removed string2: " + removedStr2);

    }
}
```
