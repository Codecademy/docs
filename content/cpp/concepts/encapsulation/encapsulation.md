---
Title: 'Encapsulation'
Description: 'The wrapping up of data members and functions together in a single unit called class is known as Encapsulation. It makes code cleaner and easy to read.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Encapsulation'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The wrapping up of data members and functions together in a single unit called class is known as **Encapsulation**. It makes code cleaner and easy to read. The data can only be accessed by member functions that are wrapped in the class. Encapsulation led to the important OOP concept of data hiding or abstraction.

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

In the above example, data member `num` and functions `setNum` and `getNum` are wrapped together into one class called `Encapsualtion`. `num` can only be accessed by either `setNum` or `getNum` function. `setNum` is used to set the value of `num` and `getNum` return the value of `num`.
