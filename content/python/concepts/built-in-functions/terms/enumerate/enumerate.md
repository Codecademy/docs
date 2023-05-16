---
Title: 'enumerate()'
Description: 'Returns a list of tuples containing the index and the element of all the elements in an iterator.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Iterators'
  - 'Lists'
  - 'Tuples'
CatalogContent:
  - 'learn-python-3'
  - 'paths/data-science'
---

The **`enumerate()`** function returns a list of [tuples](https://www.codecademy.com/resources/docs/python/tuples).

## Syntax

```pseudo
enumerate(iterable)
```

The `iterable` parameter can be one of the following:

- A [`string`](https://www.codecademy.com/resources/docs/python/strings)
- A [`list`](https://www.codecademy.com/resources/docs/python/lists),[`tuple`](https://www.codecademy.com/resources/docs/python/tuples),[`dictionary`](https://www.codecademy.com/resources/docs/python/dictionaries), or [`set`](https://www.codecademy.com/resources/docs/python/sets).
- An iterable object such as one returned by the [`iter()`](https://www.codecademy.com/resources/docs/python/iterators/iter) function.


## Example

The example below demonstrates how the `enumerate()` function is used on a list:

```py
companies_list = ["Google","Microsoft","Amazon"]
for index,company in enumerate(companies_list):
  print(f"{index}. {company}")
```
Enumerate returns a Tuple as shown below:

```shell
[(0,"Google"),(1,"Microsoft"),(2,"Amazon")]
```

This will print the following output:

```shell
0. Google
1. Microsoft
2. Amazon
```

### Codebytes

The following examples show how the `enumerate()` function is used on some of the iterables:

```codebyte/python
1. #Using Enumerate on a String

word = "Python"

for index, letter in enumerate(word):
    print(index, letter)
    
#Output:

# 0 P    
# 1 y    
# 2 t    
# 3 h   
# 4 o     
# 5 n
```
```codebyte/python
2. #Using Enumerate on a Dictionary

animal_dict = {'Cat':1, 'Dog':2, 'Horse':3}

for index, (animal, number) in enumerate(animal_dict.items()):
    print(index, animal, number)

#Output:

# 0 Cat 1       
# 1 Dog 2
# 2 Horse 3
```
```codebyte/python
3. #Using Enumerate on a List

colleges = ['Cornell', 'Yale', 'MIT']

for index, college in enumerate(colleges):
    print(index, college)

#Output:

# 0 Cornell    
# 1 Yale  
# 2 MIT
```
