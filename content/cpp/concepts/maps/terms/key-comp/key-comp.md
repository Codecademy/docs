---
Title: '.Key_Comp'
Description: 'Returns a copy of the comparison object used by the container to order its keys.'
Subjects:
  - 'Computer Science'
  - 'Developer Tools'
Tags:
  - 'Data'
  - 'Data Distribution'
  - 'Data Structures'
  - 'iOS'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'path/computer-science'
---

The **`key_comp()`** function returns a copy of the comparison function object (typically `key_compare`) used by the container to order its keys. 

## Syntax

```pseudo
myMap.key_comp();```

- 'Key_compare' is the comparison function object
- 'Key_comp()' is used to return a copy of the comparison  function object

This function does not take any parameters.
It returns a function object (the key comparison object usually 'std::less<key>' by default) that can be used to compare two keys.

## Example

This is an example demonstrating how to use .key_comp() to compare keys in a std::map.

#include <iostream>
#include <map>

int main() {

  std::map<int, std::string> myMap = {
    {1, "Apple"},
    {2, "Banana"},
    {3, "Orange"},
    {4, "Date"},
    {5, "Mango"}
  };

  auto comp = myMap.key_comp();

  int keyToCompare = 3;

  for (const auto& pair : myMap) {
    if (comp(pair.first, keyToCompare)) {
      std::cout << pair.first << " is less than " << keyToCompare << std::endl;
    } else if (comp(keyToCompare, pair.first)) {
        std::cout << pair.first << " is greater than " << keyToCompare << std::endl;
      } else {
          std::cout << pair.first << " is equal to " << keyToCompare << std::endl;
        }
  }

  return 0;
}

## Output

This code results in the following output

{
  1 is less than 3
  2 is less than 3
  3 is equal to 3
  4 is greater than 3
  5 is greater than 3
}

## Codebyte Example

This is a codebyte example demonstrating how to use .key_comp() to compare keys in a std::map.

```codebyte/cpp

#include <iostream>
#include <map>

struct CustomCompare {
  bool operator()(int lhs, int rhs) const {
    return lhs > rhs; // Reverse order
  }
};

int main() {

  std::map<int, char, CustomCompare> myMap = {{1, 'a'}, {2, 'b'}, {3, 'c'}};

  auto comp = myMap.key_comp();

  std::cout << "Comparing 2 and 3: " << comp(2, 3) << std::endl;
  std::cout << "Comparing 3 and 2: " << comp(3, 2) << std::endl;

  return 0;
}
```
