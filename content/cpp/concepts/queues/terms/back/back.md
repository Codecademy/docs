---
Title: '.back()'
Description: 'Returns a reference to the element at the back of the queue.' 
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Game Development'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Classes'
  - 'Methods'
  - 'Objects'
  - 'OOP'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The C++ **`.back()`** [method](https://www.codecademy.com/resources/docs/cpp/methods) is used to access the element at the back of the queue without removing it. 

## C++ `.back()` Syntax

```pseudo
queueName.back();
```

**Parameters:**

The C++ `.back()` method takes no parameters.

**Return value:**

Returns a reference to the element at the end of the queue.

## Example 1: Basic usage of C++ `.back()`

This example uses C++ `.back()` to access the last element of the queue:

```cpp
#include <iostream>
#include <queue>
using namespace std;

int main() {
	// Declaring a queue
	queue<int> q;
	
	// Inserting int elements into the queue
	q.push(10);
	q.push(20);
	q.push(30);
	
	// Print the last element of the queue
	cout <<"Last element: " << q.back() << endl;
}
```

Here is the output:

```shell
30
```

## Example 2: Using C++ `.back()` with `.push()`

This example uses C++ `.back()` to return the last element of the queue after we used `.push()`

```cpp
#include <iostream>
#include <queue>
using namespace std;

int main () {
	queue<string> q;
	
	q.push("Jhon");
	q.push("Bob");
	q.push("Doe");
	
	cout <<"Last element: " << q.back() << endl;
	q.push("Alice");
	cout <<"Last element after push: " << q.back() << endl;
	
}
```

Here is the output:

```shell
Doe
Alice
```

## Codebyte Example: Modifying the Last Element Using C++ `.back()`

This codebyte example uses C++ `.back()` to modify the last element of the queue:

```codebyte/cpp
#include <iostream>
#include <queue>
using namespace std;

int main() {
  queue<int> q;

  q.push(10);
  q.push(20);

  cout << q.back() << endl;

  // Modify the first element of the queue
  q.back() = 100;

  cout << q.front() << endl;

  return 0;
}
```