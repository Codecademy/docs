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

In Dart, **Loops** are used to iterate over iterables such as lists, maps, etc., allowing operations to be performed repeatedly.
Dart supports the following types of loops:

## for Loop

The `for` loop is utilized when the number of iterations for a code block is predetermined. It shares similarities with the `for` loop syntax in languages such as [C](https://www.codecademy.com/resources/docs/c), [C++](https://www.codecademy.com/resources/docs/cpp), [Java](https://www.codecademy.com/resources/docs/java), etc.

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
    for (int n = 0; n <= 5; n++) {
        print(n);
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

### Syntax

```pseudo
for (var in expression) {
   // Body of the loop
}
```

### Example

```dart
void main()
{
    var nums = [ 1, 2, 3, 4, 5 ];
    for (int n in nums) {
        print(n);
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

The `forEach` loop iterates over all elements in a container or collection and invokes a specified function for each element.

### Syntax

```pseudo
collection.forEach(void f(value))
```

`f(value)` is a parameter which is used to call the function `f` for each value in the collection.

### Example

```dart
void main()
{
  var nums = [1,2,3,4,5];
  nums.forEach((var n)=> print(n));
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

The `while` loop executes a block of code until the given condition is false. It is more beneficial when the number of executions is not known.

### Syntax

```pseudo
while(condition) {
   // loop body
}
```

#### Example

```dart
void main()
{
    var n = 4;
    int i = 1;
    while (i <= n) {
        print('Hello there');
        i++;
    }
}
```

The output of the above code is:

```shell
Hello there
Hello there
Hello there
Hello there
```

## do-while Loop

The `do-while` loop is similar to the `while` loop, with the key difference being that it executes the loop statement before checking the given condition. Therefore, the block of code inside the loop is guaranteed to execute at least once.

### Syntax

```pseudo
do {
    // loop body
} while(condition);
```

### Example

```dart
void main()
{
    var n = 4;
    int i = 1;
    do {
        print('Hello there');
        i++;
    } while (i <= n);
}
```

The output of the above code is:

```shell
Hello there
Hello there
Hello there
Hello there
```
