---
Title: 'ArrayList'
Description: 'The `ArrayList` class uses dynamic arrays for storing elements. It is like an array, but there is no size limit.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Classes'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

`ArrayList` is a class in java that uses dynamic array for storing the elements. It is like an array, but there is no size limit. We can add or remove elements anytime. So, it is much more flexible than the traditional array. It is found in the java.util package. It is like the Vector in C++.

Some other important points about the `ArrayList` class include:

- Ability to contain duplicate elements.
- Maintains insertion order.
- It is non-synchronized and, therefore, not safe for multple-threading.
- Allows random access since arrays work on an index basis.
- Space/time complexity is a bit slower than a LinkedList due to the nature of adding/removing elements.

## Syntax

```
ArrayList<String> arr = new ArrayList<String>();
```

## Example

```
// import from the java.util package
import java.util.ArrayList;

class Example
{
    public static void main(String []args)
    {
        ArrayList<String> arr = new ArrayList<>();

        System.out.println(arr);   // prints an empty list

        arr.add("hello");
        arr.add("India");

        System.out.println(arr);

        arr.remove("hello");  // removes element with "hello"

        System.out.println(arr.size());  // returns size of list

        arr.clear();  // removes all the elements from list

        System.out.println(arr);

    }

}
```
The output will be
```
[]
[hello, India]
1
[]
```
 
