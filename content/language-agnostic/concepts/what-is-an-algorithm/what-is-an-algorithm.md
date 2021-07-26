---
Title: "What is an Algoritm?"
Subjects:
  - "Computer Science"
  - "Web Development"
Tags:
  - "Best Practices"
  - "Memory"
Catalog Content:
  - "https://www.codecademy.com/learn/paths/code-foundations"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://www.codecademy.com/learn/paths/web-development"
---

An algorithm is a formal process used to solve a problem. Algorithms can be represented in a number of formats but are usually represented in pseudocode in order to communicate the process by which the algorithms solve the problems they were created to tackle. Ultimately algorithms are implemented in programming languages which allow them to manipulate data in the ways that the algorithms are intended to. Algorithms are measured in "Big O notation". 

The word algorithm comes from "Algorismus" which is a latinized name of the influential 10th century polymath Muhammad ibn Musa al-Khwarizmi.

There are many ways to classify algorithms but one of the best ways to do so is by analysis of its complexity. 

## Algorithms can be categorized by their time complexities:

* Exponential time: if the time is an exponential function of the input size. Example: Brute-force search.

* Polynomial time: if the time is a power of the input size. Example: the bubble sort algorithm has quadratic time complexity.

* Linear time: if the time is proportional to the input size. Example: the traverse of a list.

* Logarithmic time: if the time is a logarithmic function of the input size. Example: binary search algorithm.

* Constant time: if the time needed by the algorithm is the same, regardless of the input size. Example: an access to an array element.

## An example of an algorithm implemented in Python

```py

# Python implementation of Bubble Sort
  
def bubbleSort(_array):
    n = len(_array)
  
    for i in range(n-1):

        for j in range(0, n-i-1):
  
            if _array[j] > _array[j + 1]:
                _array[j], _array[j + 1] = _array[j + 1], _array[j]
  
_array = [3, 9, 12, 12, 100, 90]
  
bubbleSort(_array)
  
print ("print sorted data:")
for i in range(len(_array)):
    print("% d" % _array[i]), 
```


