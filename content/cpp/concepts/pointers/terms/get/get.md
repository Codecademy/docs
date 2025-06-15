---
Title: '.get()' 
Description: 'Returns a raw pointer to a managed object without transferring ownership.'

Subjects:
  - 'Computer Science'

Tags: 
  - 'Pointers'

CatalogContent: 
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **.get()** method returns a raw pointer that points to the managed object (if any) without transferring ownership. It is used with smart pointers in C++, including the unique_ptr and shared_ptr. 

After using this method, the smart pointer still owns the object and is responsible for its deletion.

## Syntax

```pseudo 
T* raw_ptr = smart_ptr.get() // returns raw pointer to smart_ptr's managed object, but only smart_ptr owns it
```

## Example

This example shows how the .get() method returns a raw pointer to a managed object without transferring ownership.

```cpp

#include <iostream>

int main() {

	std::unique_ptr<int> uniq_ptr(new int(20));

	int* raw_ptr = nullptr; 
	
	raw_ptr = uniq_ptr.get(); // returns pointer to a managed object without transferring ownership

	std::cout << "value at raw_ptr address: " << *raw_ptr << std::endl; 

	return 0;
}
```

The output of this example is:

```shell 

value at raw_ptr address: 20
```

In this example:

- The uniq_ptr manages an int with a value of 20.
- After calling .get(), raw_ptr now has read and write access to the int that uniq_ptr manages.