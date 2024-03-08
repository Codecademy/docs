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

Dart has a core library `dart:math` which provides common **math methods** covering random number generation, trigonometry, and use of mathematical constants such as `e` and `pi`.

> **Note:** To use the following methods, import the `dart:math` library.

```pseudo
import 'dart:math';
```

## Constants

Use mathematical constants, such as `pi` and `e`.

```dart
import 'dart:math';

void main() {
  print(pi);

  print(e);
}
```

The above code gives the following output:

```shell
3.141592653589793
2.718281828459045
```

## Methods

Perform trigonometric calculations and return the larger or smaller of two numbers using `max()` and `min()` methods.

| Function    | Description                          |
| ----------- | ------------------------------------ |
| `max(a, b)` | Returns the larger of two numbers    |
| `min(a, b)` | Returns the smaller of two numbers   |
| `pow(a, b)` | Returns `a` to the power of `b`      |
| `log(a)`    | Returns the natural logarithm of `a` |
| `sqrt(a)`   | Returns the square root of `a`       |
| `sin(a)`    | Returns sine value of `a` radians    |
| `cos(a)`    | Returns cosine value of `a` radians  |
| `tan(a)`    | Returns tangent value of `a` radians |
