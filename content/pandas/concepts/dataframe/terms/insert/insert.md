---
Title: '.insert()'
Description: Inserts into the DataFrame the provided column at the specified location.  
Subjects:
  - 'Data Science'
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Pandas'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`insert()`** method is used to insert into the DataFrame the provided column at the specified location.

## Syntax

```pseudo
DataFrame.insert(loc, column, value, allow_duplicates=_NoDefault.no_default)
```

- `loc` is the integer representation of the insertion index.  This value must be greater than or equal to 0 and less or equal to the number of columns currently in the DataFrame.
- `column` is the label associated with the inserted column.
- `value` is the content of the inserted column.
- `allow_duplicates` is a boolean that allows duplicate column labels if set to *True*.

## Example

[Text, code, images, etc. about example 1]

## Codebyte Example (if applicable)

We can currently support:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
