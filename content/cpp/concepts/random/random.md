---
Title: 'Random'
Description: 'C++ contains a function from the cstdlib library called rand that generates a random number.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Random'
  - 'Variables'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

C++ has a `std::rand()` function from `cstdlib` library that generates a random number.

For example, if we add `#include <cstdlib>`, we can use the `std::rand()` function:

```cpp
std::cout << std::rand() << "\n";
std::cout << std::rand() << "\n";
std::cout << std::rand() << "\n";
```

It would output something like:

```bash
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
  std::cout << "🎱 Magic 8-Ball: ";

  srand(time(NULL));

  int answer = std::rand() % 20;

  std::cout << answer;
}
```
