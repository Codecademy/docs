---
Title: '.Compare()'
Description: 'Compares two specified strings in alphabetical order and returns an integer that represents their relative order.'
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

The **`.Compare()`** method is a string method that compares two specified strings in alphabetical order and returns an integer that represents their relative order.

## Syntax

```pseudo
String.Compare(string1, string2, `ignoreCase`);
```

The `.Compare()` method is called on the `String` class. It takes two strings, `string1` and `string2`, as arguments and compares them alphabetically.

> **Note:** The third argument, `ignoreCase`,  is an optional `boolean` parameter. By default, when it is left out or it is set to `false`, the `.Compare()` method case sensitive. Setting the `ignoreCase` to `true` makes the `.Compare()` method to ignore the letter case during comparison.

The `.Compare()` method returns an `integer` that represents the relative order of `string1` and `string2`:

- `0`, if their position is the same (`string1` and `string2` are the same)
- a negative `integer`, if `string1` comes before `string2` in alphabetical order
- positive `integer`, if `string2` comes before `string1` in alphabetical order

## Example

In the following example, the `.Compare()` method is used to compare `str1`  with `str2` and `str3`, and the returned integer is printed to the console:

```cs
using System;

public class Example {
  public static void Main (string[] args) {
    string str1 = "Pizza", str2 = "pizza", str3 = "waffles";

    Console.WriteLine(String.Compare(str1, str2));
    Console.WriteLine(String.Compare(str1, str3));
  }
}
```

In the first case, the two strings are not the same, and the method is case sensitive. `str2` comes first alphabetically, as it is small case. In the second case, `str1` comes before `str3`. This example results in the following output:

```shell
1
-1
```

## Codebyte Example

In the following runnable example, the `.Compare()` method is used to determine the alphabetical order of `string1` and `string2`, while the letter casing is ignored. The returned integer is printed to the console with the `WriteLine()` method.

```codebyte/csharp
using System;

public class Example {
  public static void Main (string[] args) {
    string string1 = "SUPERCALIFRAGILISTICEXPIALIDOCIOUS", string2 = "supercalifragilisticexpialidocious";

    Console.WriteLine(String.Compare(string1, string2, true));
  }
}
```
