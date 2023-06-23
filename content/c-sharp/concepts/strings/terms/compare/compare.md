---
Title: '.Compare()'
Description: 'Compares the alphabetical order of two strings and returns an integer that represents their relative ranking.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Compare()`** method is a string method that compares the alphabetical order of two specified [`strings`](https://www.codecademy.com/resources/docs/c-sharp/strings) and returns an integer that represents their relative ranking.

## Syntax

```pseudo
String.Compare(string1, string2, ignoreCase);
```

- The `.Compare()` method is called on the `String` class. It takes two `string` type arguments, `string1` and `string2`, and compares them alphabetically.
- `ignoreCase` is an optional `boolean` type argument. By default the `.Compare()` method is case-sensitive. Passing `true` as the third argument makes the `.Compare()` method case-insensitive.

The `.Compare()` method returns an `integer` that represents the relative order of `string1` and `string2` in the alphabet:

- `-1` if `string1` comes before `string2`
- `0` if their position is the same (`string1` and `string2` are identical)
- `1` if `string2` comes before `string1`

## Example

In the following example, the `.Compare()` method compares `"Pizza"` with `"pizza"` and `"waffle"`. Then the `.WriteLine()` method prints the returned integer to the console:

```cs
using System;

public class Example {
  public static void Main (string[] args) {
    string str1 = "Pizza", str2 = "pizza", str3 = "waffle";

    Console.WriteLine(String.Compare(str1, str2));
    Console.WriteLine(String.Compare(str1, str3));
  }
}
```

In the first case, `"pizza"` comes before `"Pizza"` in alphabetical order, as it is lowercase and the method is case-sensitive. In the second case, `"Pizza"` comes before `"waffle"` in alphabetical order. This example results in the following output:

```shell
1
-1
```

## Codebyte Example

In the following runnable example, the `.Compare()` method determines the alphabetical order of `string1` and `string2`, while the letter casing is ignored. Finally, the `.WriteLine()` method prints the returned integer to the console.

```codebyte/csharp
using System;

public class Example {
  public static void Main (string[] args) {
    string string1 = "SUPERCALIFRAGILISTICEXPIALIDOCIOUS", string2 = "supercalifragilisticexpialidocious";

    Console.WriteLine(String.Compare(string1, string2, true));
  }
}
```
