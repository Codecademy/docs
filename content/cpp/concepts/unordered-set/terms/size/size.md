---
Title: 'size()'
Description: 'size() returns the number of elements in a set as an int'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Memory'
  - 'Parameters'
  - 'Script'		
  - 'Syntax'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

<!-- A description of the term -->
The member function ```size()``` in ```<unordered_set>``` returns the number of elements currently stored in an unordered_set as an ```int```. If the unordered_set is empty, it returns 0.


<!-- ##Syntax section that includes the syntax of the method and its details -->
## Syntax
### How to use size
```cpp
#include <unordered_set>
unordered_set<dataType> set_name;
set_name.size();
```
```size()``` is in the ```<unordered_set>``` header file, which needs to be included for the member function to work.

**Parameters**

This function does not take any parameters.


<!-- An ##Example section that show an example of the current entry. -->
## Example: Pattern
This example shows how to setup an unordered_set
```cpp
#include <iostream>
// Removes the need for std
using namespace std;
#include <unordered_set>

int main() {
	// Initializes an unordered_set
	unordered_set<int> mySet;
	// Inserts 10 into the unordered_set
	mySet.insert(10);
	// Prints the size of the unordered_set
	cout << "Size: " << mySet.size();
	return 0;
}
```
This returns 1, because the unordered_set only has 1 element.


## Example: How many elements are unique
This example gives the size of the unordered_set and prints each element out.
``` cpp
#include <iostream>
// Removes the need for std
using namespace std;
#include <unordered_set>

int main() {
  // Declares an unordered_set with duplicates
  unordered_set<int> mySet {
  1, 2, 3, 3, 1, 3, 2, 4, 5, 7
  };
  // Prints the size of the unordered_set
  cout << "There are " << mySet.size() << " elements.\n";
	cout << "The elements are: ";
	for(int ele : mySet) {
  	cout << ele << " ";
	}
  return 0;
}
```
This returns 6, because an unordered_set cannot contain duplicates. The unique elements are: 7, 5, 4, 3, 2, 1


<!-- An ## Codebyte section that have a compilable code inside it showing the current entry in use. Use ```codebyte/cpp to add compilable code. -->
## Codebyte example
The following code shows the distinction between ```size()``` and ```sizeof()```: ```size()``` gives the total number of elements in the unordered_set, while ```sizeof()``` gives the total memory in bytes of the unordered_set. 
Try and change the number of iterations.

```codebyte/cpp
#include <iostream>
// Removes the need for std
using namespace std;
#include <unordered_set>

int main() {
  // Initializes an unordered_set
  unordered_set<int> mySet;
  // Adds elements to the unordered_set
  for (int i = 0; i < 10; i++) {
  mySet.insert(i);
  }
  cout << "Number of elements: " << mySet.size() << "\n";
  cout << "The set's byte usage: " << sizeof(mySet);
  return 0;
}
```
