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

[**`add()`** function for Python sets. The `add()` function will insert a new element into a set.]

## Syntax

[To use `add()` we need to apply it to  an existing set]
```py
    set-1={1,2,4,5}
```
[Here we have a simple set of numbers. To insert an aditional number we can use the `add()` function.]
```py
    set-1.add(3)   
```
[After which the number 3 will be inserted into `set-1` becuase it does not already exist in the set.]
```py
    print(set-1)
```

## Example with a duplicate

[Should the element already exist in the set nothing will happen.]
```py
    set-dup={1,2,3,4,5}
    set-dup.add(3)

    print(set-dup)
```

## Common Errors

[If no value is put in the parenthesis for `add()` it will cause an error.]
[Only one element is allowed to be used with `add()`.]
[In order to add to an empty set the set must be properly declared]
```py
    set1=set()
    set1.add(1)

    print(set1)
```

## Codebyte Example 
```codebyte/python
    sets={1,2,3}
    sets.add(5)

    print(sets)
```
