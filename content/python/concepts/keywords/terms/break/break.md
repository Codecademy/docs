---
Title: 'break'
Description: 'Used to exit for and while loops'
Subjects:
  - 'Computer Science'
  - 'Data Science'
  - 'Python'
Tags:
  - 'Loops'
  - 'Break'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---
**Break**
======
The **`break`** keyword is used to exit a [loop](https://codecademy.com/resources/docs/python/loops).

**Syntax**
======
```pseudo
numbers = [1, 2, 3, 4, 5, 6, 7]
for number in numbers:
    print(number)

    if number == 5:
        break
```
Output:
```pseudo
1
2
3
4
5
```
In the example above, the for loop will iterate through numbers and it will stop the loop when the number is 5.

**CodeByte Example**
```codebyte/python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for number in numbers:
    if number % 5 == 0:
        break
    print(number * 2)
```