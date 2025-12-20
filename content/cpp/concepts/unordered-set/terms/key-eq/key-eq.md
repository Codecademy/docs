---
Title: 'key_eq()'
Description: 'Returns the key equality comparison function used by the unordered set.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Comparison'
  - 'Equality'
  - 'Functions'
  - 'Containers'
  - 'Sets'
  - 'STL'
  - 'Hashes'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`key_eq()`** method returns the equality comparison function object used by an [`unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set) to determine whether two keys are considered equal.

## Syntax

```pseudo
unordered_set_name.key_eq();
```

**Return Value:**

Returns a `key_equal` function object. By default, this is `std::equal_to<T>`, which compares keys using the `==` operator.

## Example

The following example illustrates retrieving and using the equality comparison function from an unordered_set:

```cpp
#include<iostream>
#include<unordered_set>

using namespace std;

int main() {
  unordered_set<int> numbers = {1, 2, 3};
    
  auto eq = numbers.key_eq();
    
  cout << eq(2, 2) << "\n";
  cout << eq(2, 3) << "\n";
    
  return 0;
}
```

The above program gives the following output:

```
1
0
```

> **Note:** If two keys are considered equal by key_eq(), they must also produce the same hash value. Failing to maintain this consistency results in undefined behavior.

```codebyte/cpp
#include<iostream>
#include<unordered_set>
#include<string>
#include<cctype>

using namespace std;

struct CaseInsensitiveHash {
  size_t operator()(const string& str) const {
  size_t hash = 0;
    
  for(char ch : str) {
    hash = hash * 31 + tolower(ch);
  }
    
  return hash;
  }
};

struct CaseInsensitiveEq {
  bool operator()(const string& a, const string& b) const {
    if(a.size() != b.size()) 
      return false;
        
    for(size_t i = 0; i < a.size(); i++) {
      if(tolower(a[i]) != tolower(b[i])) 
        return false;
    }
    
    return true;
  }
};

int main() {
  unordered_set<string, CaseInsensitiveHash, CaseInsensitiveEq> words;
    
  words.insert("Codecademy");
  words.insert("codecademy"); // will be considered equal, and not inserted
    
  auto eq = words.key_eq();
    
  cout << eq("Codecademy", "codecademy") << "\n";
  cout << words.size() << "\n";
    
  return 0;
}
```

The above program gives the following output

```
1
1
```
