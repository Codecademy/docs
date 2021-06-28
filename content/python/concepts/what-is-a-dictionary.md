---
Title: "Dictionaries in Python"
Subjects:
  - "Computer Science"
  - "Web Development"
Tags:
  - "Best Practices"
  - "Inheritance"
  - "Methods"
  - "Structure"
  - "Encapsulation"
  - "Classes"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/data-science"
---

# Dictionaries in Python

A Python dictionary is a datatype used to store collections of objects in key-value pairs. As of Python version 3.7, dictionaries are ordered but in Python 3.6 and earlier, dictionaries are unordered. Python dictionaries are dynamic and mutable which means they can be changed. Keys must be unique in dictionaries but the values don't have to be.

If you assign a value to an already existing dictionary key it does not add the key a second time, but instead replaces the existing value. Dictionaries also have a number of built in methods which make it easier to manipulate the datastructure and objects containted within. To define a dictionary we assign a variable to a pair of curly braces `{}` or using the dictionary keyword eg.(`dictionary()`).  

## Creating a Python Dictionary

```py
#defifining empty lists
dictionary1 = {} 
dictionary2 = dict()
#creating dicts with values in them
dictionary3 = {'one':1,'two':2}
```

## Dictionaries can be referred to by using the key name
```py
#defifining empty lists
dictionary1 = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}  
print(dictionary1["brand"])
>>> Ford
```

## Using a built in dictionary method

```py
friends = {1:'Sue',2:'Bob'}
print(type(friends))
# <type 'list'>
another_friend = {3:'Anna'}
# we  use a `list()` built in method to add Anna to the list of friends.
my_list_of_friends = friends.append(another_friend)
print(my_list_of_friends)
# Output: {'1:Sue','2:Bob','3:Anna'}
```


