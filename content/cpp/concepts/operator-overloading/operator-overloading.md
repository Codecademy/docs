---
Title: 'Operator Overloading'
Description: 'Operator overloading redefines operators for user-defined classes.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Binary'
  - 'Logical'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Operator overloading** redefines operators for user-defined classes. When an overloaded operator is called, the compiler determines which definition to use based on the arguments provided. The following operators can be overloaded:

| -> | ->* | new | new [] |	delete | delete [] |
|----|-----|-----|--------|--------|-----------|
|  + | -   | *   |	/     |	 %     |	^      |
| += | -=  | *=  |	/=    |	 %=    |	^=     |
|&#124;= | & | &#124; |	 ~	| ! | , |
| = | &= | <<= |	>>= | [] | () |
| < |	> |	<= | >= | ++ | -- |
| << | >>| == |	!= | && | &#124; &#124;|

The operators below cannot be overloaded:

|::|.*|.|?|
|--|--|-|-|

## Syntax

The `operator` keyword is used with the following syntax to overload operators:

```pseudo 
class className {

    public:
        returnType operator symbol (arguments) {
        }
};
```

- `className`: name of the class
- `returnType`: return type of the function
- `symbol`: operator is which to overload
- `arguments`: parameters to pass in

## Codebyte Example

The following codebyte example overloads the plus (`+`) operator within the `Pyramid` class and returns the volume of two pyramids added together:

```codebyte/cpp
#include <iostream>
using namespace std;

class Pyramid{
  public:
    // Defining getters and setters
    double getVolume(void){
      return (base*height)/3;
    }
    
    void setBase(double b){
      base = b;
    }

    void setHeight(double h){
      height = h;
    } 

    // Overload + operator
    Pyramid operator+(const Pyramid& p){
      Pyramid pyramid;
      pyramid.base = this->base + p.base;
      pyramid.height = this->height + p.height;
      return pyramid;
    }
  private:
    double base;
    double height;
};

int main(){
  // Declare pyramids and volume variables
  Pyramid pyramid1;
  Pyramid pyramid2;
  Pyramid pyramid3;
  double vol = 0.0;

  // Setting pyramid1
  pyramid1.setBase(22.0);
  pyramid1.setHeight(16.0);
  vol = pyramid1.getVolume();
  cout << "Volume of pyramid1 is: " << vol << endl;

  // Setting pyramid2
  pyramid2.setBase(18.0);
  pyramid2.setHeight(14.0);
  vol = pyramid2.getVolume();
  cout << "Volume of pyramid2 is: " << vol << endl;

  // Adding pyramid1 & pyramid2 with overloaded operator
  pyramid3 = pyramid1 + pyramid2;

  // Print out volume of pyramid3
  vol = pyramid3.getVolume();
  cout << "The volume of pyramid3 is: " << vol;
}
```