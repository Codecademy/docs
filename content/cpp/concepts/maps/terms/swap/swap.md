---
Title: '.swap()'
Description: 'Exchanges the content of two maps.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Objects'
  - 'OOP'
  - 'Classes'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.swap()`** function exchanges the content of two maps of the same type.

## Syntax

```pseudo
map1.swap(map2);
```

The `map1` is the map whose contents are exchanged with the contents of `map2`.

> **Note:** If `map1` and `map2` are not of the same type then a compilation error will occur.

## Example

The following example shows how the `swap()` method works.

```cpp
#include <iostream>
#include <map>
using namespace std;

int main() {
    map<int, string> map1{{1, "one"}, {2, "two"}, {3, "three"}};
    map<int, string> map2{{4, "four"}, {5, "five"}, {6, "six"}};

    cout << "Before swap Map1:\n";
    for(map<int, string>::iterator it = map1.begin();it != map1.end();++it) {
        cout << "Key: " << it->first<< ", Value: " << it->second << endl;
    }
    
    cout << "Before swap Map2:\n";
    for(map<int, string>::iterator it = map2.begin();it != map2.end();++it) {
        cout << "Key: " << it->first<< ", Value: " << it->second << endl;
    }

    // Swapping the contents of map1 and map2
    map1.swap(map2);
    
    cout << "After swap Map1:\n";
    for(map<int, string>::iterator it = map1.begin();it != map1.end();++it) {
        cout << "Key: " << it->first<< ", Value: " << it->second << endl;
    }
    
    cout << "After swap Map2:\n";
    for(map<int, string>::iterator it = map2.begin();it != map2.end();++it) {
        cout << "Key: " << it->first<< ", Value: " << it->second << endl;
    }
    
    return 0;
}
```

The output of the above code will be:

```shell
Before swap Map1:
Key: 1, Value: one
Key: 2, Value: two
Key: 3, Value: three
Before swap Map2:
Key: 4, Value: four
Key: 5, Value: five
Key: 6, Value: six
After swap Map1:
Key: 4, Value: four
Key: 5, Value: five
Key: 6, Value: six
After swap Map2:
Key: 1, Value: one
Key: 2, Value: two
Key: 3, Value: three
```

## Codebyte Example

Running the below codebyte example shows how the `swap()` function works:

```codebyte/cpp
#include <iostream>
#include <map>
using namespace std;

int main() {
    map<string, int> map1{{"apple", 1}, {"banana", 2}, {"cherry", 3}};
    map<string, int> map2{{"date", 4}, {"elderberry", 5}, {"fig", 6}};

    cout << "Before swap Map1:\n";
    for(map<string, int>::iterator it = map1.begin(); it != map1.end(); ++it) {
        cout << "Key: " << it->first << ", Value: " << it->second << endl;
    }
    
    cout << "Before swap Map2:\n";
    for(map<string, int>::iterator it = map2.begin(); it != map2.end(); ++it) {
        cout << "Key: " << it->first << ", Value: " << it->second << endl;
    }

    // Swapping the contents of map1 and map2
    map1.swap(map2);
    
    cout << "After swap Map1:\n";
    for(map<string, int>::iterator it = map1.begin(); it != map1.end(); ++it) {
        cout << "Key: " << it->first << ", Value: " << it->second << endl;
    }
    
    cout << "After swap Map2:\n";
    for(map<string, int>::iterator it = map2.begin(); it != map2.end(); ++it) {
        cout << "Key: " << it->first << ", Value: " << it->second << endl;
    }
    
    return 0;
}
```
