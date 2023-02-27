---
Title: 'Arrays'
Description: 'Arrays are a data structure that hold a collection of items. PowerShell provides many ways to access, update, and manipulate array items.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'PowerShell'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Data Structures'
  - 'Lists'
  - 'Variable Types'
CatalogContent:
  - 'learn-powershell'
  - 'paths/computer-science'
---

**Arrays** are a data structure that holds a collection of items. Items can be of the same type or multiple types.

## Creating an Array

Separating items by commas `,` is the simplest way to create an array in PowerShell.

```PowerShell
$my_arr = 25, "codecademy", 1, $False
```

Alternatively, the array subexpression operator `@( )` can be used. Anything placed within the parentheses is treated as an item of the array.

```PowerShell
$arr_1 = @($True, 5, (Get-Date).DateTime) # 3 elements
$arr_2 = @( )                             # Empty Array
$arr_3 = @(                               # Multi-line Array
    "Uno"
    "Dos"
    "Tres"
) 
```

## Accessing Array Items

The items in an array are accessed using their index, or their position in the array. Consider the array:

```PowerShell
$colors = "red", "yellow", "black", "blue"
```

The indexes in PowerShell starts at `0`.

|   Index   |       Value      |
| :-------: | :--------------: |
|    `0`    |    `"red"`       |
|    `1`    |    `"yellow"`    |
|    `2`    |    `"black"`     |
|    `3`    |    `"blue"`      |

Brackets `[ ]` are used to access an item in array. To access `"black"` in the `colors` array, for example:

```PowerShell
PS > $colors[2]
black
```

## Updating Array Items

Items can be updated — or changed – by utilizing indexes. To change the color `yellow` to `brown`, for example:

```PowerShell
PS > $colors[1] = "brown"
PS > $colors
red
brown
black
blue
```

## Indexing Tricks

PowerShell offers much more flexibility when indexing items such as
- Multiple indexes: separate indexes with commas to print multiple items

```PowerShell
PS > $colors[0,2]
red
black
```

- Range operator `..`: print all items between two indexes (exclusive)

```PowerShell
PS > $colors[1..3]
brown
black
blue
```

- Reverse range: use range operator from higher index to a lower index to print items in reverse order (inclusive)

```PowerShell
PS > $colors[2..1]
black
brown
```

- Negative indexes: items are referenced in reverse order where the last item has index `-1`

```PowerShell
PS > $colors[-1]
blue
```

## Iteration

Each array object has a method called `ForEach` which can be utilized to perform the same action on each of its items. PowerShell defines the variable `PSItem` or just underscore `_` to refer to each item in the array.

```PowerShell
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

```PowerShell
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

```PowerShell
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

|      Operator      |                Syntax               |                     Example                    |
| :----------------: | :---------------------------------: | :--------------------------------------------: |
|   `-contains`      |    `<array> -contains <item>`       |   `$fibonacci -contains 4` returns `False`     |
|   `-notcontains`   |    `<array> -notcontains <item>`    |   `$fibonacci -notcontains 4` returns `True`   |
|   `-in`            |    `<item> -in <array>`             |   `5 -in $fibonacci` returns `True`            |
|   `-notin`         |    `<item> -notin <array>`          |   `5 -notin $fibonacci` returns `False`        |

### `-join`

The `-join` operator combines the items in an array into a string separated by a character or a string. Consider the following example:

```PowerShell
PS > $fibonacci = 0, 1, 1, 2, 3, 5
PS > $fibonacci = $fibonacci -join "->"
PS > $fibonacci
0->1->1->2->3->5
PS > $fibonacci.GetType().Name
String
```

## Strongly Typed Arrays

Types can be casted onto arrays to force each item in the array adhere to that type.

```PowerShell
PS > [String[]]$fruits = "apple", "banana", "kiwi"
```

## Objects Arrays

Arrays can hold objects.

```PowerShell
$dogs_arr = @(
    [PSCustomObject]@{Name = 'Rufus'; Age = 10}
    [PSCustomObject]@{Name = 'Miku'; Age = 2}
)
```

Each object in the array as well its properties and methods can be accessed individually.

```PowerShell
PS > $dogs_arr.ForEach({ $_.Name + " is " + $_.Age + " years old."})
Rufus is 10 years old.
Miku is 2 years old.
```
