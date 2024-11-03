---
Title: '.Remove()'
Description: 'Removes a certain number of characters from a string at a defined index.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Elements'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **Remove()** method removes characters from a specific position in a string. The original string remains unchanged, and the modified string is returned

## Syntax

```pseudo
// Removes characters from StartIndex to the end.
Remove(int StartIndex);

// Removes characters starting from StartIndex, equal to the number specified by count.
Remove(int StartIndex, int count);
```

- `StartIndex` is the specified position from where the removal should start.
- `int count` is the number of characters to be removed.

## Example

The following example shows how to use the `.Remove()` method.

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

The output of the following code:

```cs
New string1: ABCDE
New string2: ABHIJ
```

## Codebyte Example

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
