---
Title: 'hash()'
Description: 'Returns the hashed value if possible.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

Returns the hashed value if possible.

## Syntax

```py
hash(object)
```

object : The object which we need to convert into hash. returns : Returns the hashed value if possible.

## Example 1

The following example uses `hash()` function that returns the hash value of an object. This makes creating the hash of an object quite simple in Python.:

```codebyte/python
print("The integer hash value is : " + str(hash(4)))
# Output: The integer hash value is : 4
```

```codebyte/python
print("The string hash value is : " + str(hash('GeeksforGeeks')))
# Output: The string hash value is : -5570917502994512005
```

```codebyte/python
print("The float hash value is : " + str(hash(24.56)))
# Output: The float hash value is : 1291272085159665688
```

## Example 2

The `map()` for immutable tuple object:

```codebyte/python
print("The tuple hash value is : " + str(hash((1, 2, 3, 4, 5))))
# Output: The tuple hash value is : 8315274433719620810
```

## Example 3

The `map()` on the mutable object:

```codebyte/python
print("The list hash value is : " + str(hash([1, 2, 3, 4, 5])))
```
Exceptions :
```
Traceback (most recent call last):
  File "/home/eb7e39084e3d151114ce5ed3e43babb8.py", line 15, in
    print ("The list hash value is : " + str(hash(list_val)))
TypeError: unhashable type: 'list'
```

```codebyte/python
print(hash([1, 2, 3, 4]))
# Output: TypeError: unhashable type: 'list'
```

`hash()` method used by one immutable object, if we use this on a mutable object like list, set, dictionaries then it will generate an error.