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

A list in Python is a datatype used to store a collection of objects. To define a list we can assign a variable to a pair of square brackets (`[]`) or the `list()` keyword. 

## Example

```py
#Defining empty lists
list1 = [] 
list2 = list()
```

Lists are always ordered and can contain different types of objects all in the same sequence(strings, integers, booleans etc.) 

## Example

```py
#creating lists with values in them
list1 = ['one',2,'three']
list2 = [True,False,False,True,False]
list3 = [1,2,3,4,5,6,7,8,9]
list4 = ['one',2,True]
list5 = ['one','two','three']
```

Lists are a mutable data type and are therefore good choices for dynamic data like additions and subtractions to groups of items. There are more than a dozen built in methods for lists in python. These methods make it easier to perform functions on the collection of objects contained within. 

## An Example of a list using one of its built in methods to change the data within

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
