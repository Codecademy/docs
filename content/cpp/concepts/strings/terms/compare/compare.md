---
Title: '.compare()'
Description: 'Compares two strings lexicographically and returns an integer indicating their relative order.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Comparison'
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.compare()`** method compares two strings lexicographically (dictionary order) and returns an integer that indicates their relative order. The comparison is done character by character based on ASCII values.

## Syntax

```pseudo
string1.compare(string2);                              // Compares string1 with string2.
string1.compare(pos, len, string2);                    // Compares a substring of string1 starting at pos with length len to the entirety of string2.
string1.compare(pos, len, string2, subpos, sublen);    // Compares a substring of string1 (starting at pos, length len) with a substring of string2 (starting at subpos, length sublen)
```

**Parameters:**

- `string1`: The string object calling the `.compare()` method.
- `string2`: The string to compare with.
- `pos` (optional: Starting position in `string1` for comparison
- `len` (optional): The number of characters to compare from `string1` starting at `pos`.
- `subpos` (optional): The starting position in `string2` from which to begin comparison.
- `sublen` (optional): The number of characters to compare from `string2` starting at `subpos`.

**Return values:**

- Returns `0` if the strings are equal
- Returns a negative value (< 0) if `string1` is lexicographically less than `string2`
- Returns a positive value (> 0) if `string1` is lexicographically greater than `string2`

## Example

This example demonstrates the usage of the `.compare()` method:

```cpp
#include <iostream>
#include <string>

int main() {
  std::string str1 = "apple";
  std::string str2 = "banana";
  std::string str3 = "apple";

  int result1 = str1.compare(str2);
  int result2 = str1.compare(str3);
  int result3 = str2.compare(str1);

  std::cout << "apple vs banana: " << result1 << std::endl;
  std::cout << "apple vs apple: " << result2 << std::endl;
  std::cout << "banana vs apple: " << result3 << std::endl;

  return 0;
}
```

The output of this code is:

```shell
apple vs banana: -1
apple vs apple: 0
banana vs apple: 1
```

## Codebyte Example

Run the following codebyte to understand how the `.compare()` method works:

```codebyte/cpp
#include <iostream>
#include <string>

int main() {
  std::string fruit1 = "apple";
  std::string fruit2 = "orange";

  int comparison = fruit1.compare(fruit2);

  if (comparison < 0) {
    std::cout << fruit1 << " comes before " << fruit2 << " alphabetically" << std::endl;
  } else if (comparison > 0) {
    std::cout << fruit1 << " comes after " << fruit2 << " alphabetically" << std::endl;
  } else {
    std::cout << fruit1 << " and " << fruit2 << " are the same" << std::endl;  }

  return 0;
}
```

## Frequently Asked Questions

### 1. What is the difference between `.compare()` and `==` operator?

The `==` operator returns a boolean (`true` or `false`) indicating whether two strings are equal. The `.compare()` method returns an integer indicating the _relative order_ of the strings: less than, equal to, or greater than.

### 2. Can `.compare()` be used for case-insensitive comparison?

No, `.compare()` is case-sensitive by default. To perform a case-insensitive comparison, try converting both strings to the same case using methods like `std::transform()` with `::tolower`, or use a custom comparator.

### 3. What happens when comparing strings of different lengths?

If one string is a prefix of the other, the shorter string is considered lexicographically smaller:

```cpp
std::string a = "app";
std::string b = "apple";
bool result = a.compare(b) < 0; // true
```
