---
Title: '.toArray()'
Description: 'The Java ArrayList toArray() method returns an array containing all of the elements in this list in proper sequence (from first to last element).This acts as bridge between array-based and collection-based APIs.'

Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---
The Java `ArrayList` `toArray()` method returns an array containing all of the elements in this list in proper sequence (from first to last element).

## Syntax

The syntax of the `toArray()` method is:

```pseudo
arraylist.toArray(arr);
```
Here, `arraylist` is an object of the ArrayList class.


## Example

```java
import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<String> languages= new ArrayList<>();

    // Add elements in the ArrayList
    languages.add("Java");
    languages.add("Python");
    languages.add("C");
    System.out.println("ArrayList: " + languages);

    // Create a new array of String type
    // size of array is same as the ArrayList
    String[] arr = new String[languages.size()];

    // Convert ArrayList into an array
    languages.toArray(arr);

    // print all elements of the array
    System.out.print("Array: ");
    for(String item:arr) {
      System.out.print(item+", ");
    }
  }
}
```

The output should look like this:

```shell
ArrayList: [Java, Python, C]
Array: Java, Python, C,
```

In the above example, we have created an arraylist named languages. Notice the line,

```java
languages.toArray(arr);
``` 

Here, we have passed an array of String type as an argument. Hence, all elements of the arraylist are stored in the array.
