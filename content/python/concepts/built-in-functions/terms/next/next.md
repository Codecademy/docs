---
Title: 'next()'
Description: 'Returns the next element/value from an iterable object.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Functions'
  - 'Methods'
  - 'Collections'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

The **`next()`** function returns the next element from an [iterator](https://www.codecademy.com/resources/docs/python/iterators) object.


## **Syntax**

```py
next(iterator_name, [default_parameter])
```
***`Parameters:`*** 
+ iterator_name: name given to the iterator that contain the set of values.
+ default_parameter: [Optional], default value to be printed if end of iterator is reached.

***`Return:`*** 
+ returns next element/value from the iterable object.
    + _if missing prints the default value_
    + _if default value is not set, triggers a StopIteration error_

## **Example 1**

This code iterates a list containing four elements, printing each on screen by means of `next()` function.

```codebyte/python
listems = ['Hi', 27, 'Python', 10] # Here's the initial item's list

listemsIt = iter(lisitems) # First of all, we need to convert list into an iterator
print(listemsIt) # Shows the object reference of the iterator created

print(next(listemsIt)) # Output on screen: Hi

print(next(listemsIt)) # Output on screen: 27

print(next(listemsIt)) # Output on screen: Python

print(next(listemsIt)) # Output on screen: 10
```

## **Example 2**

This code iterates the same list, but preventing it from aborting the program using a default parameter.

```codebyte/python
listems = ['Hi', 27, 'Python', 10] # Here's the initial item's list

listemsIt = iter(lisitems)

print(next(listemsIt, "That's all folks")) # Output on screen: Hi

print(next(listemsIt, "That's all folks")) # Output on screen: 27

print(next(listemsIt, "That's all folks")) # Output on screen: Python

print(next(listemsIt, "That's all folks")) # Output on screen: 10

print(next(listemsIt, "That's all folks")) # Output on screen: That's all folks

```
If you let run the last print() without the default parameter, you´ll get a pretty Buzzz! :boom::boom:

---
***All these could be also done using a for loop. But, secret between you and me :secret:, the for loop actually generates an iterator object and uses the next() method for looping.*** :astonished::astonished::astonished:
