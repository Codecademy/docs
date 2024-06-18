---
Title: '.add()' 

Description: 'Adds a specified element to a set, ensuring no duplicates.' 

Subjects: 
  - 'Code Foundations'
  - 'Computer Science'
  - 'Data Science'

Tags:
  - 'Collections'
  - 'Methods'
  - 'Sets'

CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---


In Python, the **`.add()`** method adds an element to a set if it is not alreadey present, maintaining the set's unique element property. If no value is put in the parenthesis for `add()` it will cause an error.

## Syntax

```py
    set.add(elem)
```

* `set`: Is the name of the set we wish to add to.
* `elem`: Is the element that we wish to add to the set. Can only add one element.


## Example

To use `add()` we need to apply it to  an existing set
```py
    #Make a set
    set_1={1,2,4,5}
    #Use .add() to add the number 3 to the set set_1
    set_1.add(3)
    #Print the  set with the additional element.
    print(set_1)
```
```shell
    print(set_1)
```

Should the element already exist in the set nothing will happen.
```py
    set_dup={1,2,3,4,5}
    set_dup.add(3)

    print(set_dup)
```

```shell
    print(set_dup)
```

## Common Errors


Only one element is allowed to be used with `add()`.
In order to add to an empty set the set must be properly declared
```py
    set1=set()
    set1.add(1)

    print(set1)
```

## Codebyte Example 
```codebyte/python
    numbers={1,2,3}
    numbers.add(5)

    print(numbers)
```
