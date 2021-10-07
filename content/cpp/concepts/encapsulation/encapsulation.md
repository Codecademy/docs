---
Title: 'Encapsulation'
Description: 'Encapsulation is a way of organizing data members and functions by wrapping them together in a single unit. It makes the code cleaner, readable, and maintainable.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Encapsulation'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

Encapsulation is a way of organizing data members and functions by wrapping them together in a single unit. It makes the code cleaner, readable, and maintainable. 

The data can only be accessed by member functions that are wrapped in the class. Encapsulation led to the important OOP concept of data hiding or abstraction.

```cpp
#include<iostream>

class Encapsulation
{
    private:
        // data hidden from outside world
        int num;

    public:
        // function to set value of num
        void setNum(int x)
        {
            num = x;
        }

        // function to return value of variable num
        int getNum()
        {
            return num;
        }
};

int main()
{
    Encapsulation obj;

    obj.set(10);

    std::cout<<obj.get(); // Output: 10

    return 0;
}
```

In the example above, data member `num` and functions `setNum()` and `getNum()` are wrapped together into one class called `Encapsulation`. `num` can only be accessed by either the `setNum()` or `getNum()` function. `setNum()` is used to set the value of `num` and `getNum()` returns the value of `num`.
