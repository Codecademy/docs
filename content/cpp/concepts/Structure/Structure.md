---
Title: 'Structure'
Description: 'A structure is a user-defined data type in C/C++. It can be used to store together elements of different data types. It can also be called as an array of heterogeneous elements(here elements means members).'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'User-Defined Data Type'
  - 'Structure'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---
**A structure is a user-defined data type in C/C++. It can be used to store together elements of different data types. It can also be called as an array of heterogeneous elements(here elements means members).**

`struct` keyword is used to create a structure.

## Syntax

### Defining Structure
```cpp
struct structure_name
{
    member1;
    member2;
    member3;
    .
    .
    .
    memberN;
};
```

#### Example
```cpp
struct Coder
{
   char Name[30];
   char Username[15];
   long ID;
};
```

### Declaring and Initializing Structure Variable
```cpp
#include <iostream>
using namespace std;
struct Coordinates {
    int x, y;
}c1;//Declairing variable c1
 
int main()
{
    struct Coordinates c2 = { 0, 1 };//Declairing and Initializing variable c2 
    c1.x=2;
    c1.y=2;
    cout << "x1 = " << c1.x << ", y1 = " << c1.y<< endl;//for variable c1
    cout << "x2 = " << c2.x << ", y2 = " << c2.y;//for variable c2 
    return 0;
}
```
**Output**
```
x1 = 2, y1 = 2
x2 = 0, y2 = 1
```

### Array of Structure
```cpp
#include <iostream>
using namespace std;
struct Coordinates {
    int x, y;
};
 
int main()
{
    struct Coordinates c[4];
    int i;
    for(i=0;i<4;i++)
    cin>>c[i].x>>c[i].y;
    for(i=0;i<4;i++)
    {
      cout<<"x"<<i+1<<"="<<c[i].x<<"\t";
      cout<<"y"<<i+1<<"="<<c[i].y<<endl;
    }
    return 0;
}
```
**Input**
```
1 0
1 2
1 1
0 2
```
**Output**
```
x1=1    y1=0
x2=1    y2=2
x3=1    y3=1
x4=0    y4=2
```
