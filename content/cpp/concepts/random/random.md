---
Title: "Random"
Subjects:
  - "Computer Science"
  - "Game Development"
Tags: 
  - "Random"
  - "Variables"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-c-plus-plus"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

C++ has a `std::rand()` function from `cstdlib` library that generates a random number.

For example, if we add `#include <cstdlib>`, we can use the `std::rand()` function:

```
std::cout << std::rand() << "\n";
std::cout << std::rand() << "\n";
std::cout << std::rand() << "\n";
```

It would output something like:

```
1804289383
846930886
1681692777
```

## Using Modulo

A lot of the times, we don’t just want any random number. Suppose We want a random number from 0-9.

```cpp
int answer = std::rand() % 10;
```

The `%` is the modulo symbol that returns the remainder.

## Seeding the Random Number Generator

For our program to work, we need to get a different random number for each execution.

To do so, we need to add this line of code before the declaration of answer:

```cpp
srand(time(NULL));
```

This sets the “seed” of the random number generator.

## Codebyte Example

```codebyte/cpp
#include <iostream>
#include <cstdlib>
 
int main() {
 
  std::cout << "MAGIC 8-BALL:\n\n";
 
  srand(time(NULL));
 
  int answer = std::rand() % 20;
 
  std::cout << answer;
 
```
