---
Title: 'Enum'
Description: 'Defines a variable with a limited set of predefined values.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Enum'
  - 'Data Types'
  - 'Arrays'
  - 'Vectors'
  - 'Pointers'
  - 'Memory'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, an **enumeration (enum)** is a user defined type where a set of values is specified for a variable and the variable can only take one out of a small set of possible values.

## Syntax

The keyword `enum` is used to define an enumeration.

```cpp
enum name {const1, const2, ...};
```

Here's an example:

```cpp
enum day {sun, mon, tue, wed, thu, fri, sat};
```

- `sun` would have the value 0
- `mon` would have the value 1
- `tue` would have the value 2
- `wed` would have the value 3
- `thu` would have the value 4
- `fri` would have the value 5
- `sat` would have the value 6

Here's another example where one of the constants is assigned a value:

```cpp
enum grade {freshman=9, sophomore, junior, senior};
```

The enumerator `freshman` is assigned the value `9`. Subsequent enumerators, if they are not given an explicit value, receive the value of the previous enumerator plus one.

So here:

- `freshman` would have the value 9
- `sophomore` would have the value 10
- `junior` would have the value 11
- `senior` would have the value 12

## Codebyte Example

```codebyte/cpp
#include <iostream>

int main() {
  enum quarter_one {
    january=1,
    february,
    march
  };

  int month = february;

  std::cout << month;
}
```

## Scoped Enums

Scoped enums are a feature added in C++11.

Scoped enums differ from unscoped enums by:

- Containing their constants in their namespace.
- Being strongly-typed.
- By containing their constants to their namespace, scoped enumerations avoid name conflicts with other enumerations.

## Example

```cpp
enum class WeekDay {sun, mon, tue, wed, thu, fri, sat};

WeekDay day = WeekDay::sun; // Notice that "sun" is prefaced with "Weekday::"
int friday = WeekDay::fri; // error, must cast to an int
```

Here's an example where scoped enumerations avoid name collisions:

```cpp
enum class LogResult {Success, InvalidFileName, WriteError};
enum class SocketResult {Success, InvalidAddrError, TimeoutError};

LogResult logger_result = LogResult::Success;

if (logger_result == LogResult::Success) {} // Because Success is scoped to LogResult, it doesn't collide with SocketResult::Success
```

## Enum to Int Conversion

In C++, `enum` can be implicitly converted to integers, useful for numeric contexts like array indexing or bitwise operations:

```cpp
#include <iostream>
enum color { red, green, blue };

int main() {
  color c = green;
  int colorValue = c;  // Implicit conversion to int
  std::cout << "Color value: " << colorValue;
}
```

Here is the output:

```shell
Color value: 1
```

Converting an `enum` to `int` is easy, but converting `int` to `enum` is risky as no bounds check is done, leading to undefined behavior if the value is out of range.

## Custom Underlying Types

By default, an enum's type is `int`, but a smaller type like `unsigned char` can be specified to optimize memory usage:

```cpp
#include <iostream>
enum class Permission : unsigned char {
  Read = 1,
  Write = 2,
  Execute = 4
};

int main() {
  Permission p = Permission::Write;
  std::cout << static_cast<int>(p);  // Explicit cast to int
}
```

Here, the underlying type of `Permission` is `unsigned char`. The constants `Read`, `Write`, and `Execute` are stored using only 1 byte of memory.

This example results in the following output:

```shell
2
```

## Best Practices

Here are some best practices for using enums:

1. Use `enum class` for strong typing: Scoped enums (C++11) prevent implicit int conversions, ensuring better type safety.
2. Explicit casting: Use `static_cast<int>(enum_value)` for safe conversions.
3. Avoid magic numbers: Enums replace hardcoded numbers, improving readability.
4. Use underlying types wisely: Choose the underlying type carefully in memory-constrained environments.
