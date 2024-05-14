---
Title: 'Loops'  
Description: 'Repeats a particular set of commands until certain conditions are met.'
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

**Loops** in Dart are used to iterate over iterables such as lists, maps, etc., allowing operations to be performed repeatedly. 
Dart supports the following types of loops:

## for Loop 
The `for` loop is utilized when the number of iterations for a block of code is predetermined. It shares similarities with the `for` loop syntax in languages such as C, C++, or Java. 

### Syntax

```pseudo
for(initialization; condition; increment/decrement){
  //Body of the loop
}
```

### Example

```dart
void main()
{
    for (int num = 0; num <= 5; num++) {
        print(num);
    }
}
```

The above code produces the following output:

```shell
0
1
2
3
4
5
```

## for-in Loop

The `for-in` loop is slightly different from the `for` loop. It iterates over each element of a Dart object or expression, one at a time. It's preferred when there's no need for counter iteration.

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

## do-while Loop

The do-while loop is similar to the `while` loop, with the key difference being that it executes the loop statement before checking the given condition. Therefore, the block of code inside the loop is guaranteed to execute at least once

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
