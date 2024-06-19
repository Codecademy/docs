---
Title: '.iterator()' 
Description: 'used to get an iterator over the elements in this list in proper sequence' 
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags: 
  - 'Arrays'
  - 'Data Structures'
  - 'Iterators'
  - 'Java'
CatalogContent: 
  - 'learn-java'
  - 'paths/computer-science'
---

The **iterator()** method returns an Iterator for the list.

## Syntax

```Syntax:

 Iterator iterator()
 ```
Parameter: This method do not accept any parameter.

Return Value: This method returns an iterator over the elements in this list in proper sequence

## Example

Below examples illustrate the ArrayList.iterator() method:
```
import java.util.*; 
  
public class GFG { 
  
    public static void main(String[] args) 
    { 
        // Create and populate the list 
        ArrayList<String> list 
            = new ArrayList<>(); 
  
        list.add("Geeks"); 
        list.add("for"); 
        list.add("Geeks"); 
        list.add("is"); 
        list.add("a"); 
        list.add("CS"); 
        list.add("Students"); 
        list.add("Portal"); 
  
        // Displaying the list 
        System.out.println("The list is: \n"
                           + list); 
  
        // Create an iterator for the list 
        // using iterator() method 
        Iterator<String> iter 
            = list.iterator(); 
  
        // Displaying the values after iterating 
        // through the list 
        System.out.println("\nThe iterator values"
                           + " of list are: "); 
        while (iter.hasNext()) { 
            System.out.print(iter.next() + " "); 
        } 
    } 
} 
```

Output:
```
The list is: 
[Geeks, for, Geeks, is, a, CS, Students, Portal]

The iterator values of list are: 
Geeks for Geeks is a CS Students Portal
```
