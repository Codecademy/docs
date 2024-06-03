---
Title: 'Strings'
Description: 'Strings are character sequences that are either expressed in double quotes or as arrays that end with a null character \0.'
Subjects:
  - 'Computer Science'
  - 'Data Visualization'
Tags:
  - 'Programming'
  - 'Dynamic Programming'
CatalogContent:
  - 'paths/code-foundations'
  - 'paths/computer-science'
---

**Strings** in Julia are sequences of characters and can be defined using double quotes.

## Syntax

```pseudo
single_line_string = "Single Line"
multi_line_string = """
Line 1
Line 2
Line 3
.
.
.
Line n
"""
```

Strings in Julia are created by assigning a sequence of characters enclosed in double quotes (`""`) to a variable. The snippet above showcases two ways that string values are initialized:

- A sequence of characters, digits, and escape sequences surrounded in double quotes.
- A multi-line string surrounded in triple double quotes.

## Example

The following declaration and initialization create a string with the value `"Hello there, from Julia!"`:

```julia
message = "Hello there, from Julia!"
```

For a multi-line string, use triple double quotes:

```julia
multi_line_message = """
This is
a multi-line
string declaration.
"""
```

### Memory

Julia strings are managed by the garbage collector and are stored in memory as arrays of UTF-8 encoded characters. Each character may occupy more than one byte.

Here's a conceptual memory presentation for the string `"Julia"`:

```pseudo
Character |   'J'    'u'    'l'    'i'    'a'
Index     |    1      2      3      4      5
```

## Displaying a String

To display a string in Julia, the `println()` function can be used, followed by the string name.

### Display Example

The following is an example of displaying a string in Julia:

```julia
message = "Hello, world!"
println("Julia Bot: ", message)
```

The output would be:

```shell
Julia Bot: Hello, world!
```

## String Functions

The **Base** module in Julia provides a variety of functions for manipulating strings. Some commonly used functions include `length()`, `uppercase()`, `lowercase()`, `startswith()`, and `endswith()`.

### String Function Examples

Here are a few examples of string functions in Julia:

```julia
message = "Julia is fun!"

# Get the length of the string
len = length(message)  # 12

# Convert to uppercase
upper_msg = uppercase(message)  # "JULIA IS FUN!"

# Check if the string starts with "Julia"
starts = startswith(message, "Julia")  # true

# Check if the string ends with "fun!"
ends = endswith(message, "fun!")  # true
```

Julia's string manipulation functions make it easy to handle and process text data efficiently.
