---
Title: '.rfind()'
Description: 'Searches for the last occurrence of a substring or character in a string.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Search'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.rfind()`** method searches for the last occurrence of a specified substring or character within a string. It performs a reverse search, starting from the end of the string (or a specified position) and moving towards the beginning. The method returns the position of the last match, or `std::string::npos` if no match is found.

## Syntax

```pseudo
string.rfind(str, pos)
string.rfind(c, pos)
string.rfind(s, pos, n)
```

- `string` is the string being searched.
- `str` is the substring to search for.
- `c` is the character to search for.
- `s` is a C-style string (character array) to search for.
- `pos` is optional, and specifies the position to start the reverse search from (default is `std::string::npos`, meaning search from the end).
- `n` is optional, and specifies the number of characters to match from `s`.

**Return value:**
- Returns the position (zero-based index) of the last occurrence of the substring/character.
- Returns `std::string::npos` if the substring/character is not found.

## Example

The following example demonstrates finding the last occurrence of different substrings:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string text = "Hello world, welcome to the world of programming";
    
    // Store the last occurence index of the "world" in text
    size_t lastWorld = text.rfind("world");


    if (lastWorld != std::string::npos) {
        std::cout << "Last 'world' found at position: " << lastWorld << std::endl;
    }
    
    // Find last occurrence of 'o'
    size_t lastO = text.rfind('o');
    if (lastO != std::string::npos) {
        std::cout << "Last 'o' found at position: " << lastO << std::endl;
    }
    
    // Search from a specific position
    size_t worldBefore20 = text.rfind("world", 20);
    if (worldBefore20 != std::string::npos) {
        std::cout << "'world' found before position 20 at: " << worldBefore20 << std::endl;
    }
    
    return 0;
}
```

**Output:**
```
Last 'world' found at position: 28
Last 'o' found at position: 39
'world' found before position 20 at: 6
```

## Codebyte Example

The following example shows practical use of `.rfind()` to extract file extensions and find the last occurrence of a delimiter:

```codebyte/cpp
#include <iostream>
#include <string>

int main() {
    std::string filepath = "documents/projects/main.cpp";
    std::string email = "user@company.co.uk";
    
    // Extract file extension using rfind
    size_t lastDot = filepath.rfind('.');
    if (lastDot != std::string::npos) {
        std::string extension = filepath.substr(lastDot);
        std::cout << "File extension: " << extension << std::endl;
    }
    
    // Find domain in email using rfind
    size_t lastAt = email.rfind('@');
    if (lastAt != std::string::npos) {
        std::string domain = email.substr(lastAt + 1);
        std::cout << "Domain: " << domain << std::endl;
    }
      // Find last directory separator
    size_t lastSlash = filepath.rfind('/');
    if (lastSlash != std::string::npos) {
        std::string filename = filepath.substr(lastSlash + 1);
        std::cout << "Filename: " << filename << std::endl;
    }
    
    return 0;
}
```

## Frequently Asked Questions

### 1. What's the difference between `find()` and `rfind()`?
While `find()` searches from the beginning of the string and returns the first occurrence, `rfind()` searches from the end (or a specified position) toward the beginning and returns the last occurrence. Think of `rfind()` as "reverse find" - it's perfect when you need the rightmost match.

### 2. Why does `rfind()` return a large number instead of -1 when nothing is found?
`rfind()` returns `std::string::npos` (which is typically the largest possible value for `size_t`) when no match is found, not -1. This is because string positions are unsigned integers (`size_t`), and using the maximum value makes it easy to check for "not found" while avoiding negative numbers.

### 3. Can I use `rfind()` to search for the last occurrence of multiple characters?
You can use `rfind()` to search for substrings of any length. For example, `text.rfind("ing")` finds the last occurrence of the substring `"ing"`.
`Note:` If you're looking for the last occurrence of any of several characters, you’ll need to manually loop or use custom logic.

### 4. How do I extract everything after the last occurrence of a character?
A common pattern is to use `rfind()` with `substr()`. For example, to get the filename from a path:
```
size_t pos = path.rfind('/'); // finds the last slash position

if (pos != std::string::npos) {
    std::string filename = path.substr(pos + 1);
}

```
