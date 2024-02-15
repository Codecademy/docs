---
Title: .casefold()
Description: 'Returns a copy of the string with all characters in lowercase.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The `.casefold()` method returns a copy of a string with all characters in lowercase. It is similar to `.lower()`, but whereas that method deals purely with ASCII text, `.casefold()` can also convert Unicode characters.

## Syntax

```py
"String".casefold() # Output: string
```

## Example 1

Below is an example of `casefold()` being used to set all characters in a string to lowercase:

```py
my_string_1 = "THIS SHOULD ALL BE IN LOWERCASE!"
print(my_string_1.casefold())
```

The output would be:

```pseudo
this should all be in lowercase!
```

## Example 2

```py
my_string_2 = "this Should ALSO Be Entirely In Lowercase!"
print(my_string_2.casefold())
```

The output would be:

```pseudo
this should also be entirely in lowercase!
```

## Codebyte Example

`.casefold()` can convert a wider scope of characters than `.lower()` can, including characters unique to human languages. Take the German lowercase letter "ß", for example. While `.lower()` cannot convert it, `.casefold()` can convert it to "ss":

```codebyte/python
text = "Straße"

print(text.casefold())
```
