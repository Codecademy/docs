---
Title: '.substr()'
Description: 'Extracts a substring from a given string, creating a new string object.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Data Types'
  - 'Functions'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.substr()`** method extracts a substring from a given string. It is a member function of the [`std::string`](https://www.codecademy.com/resources/docs/cpp/strings) class that creates a new string object initialized with a copy of a portion of the original string, beginning at the specified position and extending for a given length.

The `.substr()` method is commonly used in string manipulation tasks such as parsing, text processing, data extraction, and generating modified versions of existing strings. It's particularly useful when there is a need to work with segments of a larger string without modifying the original data.

## Syntax

```pseudo
string_variable.substr(pos, len);
```

**Parameters:**

- `pos`: The index of the first character to be copied from the string. The default is 0 (first character).
- `len`: The number of characters to extract. If omitted, or if `string::npos` is used, the substring includes all characters from `pos` to the end of the string.

**Return value:**

- The `.substr()` method returns a new string object containing a copy of the specified substring.

## Example 1: Basic Substring Extraction using `.substr()`

This example demonstrates how to extract various portions of a string using the `.substr()` method:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  // Original string
  string original = "Programming in C++";

  // Extract a substring starting from index 0 with length 11
  string sub1 = original.substr(0, 11);

  // Extract a substring starting from index 15 to the end
  string sub2 = original.substr(15);

  // Extract a substring starting from index 12 with length 2
  string sub3 = original.substr(12, 2);

  // Display the results
  cout << "Original string: " << original << endl;
  cout << "Substring 1: " << sub1 << endl;
  cout << "Substring 2: " << sub2 << endl;
  cout << "Substring 3: " << sub3 << endl;

  return 0;
}
```

The output of the above code will be:

```shell
Original string: Programming in C++
Substring 1: Programming
Substring 2: C++
Substring 3: in
```

This example shows how to extract different parts of a string by specifying the starting position and length parameters in the `.substr()` method.

## Example 2: Extracting Text Between Delimiters

This example demonstrates how to extract text between two delimiters in a string, which is a common operation in text processing and parsing:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  // Sample string containing data in a specific format
  string data = "name:John,age:30,city:New York";

  // Find the positions of delimiters for "age" field
  size_t startPos = data.find("age:") + 4; // Add 4 to skip "age:"
  size_t endPos = data.find(",", startPos);

  // Extract the age value
  string ageValue = data.substr(startPos, endPos - startPos);

  // Find and extract the city value (which extends to the end of the string)
  startPos = data.find("city:") + 5; // Add 5 to skip "city:"
  string cityValue = data.substr(startPos);

  // Display the extracted values
  cout << "Age: " << ageValue << endl;
  cout << "City: " << cityValue << endl;

  return 0;
}
```

The output of the above code will be:

```shell
Age: 30
City: New York
```

This example illustrates how `.substr()` can be combined with other string methods like [`.find()`](https://www.codecademy.com/resources/docs/cpp/strings/find) to extract specific segments of text between delimiters, which is useful for parsing structured data formats.

## Codebyte Example: Generating All Possible Substrings

This example shows how to generate all possible substrings of a given string, which is a common operation in string algorithms and interview questions:

```codebyte/cpp
#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main() {
  string input = "code";
  vector<string> substrings;

  // Generate all possible substrings
  int n = input.length();

  // Outer loop for starting position
  for (int i = 0; i < n; i++) {
    // Inner loop for substring length
    for (int len = 1; len <= n - i; len++) {
      // Extract substring of length 'len' starting at index 'i'
      substrings.push_back(input.substr(i, len));
    }
  }

  // Print all generated substrings
  cout << "All substrings of \"" << input << "\":" << endl;
  for (const string& sub : substrings) {
    cout << sub << endl;
  }

  return 0;
}
```

The above code uses nested loops with the `.substr()` method to systematically generate all possible substrings of a given string. This technique is frequently used in string processing algorithms and competitive programming problems.

## Frequently Asked Questions

### 1. How do `.substring()` and `.substr()` differ?

The `.substring()` method is in Java and JavaScript, while C++ uses `.substr()`. They have different parameter semantics: Java's `.substring()` takes start and end indices, while C++'s `.substr()` takes start position and length. Additionally, Java's `.substring()` uses zero-based indexing for both parameters, while C++'s `.substr()` uses a position and count approach.

### 2. What to use instead of `.substr()`?

For simple substring operations, `.substr()` is appropriate. However, for more complex string manipulations, consider using:

- `string_view` (C++17) for non-copying substring references
- Regular expressions for pattern-based extraction
- String algorithms from the `<algorithm>` library
- String tokenization with `std::istringstream` for parsing

### 3. What happens if the position parameter exceeds the string length?

If the position parameter (`pos`) is greater than or equal to the string length, `.substr()` throws a `std::out_of_range` exception. It's important to check the string length before calling `.substr()` to avoid this exception.

### 4. Is `substr()` an efficient operation?

The `.substr()` method creates a new string object, which involves memory allocation and copying characters. For frequent or performance-critical operations, this can be inefficient. In C++17 and later, consider using `std::string_view` for non-modifiable substring references without copying.

### 5. Can `.substr()` modify the original string?

No, `.substr()` does not modify the original string. It returns a new string object that contains a copy of the specified portion of the original string. To modify the original string, you would need to use methods like `.replace()`, `.erase()`, or `.insert()`.
