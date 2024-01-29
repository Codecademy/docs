---
Title: 'math-methods'
Description: 'Overview and description of math methods in Dart programming language.' 
Subjects: 
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Dart'
  - 'Math'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

Dart has a core library `dart:math` which provides common **math methods** covering random number generation, trigonometry and use of mathematical constants such as *e* and *pi*. 

> **Note:** To use the following methods, import the `dart:math` library.

```pseudo
import 'dart:math';
```

## Random

Generate random values using the `Random` class. Values can be numerical or Boolean.

```dart
var randomNumber = Random().nextInt(100);
print(randomNumber); // Prints number between 0 - 99

var randomBoolean = Random().nextBool();
print(randomBoolean); // Prints true or false
```


## Constants

Use mathematical constants, such as *pi* and *e*. 

```dart
print(pi); // Prints 3.1415926535897932

print(e); // Prints 2.718281828459045
```

## Methods

Perform trigonometric calculations and return the larger or smaller of two numbers using `max()` and `min()` methods.  

```dart
var result = cos(pi); // Calculates cosine of pi radians
print(result); // Prints -1

var highestNumber = max(30, 45);
print(highestNumber); // Prints 45
```