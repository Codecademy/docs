---
Title: 'Arrays'
Description: 'Arrays are a data structure that holds a collection of items. PowerShell provides many ways to access, update, and manipulate array items.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Bash/Shell'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Data Structures'
  - 'Index'
  - 'Lists'
  - 'Operators'
  - 'Variable Types'
CatalogContent:
  - 'learn-powershell'
  - 'paths/computer-science'
---

**Arrays** are a [data structure](https://www.codecademy.com/resources/docs/general/data-structures) that holds a collection of items. Items can be of the same type or multiple types.

## Creating an Array

Separating items by commas (`,`) is the simplest way to create an array in PowerShell.

```shell
$my_arr = 25, "Codecademy", 1, $False
```

Alternatively, the array subexpression operator `@( )` can be used. Anything placed within the parentheses is treated as an item of the array.

```shell
# 3 elements
$arr_1 = @($True, 5, (Get-Date).DateTime)

# Empty Array
$arr_2 = @( )

# Multi-line Array
$arr_3 = @(
    "Uno"
    "Dos"
    "Tres"
)
```

## Accessing Array Items

The items in an array are accessed using their index, or their position in the array. Consider the array:

```shell
$colors = "red", "yellow", "black", "blue"
```

The indexes in PowerShell start at `0`.

| Index |   Value    |
| :---: | :--------: |
|  `0`  |  `"red"`   |
|  `1`  | `"yellow"` |
|  `2`  | `"black"`  |
|  `3`  |  `"blue"`  |

Brackets `[ ]` are used to access an item in an array. To access `"black"` in the `$colors` array, for example:

```shell
PS > $colors[2]
black
```

## Updating Array Items

Items can be updated — or changed – by utilizing indexes. To change the color `yellow` to `brown`, for example:

```shell
PS > $colors[1] = "brown"
PS > $colors
red
brown
black
blue
```

## Indexing

PowerShell offers flexibility when indexing items, such as:

- Multiple indexes: Separate indexes with commas to print multiple items.

```shell
PS > $colors[0,2]
red
black
```

- Range operator `..`: Print all items between two indexes (exclusive).

> **Note:** This syntax is exclusive since the stop index `3` is not included.

```shell
PS > $colors[1..3]
brown
black
blue
```

- Reverse range: Use range operator from a higher index to a lower index to print items in reverse order (inclusive).

> **Note:** This syntax is inclusive since both the start and stop indexes, `2` and `1`, are included.

```shell
PS > $colors[2..1]
black
brown
```

- Negative indexes: Items are referenced in reverse order where the last item has an index of `-1`.

```shell
PS > $colors[-1]
blue
```

## Iteration

Each array object has a method called `ForEach` which can be utilized to perform the same action on each of its items. PowerShell defines the variable `$PSItem` or just underscore `_` to refer to each item in the array.

```shell
PS > $colors.ForEach({ $PSItem.Length }) # $_.Length also works
3
5
5
4
```

The example above is printing the length of each string of our `colors` array. `red` has a length of `3`, `brown` is `5`, and so on.

## Array Operators

### Addition Operator

The addition operator `+` concatenates – or combines – two arrays.

```shell
PS > $fibonacci_1 = 0, 1, 1
PS > $fibonacci_2 = 2, 3, 5
PS > $fibonacci_1 + $fibonacci_2
0
1
1
2
3
5
```

### Multiplication Operator

The multiplication operator `*` copies the array a specified number of times.

```shell
PS > $fibonacci_2 * 2
2
3
5
2
3
5
```

### Containment Operators

Containment operators check whether or not an item is in an array and returns a boolean.

|    Operator    |            Syntax             |                   Example                   |
| :------------: | :---------------------------: | :-----------------------------------------: |
|  `-contains`   |  `<array> -contains <item>`   |  `$fibonacci -contains 4` returns `False`.  |
| `-notcontains` | `<array> -notcontains <item>` | `$fibonacci -notcontains 4` returns `True`. |
|     `-in`      |     `<item> -in <array>`      |     `5 -in $fibonacci` returns `True`.      |
|    `-notin`    |    `<item> -notin <array>`    |   `5 -notin $fibonacci` returns `False`.    |

### `-join`

The `-join` operator combines the items in an array into a string separated by a character or a string. Consider the following example:

```shell
PS > $fibonacci = 0, 1, 1, 2, 3, 5
PS > $fibonacci = $fibonacci -join "->"
PS > $fibonacci
0->1->1->2->3->5
PS > $fibonacci.GetType().Name
String
```

## Strongly Typed Arrays

Types can be casted onto arrays to force each item in the array to adhere to that type.

```shell
PS > [String[]]$fruits = "apple", "banana", "kiwi"
```

## Objects Arrays

Arrays can hold objects.

```shell
$dogs_arr = @(
    [PSCustomObject]@{Name = 'Rufus'; Age = 10}
    [PSCustomObject]@{Name = 'Miku'; Age = 2}
)
```

Each object in the array as well as its properties and methods can be accessed individually.

```shell
PS > $dogs_arr.ForEach({ $PSItem.Name + " is " + $PSItem.Age + " years old."})
Rufus is 10 years old.
Miku is 2 years old.
```

> **Note:** `$PSItem` can be replaced with its shorthand alias `$_`.
