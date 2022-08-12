---
Title: 'Templates'
Description: 'Templates refer to the ability to use a type as a parameter in functions and classes.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Objects'
  - 'Data Types'
  - 'Constructors'
  - 'Methods'
  - 'Functions'
  - 'OOP'
  - 'Parameters'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Templates** refer to the ability to use a [type](https://www.codecademy.com/resources/docs/cpp/data-types) as a parameter in [functions](https://www.codecademy.com/resources/docs/cpp/functions) and [classes](https://www.codecademy.com/resources/docs/cpp/classes). Such classes and methods are referred to as using a generic type. This provides the ability to define a set of related classes or functions that can operate on many different types with a single declaration.

Templates are like [macros](https://www.codecademy.com/resources/docs/cpp/macros) in that they are expaned at compile-time. While the source only has one definition, the compiled code will have copies of the template for each type actually used in calling it.

## Function Templates

Function templates are generic functions that can be used for different types.

### Syntax

```pseudo
template <class typeidentifier> function;
```

Where `typeidentifier` is a variable name that stands in for the generic type and `function` is a function declaration, using `typeidentifier` as a generic type in its definition. The `typeidentifier` can be used anywhere a data type name would be used, including the return type.

The template can also define multiple type identifiers, separated by commas: `<class identifer1, class identifier2>`

To call the function with a type parameter, the following syntax is used:

```pseudo
function_name <type> (parameters);
```

In the case with a template with multiple type identifiers, a comma separated list of type parameters, one for each identifier, must be provided in the angle brackets: `<type1, type2>`

### Example

The following example creates a `myAdd` function that can use any type where the `+` operator is defined:

```cpp
#include <iostream>
using namespace std;
  
template <typename T> T myAdd(T x, T y)
{
    return (x + y);
}
  
int main()
{
    cout << myAdd<int>(3, 7) << endl; 
    cout << myAdd<double>(3.5, 7.2) << endl; 
    cout << myAdd<string>("Hello", " World!") << endl; 
  
    return 0;
}
```

This results in the folowing output:

```shell
10
10.7
Hello World!
```

