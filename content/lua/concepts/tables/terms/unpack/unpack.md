---
Title: 'unpack()'
Description: 'Takes a table and returns the elements of that table as separate values.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Tables'
  - 'Functions'
CatalogContent:
  - 'learn-lua'
  - 'paths/computer-science'
---

The **`unpack()`** function takes a table and returns the elements of that table as separate values.

## Syntax

```pseudo
result1, result2, ..., resultn = table.unpack(someTable)
```

- `someTable`: The table to be unpacked.
- `result1`, `result2`, `...`, `resultn`: Variables that will receive the individual elements from the table.

## Example

The following example uses the `unpack()` function to take the table `fruit` and unpack its elements into the variables `fruit_option1`, `fruit_option2`, `fruit_option3`. Each variable is assigned one of the elements from the table:

```lua
  fruit = {'orange','apple','watermelon'}
  fruit_option1,fruit_option2,fruit_option3 = table.unpack(fruit)
  print("Type1:",fruit_option1)
  print("Type2:",fruit_option2)
```

The example will result in the following output:

```shell
Type1:  orange
Type2:  apple
```

## Codebyte Example

This example uses the `unpack()` function with table called `sale_tablet`.

```codebyte/lua
  sale_tablet = {'Ipad_11_pro','Apple','%10'}
  tablet_model,brand,sale = unpack(sale_tablet)
  print("-> Sale:",sale)
  print("-> Model:",table_model)
```
