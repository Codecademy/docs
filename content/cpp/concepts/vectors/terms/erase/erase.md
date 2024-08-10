---
Title: '.erase()'
Description: 'Removes a single element or a range of elements from a vector.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Vectors'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.erase()`** function removes a single element or a range of elements from a specific position in the `vector`. When an element is removed with the `.erase()` function, the size of the `vector` decreases, and the elements after the deleted ones are shifted to fill the gap. The positions of the elements to remove are identified with `.begin()` and/or `.end()` functions.

## Syntax


To use `.erase()`, the `vector` must be defined using `std::vector`.

## Example 1

In the example below *.erase()* removes a single element:

```cpp
#include <iostream>
#include <vector>

int main ()
{   
    // Declare a vector
    std::vector<int> room;      

    // Add values (from 1 to 10)
    for (int i=1; i<=10; i++) room.push_back(i); 

    // Remove the 3rd element
    room.erase (room.begin()+2);  
    
    // Print out element left in the vector
    std::cout << "Rooms available:";
    for (unsigned i=0; i<room.size(); ++i)
      std::cout << ' ' << room[i];
    std::cout << '\n';

     return 0;
}
```

The output of the above code is :
```shell
Rooms available: 1 2 4 5 6 7 8 9 10
```

## Example 2

In the example below *.erase()* removes a range of element:

```cpp
#include <iostream>
#include <vector>

int main ()
{  
    // Declare a vector  
    std::vector<int> room;      

    // Add values (from 1 to 10)
    for (int i=1; i<=10; i++) room.push_back(i); 

    // Remove the last 3 elements
    room.erase (room.begin()+7,room.end());  

    std::cout << "Rooms available:";
    for (unsigned i=0; i<room.size(); ++i)
        std::cout << ' ' << room[i];
    std::cout << '\n';

    return 0;
}
```
The output of the above code is :
```shell
Rooms available: 1 2 4 5 6 7
```


