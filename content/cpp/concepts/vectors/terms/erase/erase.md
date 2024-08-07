---
Title: '.erase()'
Description: 'Removes a single element or a range of elements from a vector.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Vectors'
  - 'Arrays'
  - 'Data Structures'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **.erase()** function removes a single element or a range of elements from a specific position of the `vector`.
When an element is remove with *.erase()* method, the size of the `vector` decrease. Therefore the elements after the ones deleted are moved to a new position.
The position of the elements to remove are identified with `.begin()` and/or `.end()` functions.

## Syntax

```  
vector.erase(position);  
vector.erase(starting_position, ending_position);   
```
The firsr syntax removes a single element.
The second syntax removes a range of elements.

To use `.erase()`, must first defined the `vector` using `std::vector`.

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


