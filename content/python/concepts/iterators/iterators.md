---
Title: 'Iterators'
Description: 'In python, Iterator is a representation(an object) of a collection of elements(such as data or methods), from which one can access each element by traversing through it to perform the required tasks.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Iterators'
  - 'OOP'
  - 'Loops'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
  - 'paths/data-science'
---

**Iterator** is a representation(an object) of a collection of elements(such as data or methods), from which one can access each element by traversing through it to perform the required tasks. A iterator supports inbuild `next()` method or user defined methods of similar kind that takes no arguments and always returns the next element of the collection, when all elements are exhausted it returns `StopIteration` exception.
the objecta that can be converted into iterators are called **iterables**. The datatypes such as lists, tuples, dictionaries, sets are **iterable** these can be converted into iterators using inbuilt `iter()` method, the difference between **iterable** and **iterator** can be easily by understood by considering iterable as a birthday cake before cutting, as we need to distribute to all the people we cut cake into several pieces using `iter()` method to get iterator then we use `next()` to distribute each piece.

## Code for Iterator using list
The following code shows generation of **iterator** from list using `iter()` and usage of the `next()` method by manually iterating through all the items of iterator. Finallyy when there are no more elements left in iterator, it returns the StopIteration Exception

```codebyte/py
#defining list cake, which is iterable
cake = ["piece1", "peice2", "peice3"] 

#converting list into iterator using iter() method
cake_ready_to_distribute = iter(cake)

#iterating through iterator, returns peice1
print(next(cake_ready_to_distribute))

#iterating through iterator, returns peice2
print(next(cake_ready_to_distribute))

#iterating through iterator, returns peice3
print(next(cake_ready_to_distribute))

#iterating through iterator, returns stopiteration exception
print(next(cake_ready_to_distribute))
```

## Iterator in `for` loop
The `for` loop has inbuilt `iter()` and `next()` methods for it, which runs iterations in a more elegant way

```codebyte/py

#defining list cake, which is iterable
cake = ["piece1", "peice2", "peice3"] 

#initiating for loop
#the for loop itself convert iterable into iterator and returns elements
for piece in cake:   
  print(piece)

```

## How to find if certain object is iterable or an iterator

[Text about subsection n]

```codebyte/js # Example runnable code block. We can currently support Python, JavaScript, Ruby, C++, C#, Go, and PHP. See content-standards.md for more details!
console.log('Hello, World!');
```
