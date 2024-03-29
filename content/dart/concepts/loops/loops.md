---
Title: 'Loops'  
Description: 'Repeats a particular set of commands until certain conditions are not completed.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Algorithms'
Tags:
  - 'Dart'
  - 'Loops'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

**Loops** in Dart are used to iterate a Dart iterable like list, map, etc. and perform operations for multiple times. Dart supports the following kinds of loops.

## for Loop 
The "for" loop is used when we know how many times a block of code will execute. It is similar to the C, C++ or Java "for" loop. 

#### Syntax

```pseudo
for(initialization; condition; increment/decrement){
  //Body of the loop
}
```

#### Example

```dart
void main()
{
    for (int num = 0; num <= 5; num++) {
        print(num);
    }
}
```

The above code gives the following output:

```shell
0
1
2
3
4
5
```

## for...in Loop

The "for…in" loop is slightly different from the "for" loop. It takes dart object or expression as an iterator and iterates the element one at a time. The 
value of the element is bound to var, which is valid and available for the loop body. The loop will execute until no element is left in the iterator.  

#### Syntax

```pseudo
for (var in expression) {
   // Body of the loop
}
```

#### Example

```dart
void main()
{
    var nums = [ 1, 2, 3, 4, 5 ];
    for (int num in nums) {
        print(num);
    }
}
```

The above code gives the following output:

```shell
1
2
3
4
5
```

## forEach Loop

The for-each loop iterates over all elements in some container/collectible and passes the elements to some specific function.

#### Syntax

```pseudo
collection.forEach(void f(value))
```

f(value) is a parameter which is used to call the function "f" for each value in the collection.

#### Example

```dart
void main()
{
  var nums = [1,2,3,4,5];
  nums.forEach((var num)=> print(num)); 
}
```

The above code gives the following output:

```shell
1
2
3
4
5
```

## while Loop

The while loop executes a block of code until the given condition is false. It is more beneficial when we don't know the number of executions.

#### Syntax

```pseudo
while(condition) {  
   // loop body  
}  
```

#### Example

```dart
void main()
{
    var num = 4;
    int i = 1;
    while (i <= num) {
        print('Hello there');
        i++;
    }
}
```

The output of the above code is,

```shell
Hello there
Hello there
Hello there
Hello there
```

## do...while Loop

The do…while loop is similar to the while loop but only difference is that it executes the loop statement and then check the given condition. Hence the block of code inside the loop gets executed atleast once for do...while loop.

#### Syntax

```pseudo
do {  
    // loop body  
} while(condition);  
```

#### Example

```dart
void main()
{
    var num = 4;
    int i = 1;
    do {
        print('Hello there');
        i++;
    } while (i <= num);
}
```

The output of the above code is,

```shell
Hello there
Hello there
Hello there
Hello there
```
