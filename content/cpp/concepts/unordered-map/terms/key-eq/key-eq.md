---
Title: '.key_eq()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns the function used by the map to compare equality of the keys' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Classes'
  - 'Map'
  - 'OOP'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-example-course'
  - 'paths/example-path'
---

The **`.key_count()(key1, key2)`** returns the function used to compare the equality of the keys.


## Syntax
We can extract the equality comparator:

```pseudo
auto eq_comparator = mpIdentifier.key_eq();
```
```eq_comparator``` is now a function object that can be used to compare keys.

Alternatively, we can pass the keys to be compared directly. 
Returns a `bool` value;

```pseudo
bool isEqual = mpIdentifier.key_eq()(key1, key2);
```

where:
- `mpIdentifier`: Identifier for the unordered map.
- `key1` and `key2`: The keys that need to compared using the map's comparator function

## Example

```cpp
#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>

int main() {
    std::unordered_map<std::string, int> animalPopulations = {
        {"Tiger", 5574},
        {"Elephant", 415000},
        {"Giraffe", 117000},
        {"Rhinoceros", 27000}
    };

    // List of animals we want to look up
    std::vector<std::string> animalList = {"Tiger", "Giraffe"};

    // Get the equality function used by the map
    auto eq = animalPopulations.key_eq();

    // Loop through the list
    for (const std::string& target : animalList) {
        for (const auto& pair : animalPopulations) {
            if (eq(pair.first, target)) {
                std::cout << "There are " << pair.second << " " << pair.first << "s in the wild." << std::endl;
            }
        }
    }

    return 0;
}

```

Output:
```shell
There are 5574 Tigers in the wild.
There are 117000 Giraffes in the wild.
```


## Codebyte Example 
```codebyte/cpp
#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>

int main() {
    std::unordered_map<std::string, std::string> proteinSource = {
        {"Chicken", "non-veg"},
        {"Salmon", "non-veg"},
        {"Greek Yogurt", "veg"},
        {"Cottage Cheese", "veg"}  
    };

    // List of foods to look up
    std::vector<std::string> foodList = {"Chicken", "Greek Yogurt", "Paneer"};

    auto eq = proteinSource.key_eq();

    for (const std::string& food : foodList) {
        bool found = false;
        for (const auto& pair : proteinSource) {
            if (eq(pair.first, food)) {
                std::cout << pair.first << " is a " << pair.second << " source of protein" << std::endl;
                found = true;
                break;
            }
        }
        if (!found) {
            std::cout << food << " is not found in the protein source list." << std::endl;
        }
    }

    return 0;
}


```

Output:
```shell
Chicken is a non-veg source of protein
Greek Yogurt is a veg source of protein
Paneer is not found in the protein source list.
```