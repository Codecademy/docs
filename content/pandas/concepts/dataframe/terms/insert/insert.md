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

The **`insert()`** method is used to insert into the DataFrame the provided column at the specified location, shifting all existing columns at or above the specified index to the right.

## Syntax

```pseudo
DataFrame.insert(loc, column, value, allow_duplicates=_NoDefault.no_default)
```

- `loc` is the integer representation of the insertion index.  This value must be greater than or equal to 0 and less or equal to the number of columns currently in the DataFrame.
- `column` is the label associated with the inserted column.
- `value` is the content of the inserted column.
- `allow_duplicates` is a boolean that allows duplicate column labels if set to `True`.

More details about `DataFrame.insert()`'s parameters:

|   Parameter   | Define                                                | Usage                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :-----------: | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    `loc`     | int. Insertion index                                 | Defines the index at which the new column will be inserted.                                                                                                                                                                                                                                                                           |
|    `column`     | str.                        | Sets the label for the new column.                                                                                                                                                                                                                                                                                          |
|     `value`     | Scalar, Series, or array-like.                        | Content to be inserted as the new column.  Note that passing a single value will set that same value for all rows.                                                                                                                                                 |
| `allow_duplicates` | bool. Default `False` | If `allow_duplicates` is set to `True`, the new column is allowed to have the same `column` value as a preexisting column. If `allow duplicates` is set to `False`, passing a column name that is associated with a preexisting column will throw a `ValueError`. |

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
