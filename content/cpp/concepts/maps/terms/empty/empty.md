---
Title: 'empty'
Description: 'Checks to see if an STL map object is empty (contains elements) or not and returns a boolean true or false value, respectively'
Subjects: 
  - 'Computer Science'
Tags:
  - 'C++'
  - 'Data Structures'
  - 'Documentation'
  - 'Functions'
  - 'Map'
  - 'Programming'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The C++ Standard Template Library (STL) [map](https://www.codecademy.com/resources/docs/cpp/maps) class **.empty()** function is a member function of the STL map class. This function checks to see if an STL map object is empty (contains no key-value pairs) or not and returns a boolean true or false value, respectively

## Syntax

The STL map class' `.empty()` member function can be called using the dot (.) operator, as shown below. 

```pseudo
  //If myMap is an STL map object, this statement calls the map class' empty() function.
  myMap.empty();
```

The `.empty()` function takes no parameters and returns either a boolean true or false value. A returned true value indicates that the map is indeed empty, while a false value indicates that the map contains one or more elements.

## Example

The following example calls the map class `.empty()` member function, stores it's return value in a boolean variable, and uses it to display whether or not the map is empty.

```cpp
  #include <map>

  using namespace std;

  int main(){
  //Create an empty STL map class object.
  map<int, char> emptyMap;
  
  //Store the return value of the .empty() member function in a boolean variable, 'isEmpty'.
  bool isEmpty = emptyMap.empty();

  //Use the value in 'isEmpty' to display whether the map is empty or not.
  isEmpty ? printf("The map is empty.") : printf("The map is not empty");

  return 0;
  }
```

Running the code above produces the following output:

```shell
  'The map is empty.
```

## Codebyte Example (if applicable)

The following code creates two STL map class objects, leaving one empty and initializing the other with a number of elements. The `.empty()` member function is then called on both objects, and it's return value is used to display whether or not the map is empty.

```codebyte/cpp
  #include <map> //The 'map' header file must be included to use the C++ Standard Template Library map class

  //We can use the standard namespace so we can simply type 'map' instead of specifying 'std::map' every time
  using namespace std; 

  int main() {
  //Create an empty map
  map<int, char> emptyMap;

  //Create a non-empty map using an initializer list
  map<int, char> notEmptyMap{{1, 'a'}, {2, 'b'}, {3, 'c'}};

  //Calling the .empty() function on an empty map:
  printf("Testing if emptyMap is empty:\n");
	
  //The function returns true if the map is empty, and false otherwise
  if (emptyMap.empty()) {
    printf("The map is empty.\n");
  }
  else {
    printf("The map is not empty.\n");
  }

  //Calling the .empty() function on a map containing elements:
  printf("Testing if notEmptyMap is empty:\n");
  if (notEmptyMap.empty()) {
    printf("The map is empty.\n");
  }
  else {
    printf("The map is not empty.\n");
  }

  return 0;
  }
```