---
Title: 'Templates'
Description: 'Templates provide the ability to use a type as a parameter in functions and classes.'
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
  - 'Templates'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Templates** provide the ability to use a [data type](https://www.codecademy.com/resources/docs/cpp/data-types) as a parameter in [functions](https://www.codecademy.com/resources/docs/cpp/functions) and [classes](https://www.codecademy.com/resources/docs/cpp/classes). These are referred to as generic types. This provides the ability to define a set of related classes or functions that can operate on many different types with a single declaration.

Templates are like [macros](https://www.codecademy.com/resources/docs/cpp/macros) in that they are expanded at compile-time. While the source only has one definition, the compiled code will have copies of the template for each type actually used in calling it.

## Function Templates

Function templates are generic functions that can be used for different types.

### Syntax

```pseudo
template <class typeidentifier> function;
```

Where `typeidentifier` is a variable name that stands in for the generic type and `function` is a function declaration, using `typeidentifier` as a generic type in its definition. The `typeidentifier` can be used anywhere a data type name would be used, including the return type.

The template can also define multiple type identifiers, separated by commas:

```pseudo
template <class identifer1, class identifier2> function;
```

To call the function with a type parameter, the following syntax is used:

```pseudo
function_name <type> (parameters);
```

In the case of a template with multiple type identifiers, a comma-separated list of type parameters, one for each identifier, must be provided in the angle brackets:

```pseudo
function_name `<type1, type2>` (parameters);
```

> **Note:** In the case where the `typeidentifier` is used for the function parameters, the compiler can identify the type associated with `typeidentifer` from the passed argument and the function can be called without the `<type>` as if it was a regular function.
>
> **Note:** The word `typename` can be used as a synonym for `class` in a template definition: `<typename typeidentifier>`

### Example

The following example creates a `myAdd` function that can use any type where the `+` [operator](https://www.codecademy.com/resources/docs/cpp/operators) is defined:

```cpp
#include <iostream>
using namespace std;

template <class T> T myAdd(T x, T y) {
  T result;

  result = x + y;

  return result;
}

int main() {
  cout << myAdd <int> (3, 7) << endl;
  cout << myAdd <double> (3.5, 7.2) << endl;
  cout << myAdd <string> ("Hello", " World!") << endl;

  return 0;
}
```

This results in the following output:

```shell
10
10.7
Hello World!
```

## Class Templates

Class templates are classes defined along with a generic type that can be applied throughout the class definition.

### Syntax

```pseudo
template <class typeidentifier> class;
```

Where `typeidentifier` is a variable name that stands in for the generic type and `class` is a class declaration, using `typeidentifier` as a generic type in its definition.

Like a template function, the `typeidentifier` can be used anywhere a data type name would be used, and the class can be defined with multiple type parameters.

The class is referred to in code as follows:

```pseudo
classname <type>
```

> **Note:** If a function member is defined outside the class declaration, the function definition must be preceded with the `template <...>` syntax:
>
> ```pseudo
> template <class T>
> type classname<T>::functionname(parameters)
> ```

### Example

The following example creates a `myPair` class that stores two objects of a given type, and provides an `add` method to add the two together:

```cpp
#include <iostream>
using namespace std;

template <class T>
class myPair {
  T x, y;
public:
  myPair (T first, T second) {
    x = first;
    y = second;
  }

public:
  T add ()
  {
    T result;
    result = x + y;
    return result;
  }
};

int main() {
  myPair <int> intPair(3, 7);
  myPair <double> doublePair(3.5, 7.2);
  myPair <string> stringPair("Hello", " World!");

  cout << intPair.add() << endl;
  cout << doublePair.add() << endl;
  cout << stringPair.add() << endl;

  return 0;
}
```

This results in the following output:

```shell
10
10.7
Hello World!
```
