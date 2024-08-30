---
Title: '.split()'
Description: 'Converts a string to a list. It takes a specified delimiter and a maximum number of items to split as optional parameters. '
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Strings'
  - 'Methods'
  - 'Functions'
  - 'Formatting'
  - 'Lists'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The **`.split()`** method returns a new [list](https://www.codecademy.com/resources/docs/python/lists) of substrings based on a given string.

## Syntax

```pseudo
string.split(delimiter, maxsplit)
```

The `.split()` method takes the following optional parameters:

- A `delimiter` that is either a [regular expression](https://www.codecademy.com/resources/docs/python/regex) or a string that is composed of one or more characters.
- The value `maxsplit` specifies the total number of splits that can occur, and the remainder of the string is returned as the final element of the list. The default value is `-1`, which means an unlimited number of splits.

If no parameters are passed to the `.split()` method, a list is returned with the `string` as the sole element.

> **Note**: An empty string (`""`) cannot be used as a `delimiter` to return a list of single characters from a given `string`. Using the built-in `list()` method can achieve this.

## Examples

If the parameters of `.split()` are left blank, the delimiter will default to whitespace and the maximum number of items to split will be infinite.

```py
my_string = "I like waffles from Belgium"

my_list = my_string.split()

print(my_list)
# Output: ['I', 'like', 'waffles', 'from', 'Belgium']
```

The next example shows the following:

- It is possible to use escape characters (tab `\t`, newline `\n`, etc.) as delimiters (in `list_a`).
- The `maxsplit` can control the size of the returned `list_b`.

```py
multiline_string = """
Beets
Bears
Battlestar Galactica
"""

menu = "Breakfast|Eggs|Tomatoes|Beans|Waffles"

list_a = multiline_string.split("\n")

list_b = menu.split("|", 3)

print(f"Using escape characters: {list_a}")

print(f"Limited number of list items: {list_b}")
```

The following output is shown below:

```shell
Using escape characters: ['', 'Beets', 'Bears', 'Battlestar Galactica', '']
Limited number of list items: ['Breakfast', 'Eggs', 'Tomatoes', 'Beans|Waffles']
```

## Codebyte Example

The following example showcases a regular expression (`r"ea"`) being applied as a delimiter for the `.split()` method:

```codebyte/python
example_string = "Bears, beans, and breakfast."

regex_string = r"ea"

print(example_string.split(regex_string))
```
