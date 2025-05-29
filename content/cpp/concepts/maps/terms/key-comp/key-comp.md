---
Title: '.key_comp()'
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
  - 'paths/computer-science'
---

The **key_comp()** is used to return a copy of the comparison function object(key_compare) used by the container.  

## Syntax

```C++
Key_compare key_comp() const;```

- 'Key_compare' is the comparison function object
- 'Key_comp()' is used to return a copy of the comparison  function object

## Example

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

The code above results in the following output

1 is less than 3
2 is less than 3
3 is equal to 3
4 is greater than 3
5 is greater than 3


## Codebyte Example


```codebyte/C++

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
```
