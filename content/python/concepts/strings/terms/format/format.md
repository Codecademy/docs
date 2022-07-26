---
Title: '.format()'
Description: 'Returns a string with values inserted via placeholders.'
Subjects:
  - 'Data Science'
  - 'Computer Science'
Tags:
  - 'Formatting'
  - 'Strings'
  - 'Methods'
  - 'Functions'
CatalogContent:
  - 'learn-python-3'
  - 'paths/analyze-data-with-python'
---

The **`.format()`** string function returns a string with values inserted via placeholders.

Python's built-in string function `.format()` converts strings by inserting values passed through placeholders.

`{}` is a placeholder. All the arguments specified in the format method will be replacing the placeholders in the string.

## Syntax

```pseudo
string = "{placeholder_1} {placeholder_2}"
string.format(placeholder_1, placeholder_2)
```

When using multiple `placeholder_` values, they are inserted into the `string` in the order they appear in `.format()`. Each value in `.format()` is assigned with an index starting from `0`. When the index is called in the placeholder, the corresponding value will be placed in.

## Examples

Using empty placeholders `{}`:

```py
phrase = "I like to eat {}s and {}s."

formatted_phrase = phrase.format("apple", "orange")

print(formatted_phrase)
```

The resulting output shows that the string arguments `"apple"` and `"orange"` are placed into `new_string` in the order they appear in `.format()`:

```shell
I like to eat apples and oranges.
```

The next example features numbered placeholders `{0, 1, 2, ..., n}`:

```py
phrase_1 = "{0} before the {1}"

phrase_2 = "{1} before the {0}"

print(phrase_1.format("horse", "cart"))

print(phrase_2.format("horse", "cart"))
```

The resulting output shows how the numbered placeholders assigned in `.format()` are zero-indexed:

```shell
horse before the cart
cart before the horse
```

This example showcases keywords being used as placeholders:

```py
phrase_1 = "I like to eat {food1}s and {food2}s."
new_phrase_1 = phrase_1.format(food1="apple", food2="orange")

phrase_2 = "I like to eat {food2}s and {food1}s."
new_phrase_2 = phrase_2.format(food1="apple", food2="orange")

print(new_phrase_1)
print(new_phrase_2)
```

Similar to the previous example, values in `.format()` can be used with keyword arguments. When the keyword is called in the placeholder, the corresponding value will be placed in:

```shell
I like to eat apples and oranges.
I like to eat oranges and apples.
```

## Codebyte Example

This last example combines both numbered and keyword placeholders in a single `.format()` statement:

```codebyte/python
string1 = "I like to eat {food1} and {0}"
new_string1 = string1.format("orange", food1="apple")

string2 = "I like to eat {0} and {food1}"
new_string2 = string2.format("orange", food1="apple")

print(new_string1)
print(new_string2)
```
