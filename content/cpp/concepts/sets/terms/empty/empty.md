---
Title: 'empty()'
Description: 'Returns whether a container is empty.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Containers'
  - 'Functions'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**`empty()`** is a method available in various C++ containers, such as `std::set`, that checks whether the container is empty. It returns `true` if the container is empty and `false` otherwise.

## Syntax

```pseudo
set_name.empty()
```

**Parameters:**

This method does not take any parameters.

**Return Values:**

Returns `true` if the container is empty and `false` otherwise.

## Example: Using `empty()` with `std::set`

The code below demonstrates how to use the `empty()` method with `std::set` in C++, printing a message based on whether the set is empty or not.

```cpp
#include <iostream>
#include <set>

int main()
{
	// Initialize an empty set of integers
	std::set<int> my_set;
	
	// Check if the set is empty
	if (my_set.empty())
		std::cout << "True\n";
	else
		std::cout << "False\n";

	// Initialize a different set of integers with values
	std::set<int> my_other_set{2, 4, 3};

	// Check if the newly created set is empty
	if (my_other_set.empty())
		std::cout << "True\n";
	else
		std::cout << "False\n";

	return 0; // End of program
}
```

The output of the code is:

```shell
True
False
```

## Codebyte Example: Using `empty()` to Calculate a Sum

Below is a runnable codebyte example that demonstrates how `empty()` can be used to add up the values in a set. The example uses the dereference operator [`*`](https://www.codecademy.com/resources/docs/cpp/pointers), along with [`begin()`](https://www.codecademy.com/resources/docs/cpp/maps/begin) and [`erase()`](https://www.codecademy.com/resources/docs/cpp/sets/erase), to achieve this.

```codebyte/cpp
#include <iostream>
#include <set>

int main()
{
	// Initialize the sum variable
	int sum = 0;

	// Initialize a set of integers
	std::set<int> my_set{1, 6, 4, 5, 2, 9, 3};

	// Find the sum by iterating until the set is empty
	while(!my_set.empty())
	{
		sum += *my_set.begin(); // Add the first (smallest) element of the set
		my_set.erase(my_set.begin()); // Remove that element from the set
	}

	// Display the sum
	std::cout << "Sum: " << sum << '\n';

	return 0; // End of program
}
```
