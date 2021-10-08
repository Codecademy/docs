# **ArrayList in Java**

ArrayList is a class in java that uses dynamic array for storing the elements. It is like an array, but there is no size limit. We can add or remove elements anytime. So, it is much more flexible than the traditional array. It is found in the java.util package. It is like the Vector in C++.

The ArrayList in Java can have the duplicate elements also. It implements the List interface so we can use all the methods of List interface here. The ArrayList maintains the insertion order internally. So when you display the ArrayList it will print in the same order as the elements was inserted.

The important points about Java **ArrayList** class are:

-  ArrayList class can contain duplicate elements.
-  ArrayList class maintains insertion order.
-  ArrayList class is non synchronized.
-  ArrayList allows random access because array works at the index basis.
- In ArrayList, manipulation is little bit slower than the LinkedList in Java because a lot of shifting needs to occur if any element is removed from the array list.

# **Initialization of ArrrayList**

```
ArrayList<String> arr = new ArrayList<String>();
```

# **ArrayList Methods**

| Methods     | Description |
| ----------- | ----------- |
|add(Object O)      | appends the specified element to the end of the ArrayList       |
|add(int index, Onject o)   | insterts the element at the specified position int the list        |
|remove(int index) | Deletes the element of the specified index |
|remove(Object O) | Removes the first occurance of the specified element from the list|
|contains(Object O) | Returns 'true' if the list contains specified element
|get(int index) |Returns the element of the specified position|
|set(int index, Object O)| replaces the Object with the element of the specified index|
|size() |Returns the number of elements in the list |
|clear() |Removes all the elements of the list|
| isEmpty()| Returns true if the list is empty else false |


# **ArrayList Example**

```
//ArrayList is present in util package so import
import java.util.*;

class Example
{
    public static void main(String []args)
    {
        ArrayList<String> arr = new ArrayList<>();
        
        System.out.println(arr);
        //the above statement prints empty list
    
        arr.add("hello");
        arr.add("India");

        System.out.println(arr);

        //removes element hello
        arr.remove("hello");

        System.out.println(arr.size());     // returns size of list

        arr.clear();    // removes all the elements from list

        System.out.println(arr);

    }

}
```

```
[]
[hello, India]
1
[]
```

In the same way you can try for other ArrayList methods from the above list.
