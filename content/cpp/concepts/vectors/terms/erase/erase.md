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

The **.erase()** function removes a single element or a range of elements from a specific position that is defined by iterators.
When an element is remove with *.erase()* method, the size of the vector decrease. Therefore the elements after the ones deleted are moved to a new position.

## Syntax

```  
std::vector <type> name

name.erase(position);   // removes a single element

name.erase(starting_position, ending_position);   // removes a range of element
```

## Example

