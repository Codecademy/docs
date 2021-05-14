<!--
---
Title:
  - "Lists in Python"
Subjects:
  - "code foundations"
  - "web development"
Tags:
  - "python"
  - "best practice"
  - "objects"
  - "arrays"
  - "data structures"
  - "data types"
  - "types"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/learn-how-to-code"
  - "https://www.codecademy.com/catalog/language/python"
  - "https://www.codecademy.com/learn/linear-data-structures"
---
-->

# Lists in Python

A list in Python is a data type used to store a collection of objects. There are multiple ways to define a list in Python. We can either assign a variable to a pair of square brackets (`[]`) with or without  values, or we can assign a variable to the `list()` keyword and afterwords pass in its list items. Lists are always ordered and can contain different types of objects (strings, integers, booleans etc.) Lists are a mutable data type and are therefore a good choice for dynamic data(adding and subtracting to lists). There are eleven built-in list methods in python. These methods make it easier to perform functions on the collection of objects contained within.


## Built-in list methods

1. append() Adds an element at the end of the list
2. clear() Removes all the elements from the list
3. copy()  Returns a copy of the list
4. count() Returns the number of elements with the specified value
5. extend() Add the elements of a list (or any iterable), to the end of the current list
6. index() Returns the index of the first element with the specified value
7. insert() Adds an element at the specified position
8. pop() Removes the element at the specified position
9. remove() Removes the first item with the specified value
10. reverse() Reverses the order of the list
11. sort() Sorts the list

## Creating lists

```py
#Defining empty lists
list1 = [] 
list2 = list()
#creating lists with values in them
list1 = ['one',2,'three']
list2 = [True,False,False,True,False]
list3 = [1,2,3,4,5,6,7,8,9]
list4 = ['one',2,True]
list5 = ['one','two','three']
```

## Using a built in list method

```py
friends = ['Sue','Bob']
print(type(friends))
# <type 'list'>
another_friend = 'Anna'
# we  use a `list()` built in method to add Anna to the list of friends.
my_list_of_friends = friends.append(another_friend)
print(my_list_of_friends)
# Output: ['Sue','Bob','Anna']
```
