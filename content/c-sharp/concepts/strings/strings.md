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

> **Note:** Strings are immutable, which means they do not change once created. Methods and operators that appear to change a string in a variable really assign a new string to the variable and release the old string for garbage collection. This is important to realize when using refrences, since a refrence pointing to a string that's subsequently "modified" will continue to point to the original unmodified string.

## Declaring and Initalizing

There are many different ways to declare and initalize a string in C#. The following example lists a number of them:

```cs
// Declare without initalizing.
string myString1;

// Declare using System.String.
System.String myString2;

// Initalize with a string literal.
string myString3 = "Hello World!";

// Local variables can use implicit typing.
var localString = "Still a strongly-typed string.";

// The string constructor can create a string from a char*, char[] or sbyte*.
char source = {'1','2','3','A','B','C'};
string myString4 = new string(source);
```

> **Note:** The `new` operator is only used to create a string when initalizing with an array of `char`.
>
> **Note:** It is best practice to initalize an empty string with the `System.String.Empty` constant value or the `""` string literal rather than with `null` to avoid an unwanted `NullRefrenceException`.

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

| Escape Sequence | Character Name |
|-----------------|----------------|
| `\'` | Single quote |
| `\"` | Double quote |
| `\\` | Backslash |
| `\0` | Null |
| `\n` | New line |
| `\r` | Carrage return |
| `\t` | Horizontal tab |
| `\uNNNN` | UTF-16 Unicode character (range `\u0000` - `\uFFFF`) |
| `\U00NNNNNN` | UTF-32 Unicode character (range `\U00000000` - `\U0010FFFF`) |

### Verbatim String Literals

Verbatim string literals are a convinence used for multi-line strings, strings that contain backslashes or embedded double quotes.  Verbatim string literals begin with `@"` rather than just `"` as with a quoted literal string.

> **Note:** Use two double quotes (`""`) to include a double quote in a Verbatim string literal.

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

Raw string literals were introduced with C# 11.
