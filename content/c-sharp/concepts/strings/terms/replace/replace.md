---
Title: '.Replace()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns a new string where every instance of a certain character or substring in the original string is swapped with a different specified character or substring.' # Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Strings'
  - 'Methods'
  - 'Characters'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **`.Replace()`** method returns a new string where every instance of a certain character or substring in the original string is swapped with a different specified character or substring.

## Syntax

```pseudo
// Replaces old character with new character.
myString.Replace(char oldChar, char newChar);

// Replaces old string with new string.
myString.Replace(string oldString, string newString);
```

The `.Replace()` method takes the original string returns a new string with the following changes in it:

- All occurrences of indicated character are replaced with another one.
- All occurrences of indicated string are replaced with another one.

> **Note:** If `oldChar` or `oldString` is not found in the original string, than the method returns the string without changes.

<!---Blank-->

> **Note:** If `newChar` or `newString` is `null`, than all occurrences of `oldChar` or `oldString` are removed.

<!---Blank-->

> **Note:** The `.Replace()` method does not modify the original `string`, it always produces a new string.

## Example 1

The following example takes the `string` named `oldString`, replaces all the hyphen characters `-` with comma characters `,`, and returns the new `string` named `newString`.

```cs
using System;

public class Example
{
    public static void Main(string[] args)
    {
        string oldString = "A-B-C-D-E-F-G-H-I";
        string newString = oldString.Replace('-', ',');
        Console.WriteLine($"Old string: \"{oldString}\"");
        Console.WriteLine($"New string: \"{newString}\"");
    }
}
```

It produces the following output to the console:

```shell
Old string: "A-B-C-D-E-F-G-H-I"
New string: "A,B,C,D,E,F,G,H,I"
```

## Example 2

The following example takes the `string` named `wrongString`, replaces the word `fourth` with the word `third`, and returns the new `string` named `rightString`.

```cs
using System;

public class Example
{
    public static void Main(string[] args)
    {
        string wrongString = "Earth is the fourth planet from the Sun.";
        string rightString = wrongString.Replace("fourth", "third");
        Console.WriteLine($"False statement: {wrongString}");
        Console.WriteLine($"True statement: {rightString}");
    }
}
```

It produces the following output to the console:

```shell
False statement: Earth is the fourth planet from the Sun.
True statement: Earth is the third planet from the Sun.
```

## Codebyte Example

In the following runnable example, the `.Replace()` method is used to create a `replacedString` from the `originalString`. Then both strings are printed to the console:

```codebyte/csharp
using System;

class Program
{
    static void Main()
    {
        string originalString = "Hello, world!";
        string replacedString = originalString.Replace("world", "universe");

        Console.WriteLine("Original string: " + originalString);
        Console.WriteLine("Replaced string: " + replacedString);
    }
}
```
