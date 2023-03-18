---
Title: 'Strings'
Description: 'A string is an instance of the System.String object in C# and represents an immutable sequence of Char objects.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Data Types'
  - 'Strings'
  - 'Objects'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

A **`string`** is an instance of the `System.String` object in C# and represents an immutable sequence of `Char` objects. Unlike other languages, there's no null-terminating character at the end of a C# string, so a C# string can contain embedded null characters. The `string` keyword in C# is an alias for `System.String` and can be used even without `using System;`.

> **Note:** Strings are immutable, which means they do not change once created. Methods and operators that appear to change a string in a variable really assign a new string to the variable and release the old string for garbage collection. This is important to realize when using references, since a reference pointing to a string that's subsequently "modified" will continue to point to the original unmodified string.

## Declaring and Initializing

There are many different ways to declare and initialize a string in C#. The following example lists a number of them:

```cs
// Declare without initializing.
string myString1;

// Declare using System.String.
System.String myString2;

// Initialize with a string literal.
string myString3 = "Hello World!";

// Local variables can use implicit typing.
var localString = "Still a strongly-typed string.";

// The string constructor can create a string from a char*, char[] or sbyte*.
char[] source = {'1','2','3','A','B','C'};
string myString4 = new string(source);
```

The `new` operator is only used to create a string when initializing with an array of `char`.

> **Note:** It is best practice to initialize an empty string with the `System.String.Empty` constant value or the `""` string literal rather than with `null` to avoid an unwanted `NullReferenceException`.

## String Literals

C# has three different types of string literals.

### Quoted String Literals

Quoted string literals are contained within a pair of double quote characters (`"`) on a single line. They require escape characters to include special characters and line breaks.

```cs
string myString1 = "I'm a quoted string literal.";

string myString2 = "I have an embedded\r\nline break.";
/* The resulting string:
I have an embedded
line break.
*/
```

These are some of the escape sequences used in string literals:

| Escape Sequence | Character Name                                               |
| --------------- | ------------------------------------------------------------ |
| `\'`            | Single quote                                                 |
| `\"`            | Double quote                                                 |
| `\\`            | Backslash                                                    |
| `\0`            | Null                                                         |
| `\n`            | New line                                                     |
| `\r`            | Carriage return                                              |
| `\t`            | Horizontal tab                                               |
| `\uNNNN`        | UTF-16 Unicode character (range `\u0000` - `\uFFFF`)         |
| `\U00NNNNNN`    | UTF-32 Unicode character (range `\U00000000` - `\U0010FFFF`) |

### Verbatim String Literals

Verbatim string literals are a convenience used for multi-line strings, strings that contain backslashes, or embedded double quotes. Verbatim string literals begin with `@"` rather than just `"` as with a quoted literal string.

> **Note:** Use two double quotes (`""`) to include a double quote in a verbatim string literal.

```cs
string msPath = @"C:\Users\JSmith\Documents\Readme.txt";
/* The resulting string:
C:\Users\JSmith\Documents\Readme.txt
*/

string myString1 = @"I have an embedded
line break";
/* The resulting string:
I have an embedded
line break.
*/

string myString2 = @"This string says, ""Hello World!"".";
/* The resulting string:
This string says, "Hello World!".
*/
```

### Raw String Literals

Raw string literals were introduced with C# 11. It preserves whitespace, allows the use of embedded line breaks, and can include any character that would otherwise require an escape sequence. It allows the raw string literal to appear in code exactly how it will be stored and/or displayed.

Raw string literals obey the following rules:

- They begin and end with at least three quote characters (`"""`). More than three can be used in instances where there are three consecutive quote characters in the string itself.
- A single line string requires the opening and closing character sequences on the same line.
- Multi-line strings require the opening and closing character sequences to each be on their own line.
- In multi-line strings, whitespace to the right of the opening character sequence is omitted.
- In multi-line strings, whitespace to the left of the closing character sequence is removed from every line of the string.

```cs
string myString1 = """Using "Hello World!" as an example.""";
/* The resulting string:
Using "Hello World!" as an example.
*/

string myString2 = """
Using
  "Hello
    World."
     as a
       Example.
""";
/* The resulting string:
Using
  "Hello
    World."
     as a
       Example.
*/

string myString3 = """"
Raw string literal example:
string temp = """text.""";
"""";
/* The resulting string:
Raw string literal example:
string temp = """text.""";
*/

```

## String Interpolation

Interpolated strings contain expressions delimited by curly braces (`{...}`) that are evaluated when the string literal is evaluated and used in place of the whole expression. It can improve the readability and maintainability of code. An interpolated quoted string literal is identified by a preceding `$` character.

```cs
string name = "John";
string greet = @"""Hello World!""";
string myString = $"{name} says, {greet}";
/* The resulting string:
John says, "Hello World!"
*/
```

Interpolation can be used with verbatim string literals, preceding them with `@$` or `$@`.

```cs
string name = "John";
string greet = @"""Hello World!""";
string myString = @$"{name}
  says,
    {greet}";
/* The resulting string:
John
  says,
    "Hello World!"
*/
```

Interpolation can also be used with raw string literals. They are preceded by one or more `$` characters. The number of `$` used indicates the number of curly braces used to enclose interpolated expressions, sequences of curly braces less than that number will be included in the output.

```cs
string name = "John";
string greet = @"""Hello World!""";
string myString = $""""
{name}
  says,
    {greet}
"""";
/* The resulting string:
John
  says,
    "Hello World!"
*/
```

## Codebyte Example

The following is a runnable example showing string interpolation and verbatim string literals.

> **Note:** When editing this codebyte, be aware that the version of C# being used does not permit raw string literals.

```codebyte/csharp
using System;

public class Program
{
  public static void Main()
  {
    string name = "John";
    string greet = @"""Hello World!""";
    string myString = @$"{name}
  says,
    {greet}";

    Console.WriteLine(myString);
  }
}
```
