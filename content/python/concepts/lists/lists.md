---
Title: "Lists"
Subjects:
  - "Computer Science"
  - "Data Science"
  - "Web Development"
Tags:
  - "Lists"
  - "Arrays"
  - "Objects"
  - "Data Structures"
  - "Data Types"
CatalogContent:
  - "learn-python-3"
  - "paths/computer-science"
---

A list in Python is a data type used to store a collection of objects. 

Lists are always ordered and can contain different types of objects, such as strings, integers, booleans, etc. Lists are a mutable data type and therefore a good choice for dynamic data (adding and subtracting to lists).

## Creating a List

There are multiple ways to define a list in Python. We can either assign a variable to a pair of square brackets (`[]`) with or without values, or we can assign a variable to the `list()` keyword and afterwords pass in its list items. 

Defining empty lists:

```py
list1 = [] 
list2 = list()
```

Creating lists with values in them:

```py
list1 = ['one', 2, 'three']
list2 = [True, False, False, True, False]
list3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
list4 = ['one', 2, True]
list5 = ['one', 'two', 'three']
```

## Using a Built-in List Method

```py
friends = ['Sue', 'Bob']

print(type(friends))
# Output: <class 'list'>

# Use a built-in method to add Anna to the list of friends.
friends.append('Anna')

print(friends)
# Output: ['Sue', 'Bob', 'Anna']
```
