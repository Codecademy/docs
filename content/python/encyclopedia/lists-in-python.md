---
Title: "Lists in Python"
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
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/data-science"
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

## Built-in List Methods

There are eleven built-in list methods in Python. These methods make it easier to perform functions on the collection of objects contained within.

- `.append()` Adds an element at the end of the list
- `.clear()` Removes all the elements from the list
- `.copy()`  Returns a copy of the list
- `.count()` Returns the number of elements with the specified value
- `.extend()` Add the elements of a list (or any iterable), to the end of the current list
- `.index()` Returns the index of the first element with the specified value
- `.insert()` Adds an element at the specified position
- `.pop()` Removes the element at the specified position
- `.remove()` Removes the first item with the specified value
- `.reverse()` Reverses the order of the list
- `.sort()` Sorts the list

## Using a Built-in List Method

```py
friends = ['Sue', 'Bob']

print(type(friends))
# Output: <type 'list'>

another_friend = 'Anna'

# Use a `list()` built in method to add Anna to the list of friends.
my_list_of_friends = friends.append(another_friend)

print(my_list_of_friends)
# Output: ['Sue', 'Bob', 'Anna']
```
