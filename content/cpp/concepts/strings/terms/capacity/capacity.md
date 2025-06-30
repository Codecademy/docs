---
Title: '.capacity()'
Description: 'Returns the number of characters the string can contain before allocating new memory.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Memory'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.capacity()`** method returns the amount of storage currently allocated for the string. This capacity is always equal to or greater than the value returned by the [`.size()`](https://www.codecademy.com/resources/docs/cpp/strings/size) method. The `.capacity()` method is useful for optimizing performance in scenarios where a string undergoes frequent modifications. It helps determine how much memory is already allocated, which can reduce unnecessary reallocations during operations such as appending in loops or constructing large strings. When used alongside `.reserve()`, it enables preallocation of sufficient space, enhancing efficiency in performance-critical applications.

## Syntax

```pseudo
string.capacity();
```

**Parameters:**

- The `.capacity()` method does not take any parameters.

**Return value:**

Returns a `size_t` value representing the number of characters the string can hold without requiring a reallocation of memory.

## Example

This code snippet demonstrates the basic usage of the `.capacity()` method and how it can differ from the `.size()` of the string:

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
  string message = "Hello";

  cout << "String: " << message << '\n';
  cout << "Size: " << message.size() << '\n';
  cout << "Capacity: " << message.capacity() << '\n';

  return 0;
}
```

The output of the code above will be:

```shell
String: Hello
Size: 5
Capacity: 15
```

## Codebyte Example

This example shows how the `.capacity()` of a string can grow when needed, and how it may stay the same when there's already enough reserved space:

```codebyte/cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
  string text = "Hi";

  cout << "Initial string:\n";
  cout << "Text: " << text << '\n';
  cout << "Capacity: " << text.capacity() << "\n\n";

  // Add characters to increase capacity
  text += " there, how are you?";
  cout << "After adding more characters:\n";
  cout << "Text: " << text << '\n';
  cout << "Capacity: " << text.capacity() << "\n\n";

  // Add one more character
  text += "!";
  cout << "After adding one more character:\n";
  cout << "Text: " << text << '\n';
  cout << "Capacity: " << text.capacity() << '\n';

  return 0;
}
```
