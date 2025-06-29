---
Title: '.compare()'
Description: 'Compares two strings lexicographically and returns an integer indicating their relationship.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Strings'
  - 'Functions'
  - 'Methods'
  - 'Comparison'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.compare()`** method compares two [`strings`](https://www.codecademy.com/resources/docs/cpp/strings) lexicographically (dictionary order) and returns an integer value that indicates the relationship between the strings. It performs a character-by-character comparison based on ASCII values.

## Syntax

```pseudo
string1.compare(string2);
string1.compare(pos, len, string2);
string1.compare(pos, len, string2, subpos, sublen);
```

- `string1`: The string object calling the method
- `string2`: The string to compare with
- `pos`: Starting position in `string1` for comparison (optional)
- `len`: Length of characters to compare from `string1` (optional)
- `subpos`: Starting position in `string2` for comparison (optional)
- `sublen`: Length of characters to compare from `string2` (optional)

**Return values:**
- Returns `0` if the strings are equal
- Returns a negative value (< 0) if `string1` is lexicographically less than `string2`
- Returns a positive value (> 0) if `string1` is lexicographically greater than `string2`

## Example

```cpp
#include <iostream>
#include <string>

int main() {
  std::string str1 = "apple";
  std::string str2 = "banana";
  std::string str3 = "apple";
  
  int result1 = str1.compare(str2);  // Negative value
  int result2 = str1.compare(str3);  // 0
  int result3 = str2.compare(str1);  // Positive value

  std::cout << "apple vs banana: " << result1 << std::endl;
  std::cout << "apple vs apple: " << result2 << std::endl;
  std::cout << "banana vs apple: " << result3 << std::endl;
  
  return 0;
}
```

**Output:**
```
apple vs banana: -1 
apple vs apple: 0
banana vs apple: 1
```

## Codebyte Example

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


## [Complexity](https://www.codecademy.com/resources/docs/general/big-o-notation)

**Time Complexity:** O(n), where n is the length of the substring.

**Auxiliary Space Complexity:** O(1)


## Frequently Asked Questions

### 1. Difference between `compare()` and `==` operator?
The `==` operator returns a boolean (`true` or `false`) indicating equality, while `compare()` returns an integer that tells you the exact relationship between strings (less than, equal to, or greater than).

### 2. Can `compare()` be used for case-insensitive comparison?
No, `compare()` performs case-sensitive comparison. For case-insensitive comparison, you need to convert both strings to the same case first or use custom comparison functions.

### 3. What happens when comparing strings of different lengths?
When strings have different lengths but one is a prefix of the other, the shorter string is considered lexicographically smaller. For example:
```
std::string a = "app";
std::string b = "apple";
a.compare(b) < 0; // true
```
